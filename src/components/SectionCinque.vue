<template>
    <section>
        <div class="testimonials cont-60">
            <div class="slider-testimonials">
                <h2>Testimonials</h2>
                <span>Here's what our happy drivers had to say about our services</span>
                <img src="../assets/img/testimonial-sophia.png" alt="img">
                <p>Avada Driving School really helped build my confidence behind the wheel and with driving in general, and they got me a first time pass! Hingly reccomended</p>
                <h3>Sophia Jones</h3>
                <div class="cont-icons">
                    <font-awesome-icon icon="fa-solid fa-circle" />
                    <font-awesome-icon icon="fa-solid fa-circle" />
                    <font-awesome-icon icon="fa-solid fa-circle" />
                    <font-awesome-icon icon="fa-solid fa-circle" />
                    <font-awesome-icon icon="fa-solid fa-circle" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name:'SectionCinque'
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
                    padding-bottom: 15px;
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
                }
            }
        }
    }

</style>