<script>
import Tr from '@/i18n/translation'

export default {
  setup() {
    return { Tr }
  }
}
</script>

<template>
  <h3 class="text-white mb-0">CLIHC 2026 Hackathon – Mexico Venue</h3>
  <p class="text-white mt-3 mb-3">
    <strong>Hands-on HCI innovation.</strong>
    A collaborative space to prototype, experiment, and create interactive solutions in real time.
  </p>
  <RouterLink :to="Tr.i18nRoute({ name: 'call-for-hackathon' })" class="btn btn-lg bg-gradient-yellow btn-round">
    {{ $t("nav.calls_hackathon") }}
  </RouterLink>
</template>
