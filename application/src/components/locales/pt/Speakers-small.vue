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

            Referência em interação humano-computador e infância, com atuação voltada a tecnologias que apoiam a criatividade, o bem-estar e o acesso à informação.
            <RouterLink :to="Tr.i18nRoute({ name: 'keynote-speakers', hash: '#jp-hourcade' })" class="uline d-inline-block mt-2">Ver biografia completa</RouterLink>
        </SpeakerItem>

        <SpeakerItem>
            <template #image>
                <img src="/assets/img/people/odile.png" alt="Odile Juárez" class="img-fluid shadow rounded-3">
            </template>
            <template #image-shadow>
                <div class="colored-shadow" style="background-image: url('/assets/img/people/odile.png');"></div>
            </template>
            <template #name>
                Ma. Odile Juárez
            </template>

            Empreendedora mexicana e cofundadora da Mayordomm, promove uma visão mais humana da inteligência artificial aplicada à organização familiar e à privacidade de dados.
            <RouterLink :to="Tr.i18nRoute({ name: 'keynote-speakers', hash: '#odile-juarez' })" class="uline d-inline-block mt-2">Ver biografia completa</RouterLink>
        </SpeakerItem>
    </div>
</template>
