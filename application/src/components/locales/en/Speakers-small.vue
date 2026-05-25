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

            A leading scholar in human-computer interaction and childhood, focused on technologies that support creativity, well-being, and access to information.
            <RouterLink :to="Tr.i18nRoute({ name: 'keynote-speakers', hash: '#jp-hourcade' })" class="uline d-inline-block mt-2">Read full bio</RouterLink>
        </SpeakerItem>

        <SpeakerItem>
            <template #image>
                <img src="/assets/img/people/odile.png" alt="Odile Juárez" class="img-fluid shadow rounded-3">
            </template>
            <template #image-shadow>
                <div class="colored-shadow" style="background-image: url('/assets/img/people/odile.png');"></div>
            </template>
            <template #name>
                M.Sc. Odile Juárez
            </template>

            Mexican entrepreneur and co-founder of Mayordomm, advancing a more human vision of artificial intelligence for family organization and data privacy.
            <RouterLink :to="Tr.i18nRoute({ name: 'keynote-speakers', hash: '#odile-juarez' })" class="uline d-inline-block mt-2">Read full bio</RouterLink>
        </SpeakerItem>
    </div>
</template>
