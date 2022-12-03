<template>
    <main>
        <SectionUno/>
        <SectionDue/>
        <SectionTre/>
        <SectionQuattro/>
        <SectionCinque/>
        <SectionSei/>
    </main>
</template>

<script>
import SectionUno from './SectionUno.vue'
import SectionDue from './SectionDue.vue'
import SectionTre from './SectionTre.vue'
import SectionQuattro from './SectionQuattro.vue'
import SectionCinque from './SectionCinque.vue'
import SectionSei from './SectionSei.vue'

    export default {
        name:'MainComp',

        components: {

            SectionUno,
            SectionDue,
            SectionTre,
            SectionQuattro,
            SectionCinque,
            SectionSei,
        }
    }
</script>

<style lang="scss" scoped>

</style>