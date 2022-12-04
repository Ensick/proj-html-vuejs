<template>
  <div id="app">

    <HeaderComp :arrayHeader="arrayHeader"/>
    <HeroComp/>
    <MainComp :arrayCourses ="arrayCourses" :arrayRate="arrayRate" :arrayInstructors="arrayInstructors"/>
    <FooterComp :arrayFooterContacts="arrayFooterContacts" :arrayFooterCourses="arrayFooterCourses"/>

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
      ],

      arrayInstructors:[
        {
          src:'james-may-laferrari.jpg',
          name: 'James May',
        },
        {
          src:'Jeremy-clarkson.jpg',
          name: 'Jeremy Clarkson',
        },
        {
          src:'Richard-Hammond.jpg',
          name: 'Richard Hammond',
        },
      ],

      arrayFooterContacts:[
        {
          icon:'fa-house',
          type:'fa-solid',
          contact:'12345 North Main Street,New York,NY 555555',
        },
        {
          icon:'fa-phone-flip',
          type:'fa-solid',
          contact:'1-800-555-6789',
        },
        {
          icon:'fa-envelope',
          type:'fa-regular',
          contact:'info@your-domain.com',
        },
        {
          icon:'fa-link',
          type:'fa-solid',
          contact:'Theme-Fusion.com',
        },
      ],

      arrayFooterCourses:[
        {
          icon:'fa-circle-arrow-right',
          type:'fa-solid',
          course:'Pass Plus',
        },
        {
          icon:'fa-circle-arrow-right',
          type:'fa-solid',
          course:'Intensive Course',
        },
        {
          icon:'fa-circle-arrow-right',
          type:'fa-solid',
          course:'Automatic',
        },
        {
          icon:'fa-circle-arrow-right',
          type:'fa-solid',
          course:'Instructor Training',
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
