<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import TheHeader from '@/components/Header.vue'
import Breadcrumbs from '@/components/Breadcrumbs.vue'

export default {
  components: {
    TheHeader,
    Breadcrumbs
  },
  setup() {
    const route = useRoute()
    const pageTitleKey = computed(() => route.meta.pageTitleKey || 'soon.page_title')

    return {
      pageTitleKey
    }
  }
}
</script>

<template>
  <TheHeader>
    <template #page-name>
      {{ $t(pageTitleKey) }}
    </template>
  </TheHeader>
  <Breadcrumbs />

  <section>
    <div class="container">
      <div class="row justify-content-center mt-5">
        <div class="col-lg-8 text-center">
          <p class="lead mb-0">{{ $t("soon.page_body") }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
