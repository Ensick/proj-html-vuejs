<template>
  <div id="app">

    <HeaderComp/>
    <HeroComp/>
    <MainComp/>

  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import HeroComp from './components/HeroComp.vue'
import MainComp from './components/MainComp.vue'

export default {
  name: 'App',
  components: {

    HeaderComp,
    HeroComp,
    MainComp,
  }
}
</script>

<style lang="scss">

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

}

.cont-60{

  width: 60%;
  margin: 0 auto;
}

.btn-green{

  padding: 10px 20px;
  background-color: #7ABC64;
  color: white;
  border-style: none;
  border-radius: 20px;
  cursor: pointer;
}


</style>
