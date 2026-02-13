<script>
	import Tr from '@/i18n/translation'

	export default {
		setup() {
			return { Tr }
		}
	}
</script>

<template>
    <ol class="list-group list-group-numbered">
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
                <a
                    class="uline"
                    :href="`https://clihc2026.laihc.org/${Tr.currentLocale}/call-for-participation`"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {{ $t("nav.calls_general") }}
                </a>
            </div>
        </div>
        </li>
        <li class="list-group-item d-flex justify-content-between align-items-start">
        <div class="ms-2 me-auto">
            <div class="fw-bold">
                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-hackathon' })" class="uline">
                    {{ $t("nav.calls_hackathon") }}
                </RouterLink>
            </div>
            <strong class="text-primary text-gradient">Deadline for submission:</strong> Upcoming<br>
        </div>
        </li>
    </ol>    
</template>
