<template>
  <div id="app">

    <HeaderComp :arrayHeader="arrayHeader"/>
    <HeroComp/>
    <MainComp :arrayCourses ="arrayCourses" :arrayRate="arrayRate"/>
    <FooterComp/>

  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue'
import HeroComp from './components/HeroComp.vue'
import MainComp from './components/MainComp.vue'
import FooterComp from './components/FooterComp.vue'

export default {
  name: 'App',
  components: {

    HeaderComp,
    HeroComp,
    MainComp,
    FooterComp,
  },

  data(){
    return{

      arrayHeader:[
        {
          name: 'HOME'
        },
        {
          name: 'ABOUT'
        },
        {
          name: 'PRICES'
        },
        {
          name: 'COURSES'
        },
        {
          name: 'LOCATIONS'
        },
        {
          name: 'BLOG'
        },
      ],

      arrayCourses:[
        {
          src:'courses-passplus.jpg',
          name: 'Pass Plus'
        },
        {
          src:'course-intensive.jpg',
          name: 'Intensive Course'
        },
        {
          src:'courses-instructor.jpg',
          name: 'Instructors'
        },
      ],

      arrayRate:[
        {
          rate:'95%',
          category:'PASS RATE'
        },
        {
          rate:'100%',
          category:'REFFERRAL RATE'
        },
        {
          rate:'0%',
          category:'ACCIDENT RATE'
        },
      ]
    }
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
