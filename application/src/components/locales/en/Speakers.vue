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
        <p class="mb-3"><strong>Keynote I.</strong> <em>"Human Factors, Computing, and Children"</em></p>
        <p>
            Human factors have played a fundamental role in key changes throughout the history of
            computing, making processes more efficient, broadening the range of users capable of
            using computers, and expanding the applications of computing. These transformations have
            made computing ubiquitous in our lives, affecting even young children, although not
            always in positive ways. In this talk, Hourcade presents a vision for technologies aimed
            at children that contrasts with the dominant approaches in industry, and discusses an
            example of a technology that moves in the direction he proposes. He concludes by
            addressing a series of fundamental guidelines for the design of technologies intended for
            children.
        </p>
        <p>
            He is a Professor in the Department of Computer Science at the University of Iowa and
            Director of Graduate Studies for the Interdisciplinary Graduate Program in Informatics.
            His main area of research is Human-Computer Interaction, with an emphasis on the design,
            implementation, and evaluation of technologies that support creativity, collaboration,
            well-being, healthy development, and access to information for a wide diversity of users,
            including children and older adults.
        </p>
        <p>
            He is the author of <em>Child-Computer Interaction</em>, the first comprehensive book on
            this topic, now in its second edition, and has held several leadership roles in his
            academic community over the past two decades. These include serving as
            <em>Papers Co-Chair</em> for the CHI 2016 and 2017 conferences, <em>Co-Chair</em> of the
            IDC 2013 conference, <em>Papers Co-Chair</em> for IDC 2003 and 2004, and
            <em>Program Co-Chair</em> of CLIHC 2021. He also serves on the editorial boards of
            <em>Interacting with Computers</em> and the
            <em>International Journal of Child-Computer Interaction</em>.
        </p>
        <p>
            His talks address topics such as ethics and cognitive processes in interactive
            technologies, the impact of human factors in computing, and the importance of digital
            literacy and technological access in childhood.
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
        <template #name> M.Sc. Odile Juárez </template>

        <p class="mb-1"><strong>Mamá Tech</strong></p>
        <p class="mb-3"><strong>Keynote II.</strong> <em>Title and abstract to be announced</em></p>
        <p>
            Odile Juárez is a Mexican entrepreneur who promotes a more human and accessible vision
            of technology in everyday life. She is the CEO and co-founder of Mayordomm, a
            community-based artificial intelligence platform designed to help families organize
            themselves in a smarter and more collaborative way. Through Artificial Intelligence,
            Mayordomm organizes and anticipates more than 200 household tasks that a Latin American
            woman carries out each month, reducing mental load and giving back valuable time.
        </p>
        <p>
            Her proposal goes beyond an application: it seeks to establish family productivity as a
            new category, enabling families to spend their time connecting, growing, and enjoying
            life, rather than devoting more than 40 hours to tasks that can be automated. In
            addition, Odile is a speaker on ethics applied to artificial intelligence, host of the
            podcast <em>Una Tacita de Tech</em>, and an active science and technology communicator on
            social media. She promotes the responsible use of technology, with an emphasis on data
            privacy.
        </p>
        <p>
            With more than a decade of experience in innovation, startups, and product development,
            as well as a master's degree in Digital Marketing, she advocates for technology built
            with and for people.
        </p>
    </SpeakerLargeItem>
</template>
