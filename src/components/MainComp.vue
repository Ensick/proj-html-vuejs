<template>
    <main>
        <!-- Sezione-Sing-In -->
        <SectionUno/>
        <!-- Sezione-Start-Learning -->
        <SectionDue/>
        <!-- Sezione-Corsi -->
        <SectionTre :arrayCourses="arrayCourses"/>
        <!-- Sezione-Istruttori -->
        <SectionQuattro :arrayRate="arrayRate" :arrayInstructors="arrayInstructors"/>
        <!-- Sezione-Testimonianze -->
        <SectionCinque/>
        <!--  Sezione-News -->
        <SectionSei/>
        <!-- Sezione-Newsletter -->
        <SectionSette/>
    </main>
</template>

<script>
import SectionUno from './SectionUno.vue'
import SectionDue from './SectionDue.vue'
import SectionTre from './SectionTre.vue'
import SectionQuattro from './SectionQuattro.vue'
import SectionCinque from './SectionCinque.vue'
import SectionSei from './SectionSei.vue'
import SectionSette from './SectionSette.vue'

    export default {
        name:'MainComp',

        components: {

            SectionUno,
            SectionDue,
            SectionTre,
            SectionQuattro,
            SectionCinque,
            SectionSei,
            SectionSette,
        },

        props:{

            arrayCourses: Array,
            arrayRate: Array,
            arrayInstructors: Array,
        },
    }
</script>

<style lang="scss" scoped>

</style>