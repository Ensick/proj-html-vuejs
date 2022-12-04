<template>
    <section>
        <div class="testimonials cont-60">
            <div class="slider-testimonials">
                <h2>Testimonials</h2>
                <span>Here's what our happy drivers had to say about our services</span>
                <img :src="require(`../assets/img/${this.arrayTestimonials[indexCerchio].src}`)" alt="img">
                <p>{{this.arrayTestimonials[indexCerchio].text}}</p>
                <h3>{{this.arrayTestimonials[indexCerchio].name}}</h3>
                <div class="cont-icons">
                    <font-awesome-icon :class="{'active' : index == indexCerchio}" @click="cambioTestimonial(index)" icon="fa-solid fa-circle" v-for="(circle,index) in 5" :key="index"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name:'SectionCinque',

        props:{
            
            arrayTestimonials: Array,
        },

        data(){

            return{

                indexCerchio: 0,
            }
        },

        created(){

            setInterval(() => {
                
               this.indexCerchio ++

               if(this.indexCerchio >= 5){

                    this.indexCerchio = 0
               }

            }, 5000)
        },

        methods:{

            cambioTestimonial(index){

                this.indexCerchio = index  

                console.log(this.indexCerchio);
                
                return this.indexCerchio
            },
        },

      
    }
</script>

<style lang="scss" scoped>

    section{

        background-image: url('../assets/img/testimonial-background.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 800px;
        display: flex;
        justify-content: center;
        align-items: center;

        .testimonials{

            display: flex;
            justify-content: center;

            .slider-testimonials{

                display: flex;
                flex-basis: 60%;
                flex-direction: column;
                align-items: center;
                justify-content: center;

                h2{

                    font-size: 2.2rem;
                    padding-bottom: 25px;
                }

                span{

                    color: #929AA3;
                    padding-bottom: 50px;
                    font-size: 1.1rem;
                }

                img{

                    width: 150px;
                    padding-bottom: 30px;
                }

                p{

                    color: #929AA3;
                    font-size: 1.1rem;
                    text-align: center;
                    line-height: 30px;
                    padding: 0 60px 30px 60px;
                }


                h3{

                    color: #929AA3;
                    font-size: 1.2rem;
                    padding-bottom: 35px;
                }

                .cont-icons >*{

                    font-size: 0.7rem;
                    color: #929AA3;
                    padding-inline-start: 10px;

                    &.active{

                        color: #7ABC64;
                        scale: 1.2;
                    }
                }
            }
        }
    }

</style>