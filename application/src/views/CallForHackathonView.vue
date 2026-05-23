<script>
import TheHeader from '@/components/Header.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';

import Tr from '@/i18n/translation'

import { shallowRef, watch, defineAsyncComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  components: {
    TheHeader,
    Breadcrumbs,
  },
  setup() {
    const { locale } = useI18n()
    const contentComponent = shallowRef(null)

    const loadComponents = async (newLocale) => {
      contentComponent.value = await getContentForLocale(newLocale)
    }

    watch(locale, loadComponents, { immediate: true })

    async function getContentForLocale(locale) {
      switch (locale) {
        case 'en':
          return defineAsyncComponent(() => import('@/components/locales/en/Hackathon-call.vue'))
        case 'es':
          return defineAsyncComponent(() => import('@/components/locales/es/Hackathon-call.vue'))
        case 'pt':
          return defineAsyncComponent(() => import('@/components/locales/pt/Hackathon-call.vue'))
        default:
          return null
      }
    }

    return {
      contentComponent,
      Tr
    }
  }
}
</script>

<template>
  <TheHeader>
    <template #page-name>
      {{ $t("nav.calls_hackathon") }}
    </template>
  </TheHeader>
  <Breadcrumbs />

  <section>
    <div class="container">
      <div class="row">
        <div class="row justify-content-center mt-5">
          <div class="col-lg-8">

            <template v-if="contentComponent">
              <component :is="contentComponent" />
            </template>

          </div>
        </div>
      </div>
    </div>
  </section>
</template>
