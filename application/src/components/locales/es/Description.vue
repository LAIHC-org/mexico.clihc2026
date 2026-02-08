<script>
import Tr from '@/i18n/translation'

export default {
  setup() {
    return { Tr }
  }
}
</script>

<template>
  <h3 class="text-white mb-0">Hackathon CLIHC 2026 – Sede México</h3>
  <p class="text-white mt-3 mb-3">
    <strong>Innovación en HCI con las manos.</strong>
    Un espacio colaborativo para prototipar, experimentar y crear soluciones interactivas en tiempo real.
  </p>
  <RouterLink :to="Tr.i18nRoute({ name: 'call-for-hackathon' })" class="btn btn-lg bg-gradient-yellow btn-round">
    {{ $t("nav.calls_hackathon") }}
  </RouterLink>
</template>
