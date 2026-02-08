<script>
import Tr from "@/i18n/translation";
import SponsorItem from "@/components/SponsorItem.vue";

export default {
    components: {
        SponsorItem,
    },
    setup() {
        return { Tr };
    },
};
</script>
<template>
    <section>
        <div class="container mt-5" id="specialThanks">
            <div class="row">
                <div class="col-lg-3">
                    <div class="position-sticky pb-lg-5 pb-3 ps-2" style="top: 100px">
                        <h3>{{ $t("home.sponsors") }}</h3>
                        <p class="text-secondary font-weight-normal pe-3">
                            {{ $t("home.sponsors_message") }}
                        </p>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="row">
                        <SponsorItem>
                            <template #image>
                                <img
                                    src="/assets/img/sponsors/occe.png"
                                    alt="Oficina de Convenciones, Congresos y Eventos de Oaxaca"
                                    class="img-fluid shadow rounded-3"
                                />
                            </template>
                            <template #image-shadow>
                                <div
                                    class="colored-shadow"
                                    style="
                                        background-image: url('/assets/img/sponsors/occe.png');
                                    "
                                ></div>
                            </template>
                            <template #name>
                                <a class="uline" href="https://www.oaxaca.gob.mx/occe/"
                                    >Oficina de Convenciones, Congresos y Eventos de
                                    Oaxaca</a
                                >
                            </template>
                        </SponsorItem>

                        <SponsorItem>
                            <template #image>
                                <img
                                    src="/assets/img/sponsors/educacion.png"
                                    alt="Secretaría de Educación Pública del Estado de Oaxaca"
                                    class="img-fluid shadow rounded-3"
                                />
                            </template>
                            <template #image-shadow>
                                <div
                                    class="colored-shadow"
                                    style="
                                        background-image: url('/assets/img/sponsors/educacion.png');
                                    "
                                ></div>
                            </template>
                            <template #name>
                                <a class="uline" href="https://www.oaxaca.gob.mx/sep/"
                                    >Secretaría de Educación Pública del Estado de
                                    Oaxaca</a
                                >
                            </template>
                        </SponsorItem>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
