<script setup>
import SpeakerLargeItem from '@/components/SpeakerLargeItem.vue'
</script>

<template>
    <SpeakerLargeItem>
        <template #image>
            <img
                id="jp-hourcade"
                class="img border-radius-lg w-100 position-relative z-index-2"
                src="/assets/img/people/jpOurcade.jpg"
                alt="Juan Pablo Hourcade"
            />
        </template>
        <template #image-shadow>
            <div
                class="colored-shadow"
                style="background-image: url('/assets/img/people/jpOurcade.jpg')"
            ></div>
        </template>
        <template #name> Dr. Juan Pablo Hourcade </template>

        <p class="mb-1"><strong>University of Iowa</strong></p>
        <p class="mb-3"><strong>Keynote I.</strong> <em>"Factores humanos, informática y niños"</em></p>
        <p>
            Los factores humanos han desempeñado un papel fundamental en los cambios clave de la
            historia de la informática, haciendo que los procesos sean más eficientes, ampliando el
            espectro de usuarios capaces de utilizar las computadoras y expandiendo las aplicaciones
            de la computación. Estas transformaciones han propiciado que la informática se vuelva
            omnipresente en nuestras vidas, afectando incluso a los niños pequeños, aunque no siempre
            de manera positiva. En esta charla, Hourcade presenta una visión para las tecnologías
            dirigidas a la infancia que contrasta con los enfoques predominantes en la industria, y
            expone el ejemplo de una tecnología que avanza en la dirección que él propone. Concluye
            abordando una serie de pautas fundamentales para el diseño de tecnologías destinadas a los
            niños.
        </p>
        <p>
            Es profesor en el Departamento de Ciencias de la Computación de la Universidad de Iowa y
            Director de Estudios de Posgrado del Programa Interdisciplinario de Posgrado en
            Informática. Su principal área de investigación es la Interacción Humano-Computadora, con
            énfasis en el diseño, la implementación y la evaluación de tecnologías que apoyan la
            creatividad, la colaboración, el bienestar, el desarrollo saludable y el acceso a la
            información para una amplia diversidad de usuarios, incluidos niños y personas adultas
            mayores.
        </p>
        <p>
            Es autor de <em>Child-Computer Interaction</em>, el primer libro integral sobre esta
            temática, actualmente en su segunda edición, y ha desempeñado diversos roles de liderazgo
            en su comunidad académica durante las últimas dos décadas. Entre estos destacan su
            participación como <em>Papers Co-Chair</em> en las conferencias CHI 2016 y 2017,
            <em>Co-Chair</em> de la conferencia IDC 2013, <em>Papers Co-Chair</em> en IDC 2003 y
            2004, y <em>Program Co-Chair</em> de CLIHC 2021. Asimismo, forma parte del comité
            editorial de <em>Interacting with Computers</em> y del
            <em>International Journal of Child-Computer Interaction</em>.
        </p>
        <p>
            Sus conferencias abordan temas como la ética y los procesos cognitivos en tecnologías
            interactivas, el impacto de los factores humanos en la computación y la importancia de la
            alfabetización digital y el acceso tecnológico en la niñez.
        </p>
    </SpeakerLargeItem>

    <SpeakerLargeItem>
        <template #image>
            <img
                id="odile-juarez"
                class="img border-radius-lg w-100 position-relative z-index-2"
                src="/assets/img/people/odile.png"
                alt="Odile Juárez"
            />
        </template>
        <template #image-shadow>
            <div
                class="colored-shadow"
                style="background-image: url('/assets/img/people/odile.png')"
            ></div>
        </template>
        <template #name> Mtra. Odile Juárez </template>

        <p class="mb-1"><strong>Mamá Tech</strong></p>
        <p class="mb-3"><strong>Keynote II.</strong> <em>Título y resumen por anunciar</em></p>
        <p>
            Odile Juárez es una emprendedora mexicana que impulsa una visión más humana y accesible
            de la tecnología en la vida cotidiana. Es CEO y cofundadora de Mayordomm, una
            inteligencia artificial comunitaria diseñada para ayudar a las familias a organizarse de
            forma más inteligente y colaborativa. A través de Inteligencia Artificial, Mayordomm
            organiza y anticipa más de 200 tareas domésticas que una mujer latinoamericana realiza
            mensualmente, reduciendo la carga mental y devolviendo tiempo valioso.
        </p>
        <p>
            Su propuesta va más allá de una aplicación: busca consolidar la productividad familiar
            como una nueva categoría, permitiendo que las familias dediquen su tiempo a convivir,
            crecer y disfrutar, en lugar de invertir más de 40 horas en tareas automatizables.
            Además, Odile es conferencista en ética aplicada a la inteligencia artificial, host del
            podcast <em>Una Tacita de Tech</em> y divulgadora activa en redes sociales. Promueve el
            uso responsable de la tecnología, con énfasis en la privacidad de datos.
        </p>
        <p>
            Con más de una década de experiencia en innovación, startups y desarrollo de productos, y
            una maestría en Marketing Digital, defiende una tecnología construida con y para las
            personas.
        </p>
    </SpeakerLargeItem>
</template>
