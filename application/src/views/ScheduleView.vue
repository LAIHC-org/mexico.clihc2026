<script>
import TheHeader from '@/components/Header.vue';
import Breadcrumbs from '@/components/Breadcrumbs.vue';
import ScheduleContent from '@/components/ScheduleContent.vue';

import Tr from '@/i18n/translation'

export default {
    components: {
        TheHeader,
        Breadcrumbs,
        ScheduleContent,
    },
    setup() {
        return { Tr }
    }
}
</script>

<template>
    <TheHeader>
        <template #page-name>
            {{ $t("nav.schedule") }}
        </template>
    </TheHeader>
    <Breadcrumbs />

    <section>
        <div class="container">
            <div class="row justify-content-center my-3">
                <div class="col-lg-10">
                    <ScheduleContent />
                </div>
            </div>
        </div>
    </section>
</template>
