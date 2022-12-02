<template>
  <div id="app">

    <HeaderComp/>

  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'

export default {
  name: 'App',
  components: {

    HeaderComp,
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

.btn-green{

  padding: 10px 20px;
  background-color: #7ABC64;
  border-style: none;
  border-radius: 15px;
}
</style>
