<script setup>
    import TheHeader from '@/components/Header.vue';
</script>

<template>
    <TheHeader>
        <template #page-name>
            {{ $t("organizers.title") }}
        </template>
    </TheHeader>

    <section>
        <div class="container">
            <div class="row">
                <div class="row justify-content-center my-3">
                    <div class="col-lg-8">
                        <p>
                            {{ $t("organizers.intro") }}
                        </p>
                        <h2 class="text-primary text-gradient text-center py-4">
                            {{ $t("organizers.local_committee_title") }}
                        </h2>
                        <div class="alert alert-light text-center">
                            {{ $t("organizers.pending_note") }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
