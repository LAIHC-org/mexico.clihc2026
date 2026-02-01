const fs = require('fs');
const path = require('path');

const projectRoot = path.resolve(__dirname, '..');
const distRoot = path.join(projectRoot, 'dist');
const envPath = path.join(projectRoot, '.env');
const routerPath = path.join(projectRoot, 'src', 'router', 'index.js');
const indexHtmlPath = path.join(projectRoot, 'index.html');

const readText = (filePath) => fs.readFileSync(filePath, 'utf8');

const parseEnv = (envText) => {
  const env = {};
  envText.split('\n').forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const eqIndex = trimmed.indexOf('=');
    if (eqIndex === -1) return;
    const key = trimmed.slice(0, eqIndex).trim();
    const value = trimmed.slice(eqIndex + 1).trim();
    env[key] = value;
  });
  return env;
};

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const findMeta = (html, attrName, attrValue) => {
  const regex = new RegExp(
    `<meta\\s+[^>]*${attrName}=["']${escapeRegExp(attrValue)}["'][^>]*content=["']([^"']+)["'][^>]*>`,
    'i'
  );
  const match = html.match(regex);
  return match ? match[1] : '';
};

const findLink = (html, relValue) => {
  const regex = new RegExp(
    `<link\\s+[^>]*rel=["']${escapeRegExp(relValue)}["'][^>]*href=["']([^"']+)["'][^>]*>`,
    'i'
  );
  const match = html.match(regex);
  return match ? match[1] : '';
};

const getLocales = () => {
  if (!fs.existsSync(envPath)) return ['en'];
  const env = parseEnv(readText(envPath));
  const rawLocales = env.VITE_SUPPORTED_LOCALES || env.VITE_DEFAULT_LOCALE || 'en';
  return rawLocales
    .split(',')
    .map((locale) => locale.trim())
    .filter(Boolean);
};

const getRoutes = () => {
  const routerText = readText(routerPath);
  const routeRegex = /{\s*path:\s*'([^']*)'[\s\S]*?meta:\s*{\s*title:\s*"([^"]+)"[\s\S]*?}/g;
  const routes = [];
  let match;
  while ((match = routeRegex.exec(routerText))) {
    const routePath = match[1].trim();
    const title = match[2].trim();
    if (routePath.startsWith('/') || routePath.includes(':') || routePath.includes('*')) {
      continue;
    }
    routes.push({ path: routePath, title });
  }

  const unique = new Map();
  routes.forEach((route) => {
    unique.set(route.path, route);
  });
  return Array.from(unique.values());
};

const ensureDir = (dirPath) => {
  fs.mkdirSync(dirPath, { recursive: true });
};

const normalizeBaseUrl = (url) => url.replace(/\/+$/, '');

const buildUrl = (baseUrl, locale, routePath) => {
  if (!routePath) {
    return `${baseUrl}/${locale}/`;
  }
  return `${baseUrl}/${locale}/${routePath}`;
};

const renderHtml = ({
  locale,
  title,
  description,
  siteName,
  ogImage,
  ogImageAlt,
  ogImageSecure,
  twitterSite,
  url,
}) => `<!DOCTYPE html>
<html lang="${locale}">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta property="og:locale" content="${locale === 'en' ? 'en-US' : locale}" />
    <meta property="og:site_name" content="${siteName}" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${ogImage}" />
    <meta property="og:image:secure_url" content="${ogImageSecure}" />
    <meta property="og:image:alt" content="${ogImageAlt}" />
    <meta property="og:url" content="${url}" />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${ogImage}" />
    ${twitterSite ? `<meta name="twitter:site" content="${twitterSite}" />` : ''}
    <link rel="canonical" href="${url}" />
    <meta http-equiv="refresh" content="0; url=/" />
  </head>
  <body>
    <p>Redirecting to the conference site...</p>
    <script>
      sessionStorage.redirect = location.href;
      location.replace("/");
    </script>
    <noscript>
      <p>JavaScript is required. Continue to <a href="/">CLIHC 2026</a>.</p>
    </noscript>
  </body>
</html>
`;

const main = () => {
  if (!fs.existsSync(distRoot)) {
    console.error('dist/ not found. Run the build first.');
    process.exit(1);
  }

  const indexHtml = readText(indexHtmlPath);
  const description =
    findMeta(indexHtml, 'property', 'og:description') ||
    findMeta(indexHtml, 'name', 'description') ||
    'CLIHC 2026 conference information.';
  const siteName = findMeta(indexHtml, 'property', 'og:site_name') || 'CLIHC 2026';
  const ogImage = findMeta(indexHtml, 'property', 'og:image');
  const ogImageSecure = findMeta(indexHtml, 'property', 'og:image:secure_url') || ogImage;
  const ogImageAlt = findMeta(indexHtml, 'property', 'og:image:alt') || 'CLIHC 2026 banner';
  const twitterSite = findMeta(indexHtml, 'name', 'twitter:site');
  const canonical = findLink(indexHtml, 'canonical') || 'https://clihc2026.laihc.org/';
  const baseUrl = normalizeBaseUrl(canonical);

  const locales = getLocales();
  const routes = getRoutes();

  locales.forEach((locale) => {
    routes.forEach((route) => {
      const url = buildUrl(baseUrl, locale, route.path);
      const outputDir = path.join(distRoot, locale, route.path);
      ensureDir(outputDir);
      const outputFile = path.join(outputDir, 'index.html');
      const html = renderHtml({
        locale,
        title: route.title,
        description,
        siteName,
        ogImage,
        ogImageAlt,
        ogImageSecure,
        twitterSite,
        url,
      });
      fs.writeFileSync(outputFile, html, 'utf8');
    });
  });
};

main();
