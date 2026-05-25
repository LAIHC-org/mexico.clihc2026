<script>
import SpeakerItem from '../../SpeakerItem.vue'
import Tr from '@/i18n/translation'

export default {
    components: {
        SpeakerItem
    },
    setup() {
        return {
            Tr
        }
    }
}
</script>

<template>
    <div class="row">
        <SpeakerItem>
            <template #image>
                <img src="/assets/img/people/jpOurcade.jpg" alt="Juan Pablo Hourcade" class="img-fluid shadow rounded-3">
            </template>
            <template #image-shadow>
                <div class="colored-shadow" style="background-image: url('/assets/img/people/jpOurcade.jpg');"></div>
            </template>
            <template #name>
                Dr. Juan Pablo Hourcade
            </template>

            Referente en interacción humano-computadora e infancia, con trabajo centrado en tecnologías que apoyan la creatividad, el bienestar y el acceso a la información.
            <RouterLink :to="Tr.i18nRoute({ name: 'keynote-speakers', hash: '#jp-hourcade' })" class="uline d-inline-block mt-2">Ver biografía completa</RouterLink>
        </SpeakerItem>

        <SpeakerItem>
            <template #image>
                <img src="/assets/img/people/odile.png" alt="Odile Juárez" class="img-fluid shadow rounded-3">
            </template>
            <template #image-shadow>
                <div class="colored-shadow" style="background-image: url('/assets/img/people/odile.png');"></div>
            </template>
            <template #name>
                Mtra. Odile Juárez
            </template>

            Emprendedora mexicana y cofundadora de Mayordomm, impulsa una visión más humana de la inteligencia artificial aplicada a la organización familiar y la privacidad de datos.
            <RouterLink :to="Tr.i18nRoute({ name: 'keynote-speakers', hash: '#odile-juarez' })" class="uline d-inline-block mt-2">Ver biografía completa</RouterLink>
        </SpeakerItem>
    </div>
</template>
