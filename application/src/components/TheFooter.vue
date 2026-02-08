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
                <div class="col-sm-6 col-md-3 mb-4">
                    <div>
                        <h3 class="text-gradient text-secondary text-sm">{{ $t("nav.calls") }}</h3>
                        <ul class="flex-column ms-n3 nav">
                            <li class="nav-item">
                                <a
                                    class="nav-link uline"
                                    :href="`https://clihc2026.laihc.org/${Tr.currentLocale}/call-for-participation`"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {{ $t("nav.calls_general") }}
                                </a>
                            </li>
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-short-papers' })" class="nav-link uline">
                                    {{ $t("nav.calls_short_papers") }}
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'call-for-hackathon' })" class="nav-link uline">
                                    {{ $t("nav.calls_hackathon") }}
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-sm-6 col-md-3 mb-4">
                    <div>
                        <h3 class="text-gradient text-secondary text-sm">{{ $t("nav.for_participants") }}</h3>
                        <ul class="flex-column ms-n3 nav">
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'getting-started' })" class="nav-link uline">
                                    {{ $t("nav.getting_started") }}
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'registration' })" class="nav-link uline">
                                    {{ $t("nav.rates_and_registration") }}
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-sm-6 col-md-3 mb-4">
                    <div>
                        <h3 class="text-gradient text-secondary text-sm">{{ $t("nav.program") }}</h3>
                        <ul class="flex-column ms-n3 nav">
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'schedule' })" class="nav-link uline">
                                    {{ $t("nav.schedule") }}
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'keynote-speakers' })" class="nav-link uline">
                                    {{ $t("nav.keynotes") }}
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'industry-government-day' })" class="nav-link uline">
                                    {{ $t("nav.industry_government_day") }}
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'hackathon' })" class="nav-link uline">
                                    {{ $t("nav.hackathon") }}
                                </RouterLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-sm-6 col-md-3 mb-4">
                    <div>
                        <h3 class="text-gradient text-secondary text-sm">{{ $t("nav.organizers") }}</h3>
                        <ul class="flex-column ms-n3 nav">
                            <li class="nav-item">
                                <a
                                    class="nav-link uline"
                                    :href="`https://clihc2026.laihc.org/${Tr.currentLocale}/organizers`"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {{ $t("nav.organizers_general") }}
                                </a>
                            </li>
                            <li class="nav-item">
                                <RouterLink :to="Tr.i18nRoute({ name: 'organizers' })" class="nav-link uline">
                                    {{ $t("nav.organizers_local") }}
                                </RouterLink>
                            </li>
                            <li class="nav-item">
                                <a
                                    class="nav-link uline"
                                    :href="`https://clihc2026.laihc.org/${Tr.currentLocale}`"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {{ $t("nav.central_site") }}
                                </a>
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
                            <a class="uline" href="CHANGELOG.md">v2026.1.0.0.m</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>
