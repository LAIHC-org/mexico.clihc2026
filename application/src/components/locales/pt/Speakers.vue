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
        <p class="mb-3"><strong>Keynote I.</strong> <em>"Fatores humanos, computação e crianças"</em></p>
        <p>
            Os fatores humanos têm desempenhado um papel fundamental nas principais mudanças ao
            longo da história da computação, tornando os processos mais eficientes, ampliando o
            conjunto de usuários capazes de utilizar computadores e expandindo as aplicações da
            computação. Essas transformações fizeram com que a computação se tornasse onipresente em
            nossas vidas, afetando inclusive crianças pequenas, embora nem sempre de maneira
            positiva. Nesta palestra, Hourcade apresenta uma visão para as tecnologias voltadas à
            infância que contrasta com as abordagens predominantes na indústria, e expõe o exemplo
            de uma tecnologia que avança na direção que ele propõe. Conclui abordando uma série de
            diretrizes fundamentais para o design de tecnologias destinadas às crianças.
        </p>
        <p>
            É professor no Departamento de Ciência da Computação da Universidade de Iowa e Diretor
            de Estudos de Pós-Graduação do Programa Interdisciplinar de Pós-Graduação em
            Informática. Sua principal área de pesquisa é a Interação Humano-Computador, com ênfase
            no design, na implementação e na avaliação de tecnologias que apoiam a criatividade, a
            colaboração, o bem-estar, o desenvolvimento saudável e o acesso à informação para uma
            ampla diversidade de usuários, incluindo crianças e pessoas idosas.
        </p>
        <p>
            É autor de <em>Child-Computer Interaction</em>, o primeiro livro abrangente sobre essa
            temática, atualmente em sua segunda edição, e tem desempenhado diversos papéis de
            liderança em sua comunidade acadêmica ao longo das últimas duas décadas. Entre eles,
            destacam-se sua atuação como <em>Papers Co-Chair</em> nas conferências CHI 2016 e 2017,
            <em>Co-Chair</em> da conferência IDC 2013, <em>Papers Co-Chair</em> na IDC 2003 e 2004,
            e <em>Program Co-Chair</em> da CLIHC 2021. Além disso, integra o conselho editorial de
            <em>Interacting with Computers</em> e do
            <em>International Journal of Child-Computer Interaction</em>.
        </p>
        <p>
            Suas palestras abordam temas como ética e processos cognitivos em tecnologias
            interativas, o impacto dos fatores humanos na computação e a importância da
            alfabetização digital e do acesso tecnológico na infância.
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
        <template #name> Ma. Odile Juárez </template>

        <p class="mb-1"><strong>Mamá Tech</strong></p>
        <p class="mb-3"><strong>Keynote II.</strong> <em>Título e resumo em breve</em></p>
        <p>
            Odile Juárez é uma empreendedora mexicana que promove uma visão mais humana e acessível
            da tecnologia na vida cotidiana. É CEO e cofundadora da Mayordomm, uma inteligência
            artificial comunitária desenvolvida para ajudar as famílias a se organizarem de forma
            mais inteligente e colaborativa. Por meio da Inteligência Artificial, a Mayordomm
            organiza e antecipa mais de 200 tarefas domésticas que uma mulher latino-americana
            realiza mensalmente, reduzindo a carga mental e devolvendo tempo valioso.
        </p>
        <p>
            Sua proposta vai além de um aplicativo: busca consolidar a produtividade familiar como
            uma nova categoria, permitindo que as famílias dediquem seu tempo a conviver, crescer e
            desfrutar, em vez de investir mais de 40 horas em tarefas que podem ser automatizadas.
            Além disso, Odile é palestrante em ética aplicada à inteligência artificial, host do
            podcast <em>Una Tacita de Tech</em> e divulgadora ativa nas redes sociais. Promove o uso
            responsável da tecnologia, com ênfase na privacidade de dados.
        </p>
        <p>
            Com mais de uma década de experiência em inovação, startups e desenvolvimento de
            produtos, além de mestrado em Marketing Digital, defende uma tecnologia construída com e
            para as pessoas.
        </p>
    </SpeakerLargeItem>
</template>
