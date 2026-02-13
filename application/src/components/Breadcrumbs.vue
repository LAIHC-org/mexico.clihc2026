<script>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'
import Tr from '@/i18n/translation'

const PARENT_GROUPS = {
  calls: { key: 'nav.calls', routeName: 'call-for-participation' },
  participants: { key: 'nav.for_participants', routeName: 'getting-started' },
  program: { key: 'nav.program', routeName: 'schedule' },
  organizers: { key: 'nav.organizers', routeName: 'organizers' },
}

const PAGE_MAP = {
  'call-for-participation': { parent: PARENT_GROUPS.calls, currentKey: 'nav.calls_general' },
  'call-for-hackathon': { parent: PARENT_GROUPS.calls, currentKey: 'nav.calls_hackathon' },
  'getting-started': { parent: PARENT_GROUPS.participants, currentKey: 'nav.getting_started' },
  'registration': { parent: PARENT_GROUPS.participants, currentKey: 'nav.rates_and_registration' },
  'schedule': { parent: PARENT_GROUPS.program, currentKey: 'nav.schedule' },
  'keynote-speakers': { parent: PARENT_GROUPS.program, currentKey: 'nav.keynotes' },
  'industry-government-day': { parent: PARENT_GROUPS.program, currentKey: 'nav.industry_government_day' },
  'hackathon': { parent: PARENT_GROUPS.program, currentKey: 'nav.hackathon' },
  'organizers': { parent: PARENT_GROUPS.organizers, currentKey: 'nav.organizers_local' },
  'not-found': { currentKey: 'nav.not_found' },
}

export default {
  components: { RouterLink },
  setup() {
    const route = useRoute()
    const { t, locale } = useI18n()

    const breadcrumbs = computed(() => {
      if (route.name === 'home') return []

      const items = []

      items.push({
        label: t('nav.microsite'),
        href: `https://clihc2026.laihc.org/${locale.value}`,
      })

      items.push({
        label: t('nav.site_home'),
        to: Tr.i18nRoute({ name: 'home' }),
      })

      const page = PAGE_MAP[route.name] || {}
      if (page.parent && page.parent.routeName && page.parent.routeName !== route.name) {
        items.push({
          label: t(page.parent.key),
          to: Tr.i18nRoute({ name: page.parent.routeName }),
        })
      }

      const currentKey = page.currentKey || route.meta.pageTitleKey
      items.push({
        label: currentKey ? t(currentKey) : '',
        current: true,
      })

      return items.filter((item) => item.label)
    })

    return { breadcrumbs }
  },
}
</script>

<template>
  <div v-if="breadcrumbs.length" class="container">
    <nav aria-label="breadcrumb" class="pt-3">
      <ol class="breadcrumb text-sm mb-0">
        <li
          v-for="(item, index) in breadcrumbs"
          :key="index"
          class="breadcrumb-item"
          :class="{ active: item.current }"
        >
          <template v-if="!item.current">
            <RouterLink v-if="item.to" :to="item.to" class="text-secondary opacity-8">
              {{ item.label }}
            </RouterLink>
            <a v-else :href="item.href" class="text-secondary opacity-8">
              {{ item.label }}
            </a>
          </template>
          <span v-else class="text-dark opacity-9" aria-current="page">{{ item.label }}</span>
        </li>
      </ol>
    </nav>
  </div>
</template>
