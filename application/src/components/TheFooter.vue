<script>

	import Tr from '@/i18n/translation'

	export default {
		setup() {
			return { Tr }
		}
	}
</script>

<template>
    <footer class="footer pt-3 mt-5">
        <div class="container mt-3">
            <div class="row">
                <div class="col-12 col-md-3 mb-4 ms-auto">
                    <div>
                        <h2 class="text-gradient text-secondary font-weight-bolder fs-5">{{ $t("nav.sitemap") }}</h2>
                    </div>
                    <ul class="flex-column ms-n3 nav">
                        <li class="nav-item">
                            <a class="nav-link uline" href="/">{{ $t("nav.home_local") }}</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link uline" :href="`https://clihc2026.laihc.org/${Tr.currentLocale}`">
                                {{ $t("nav.central_site") }}
                            </a>
                        </li>
                    </ul>
                    <div>
                        <ul class="d-flex flex-row ms-n3 nav">
                            <li class="nav-item">
                                <a class="nav-link pe-1" href="https://www.facebook.com/clihc" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-facebook text-lg opacity-8"></i>
                                    <span class="visually-hidden">{{ $t("nav.facebook") }}</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link pe-1" href="https://x.com/clihc2026" target="_blank" rel="noopener noreferrer">
                                    <i class="fab fa-x-twitter text-lg opacity-8"></i>
                                    <span class="visually-hidden">{{ $t("nav.twitter") }}</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <a href="https://www.laihc.org/"><img src="/assets/img/logos/laihc-blanco.svg" alt="LaIHC" class="mt-2" height="50" /></a>
                </div>

                <div class="col-6 col-md-2 mb-4">
                    <div>
                        <h3 class="text-gradient text-secondary text-sm">{{ $t("nav.calls") }}</h3>
                        <ul class="flex-column ms-n3 nav">
                            <li class="nav-item">
                                <a class="nav-link uline" :href="`https://clihc2026.laihc.org/${Tr.currentLocale}/call-for-participation`">
                                    {{ $t("nav.calls_general") }}
                                </a>
                            </li>
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-short-papers' })"
                                    class="nav-link uline"
                                >
                                    {{ $t("nav.calls_short_papers") }}
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-hackathon' })"
                                    class="nav-link uline"
                                >
                                    {{ $t("nav.calls_hackathon") }}
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-6 col-md-2 mb-4">
                    <div>
                        <h3 class="text-gradient text-secondary text-sm">{{ $t("nav.for_participants") }}</h3>
                        <ul class="flex-column ms-n3 nav">
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'getting-started' })"
                                    class="nav-link uline"
                                >
                                    {{ $t("nav.getting_started") }}
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'registration' })"
                                    class="nav-link uline"
                                >
                                    {{ $t("nav.rates_and_registration") }}
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-6 col-md-2 mb-4">
                    <div>
                        <h3 class="text-gradient text-secondary text-sm">{{ $t("nav.program") }}</h3>
                        <ul class="flex-column ms-n3 nav">
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'schedule' })"
                                    class="nav-link uline"
                                >
                                    {{ $t("nav.schedule") }}
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link uline" :to="Tr.i18nRoute({ name: 'keynote-speakers' })">
                                    {{ $t("nav.keynotes") }}
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-6 col-md-3 mb-1">
                    <div>
                        <h3 class="text-gradient text-secondary text-sm">{{ $t("nav.organizers") }}</h3>
                        <ul class="flex-column ms-n3 nav">
                            <li class="nav-item">
                                <a class="nav-link uline" :href="`https://clihc2026.laihc.org/${Tr.currentLocale}/organizers`">
                                    {{ $t("nav.organizers_general") }}
                                </a>
                            </li>
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'organizers' })"
                                    class="nav-link uline"
                                >
                                    {{ $t("nav.organizers_local") }}
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-12 my-4">
                    <div class="text-center">
                        <p class="my-0 text-sm">
                            {{ $t("nav.copyright") }}
                        </p>
                        <p class="my-0  text-sm">
                            <a class="uline" href="CHANGELOG.md">2026.1.0.0.b</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
