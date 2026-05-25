<script>
import TheHeader from '@/components/Header.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';

import Tr from '@/i18n/translation'

import { shallowRef, watch, defineAsyncComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default {
  components: {
    TheHeader,
    Breadcrumbs
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
          return defineAsyncComponent(() => import('@/components/locales/en/Speakers.vue'))
        case 'es':
          return defineAsyncComponent(() => import('@/components/locales/es/Speakers.vue'))
        case 'pt':
          return defineAsyncComponent(() => import('@/components/locales/pt/Speakers.vue'))
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
      {{ $t("nav.keynotes") }}
    </template>
  </TheHeader>
  <Breadcrumbs />

  <section>
    <div class="container">
      <div class="row">
        <div class="row justify-content-center my-3">
          <div class="col-lg-10">

            <div class="alert alert-gradient-keynote d-flex align-items-center shadow-sm rounded-4 mb-4 p-4 border-0">
              <span class="me-3 flex-shrink-0" aria-hidden="true">
                <i class="fa-solid fa-microphone-lines fa-2x text-white" aria-hidden="true"></i>
              </span>
              <div>
                <h2 class="text-white fs-5 mb-0 fw-bold">{{ $t("nav.keynotes") }}</h2>
                <span class="text-white-50" style="font-size: 0.95rem;">
                  {{ $t("nav.keynotes_message") }}
                </span>
              </div>
            </div>

            <div class="d-flex flex-wrap gap-2 mb-4" role="navigation" aria-label="Keynote Speakers Navigation">
              <RouterLink :to="Tr.i18nRoute({ name: 'keynote-speakers', hash: '#jp-hourcade'})" class="text-decoration-none" aria-label="Go to Dr. Juan Pablo Hourcade">
                <span class="badge bg-gradient-primary fs-6 px-3 py-2 rounded-pill shadow-sm">
                  <i class="fa-solid fa-user me-1" aria-hidden="true"></i> Dr. Juan Pablo Hourcade
                </span>
              </RouterLink>
              <RouterLink :to="Tr.i18nRoute({ name: 'keynote-speakers', hash: '#odile-juarez'})" class="text-decoration-none" aria-label="Go to Odile Juárez">
                <span class="badge bg-gradient-primary fs-6 px-3 py-2 rounded-pill shadow-sm">
                  <i class="fa-solid fa-user me-1" aria-hidden="true"></i> Odile Juárez
                </span>
              </RouterLink>
            </div>

            <template v-if="contentComponent">
              <component :is="contentComponent" />
            </template>

          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<style scoped>
.alert-gradient-keynote {
  background: linear-gradient(135deg, #5C8455 0%, #3d6b38 100%);
}
</style>
