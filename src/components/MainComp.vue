<template>
    <main>
        <SectionUno/>
        <SectionDue/>
        <SectionTre/>
        <SectionQuattro/>
    </main>
</template>

<script>
import SectionUno from './SectionUno.vue'
import SectionDue from './SectionDue.vue'
import SectionTre from './SectionTre.vue'
import SectionQuattro from './SectionQuattro.vue'

    export default {
        name:'MainComp',

        components: {

            SectionUno,
            SectionDue,
            SectionTre,
            SectionQuattro,
        }
    }
</script>

<style lang="scss" scoped>

</style>