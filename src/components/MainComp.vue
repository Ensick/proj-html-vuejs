<template>
    <main>
        <SectionUno/>
        <SectionDue/>
        <SectionTre/>
    </main>
</template>

<script>
import SectionUno from './SectionUno.vue'
import SectionDue from './SectionDue.vue'
import SectionTre from './SectionTre.vue'

    export default {
        name:'MainComp',

        components: {

            SectionUno,
            SectionDue,
            SectionTre,
        }
    }
</script>

<style lang="scss" scoped>

</style>