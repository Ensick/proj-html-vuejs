<template>
    <section>
        <img class="special" src="../assets/img/latestnews-bottom-modificata.jpg" alt="img">

        <div class="cont-60">

            <div class="rate">

                <div class="card-rate">
                    <div>
                        <span>95%</span>
                    </div>
                    
                    <h3>PASS RATE</h3>
                </div>

                <div class="card-rate">
                    <div>
                         <span>100%</span>
                    </div>
                   
                    <h3>REFFERRAL RATE</h3>
                </div>

                <div class="card-rate">
                    <div>
                         <span>0%</span>
                    </div>  
                    <h3>ACCIDENT RATE</h3>
                </div>

            </div>

            <div class="text">

                <div class="left-text">
                    <h2>Your Instructors</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad aspernatur eaque suscipit aliquam non blanditiis corrupti velit neque, facilis</p>
                </div>

                <div class="about-us">
                    <span class="btn-green">MORE ABOUT US</span>
                </div>

            </div>

            <div class="instructors">
                <div class="card-instructors">
                    <img src="../assets/img/instructor-mikehart.jpg" alt="img">
                    <h3>Mike Hart</h3>
                    <div class="cont-icon">
                        <font-awesome-icon icon="fa-brands fa-facebook-f" />
                        <font-awesome-icon icon="fa-brands fa-twitter" />
                        <font-awesome-icon icon="fa-brands fa-instagram" />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div class="card-instructors special-card">
                    <img src="../assets/img/instructor-johnsmith.jpg" alt="img">
                    <h3>John Smith</h3>
                    <div class="cont-icon">
                        <font-awesome-icon icon="fa-brands fa-facebook-f" />
                        <font-awesome-icon icon="fa-brands fa-twitter" />
                        <font-awesome-icon icon="fa-brands fa-instagram" />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>

                <div class="card-instructors">
                    <img src="../assets/img/instructor-angelahart.jpg" alt="img">
                    <h3>Angela Hart</h3>
                    <div class="cont-icon">
                        <font-awesome-icon icon="fa-brands fa-facebook-f" />
                        <font-awesome-icon icon="fa-brands fa-twitter" />
                        <font-awesome-icon icon="fa-brands fa-instagram" />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name:'SectionQuattro'
    }
</script>

<style lang="scss" scoped>

    section{

        height: 1250px;

        .special{

            position: relative;
            top: -2px;
            display: block;
            width: 100%;
            background-position: center;
            background-repeat: no-repeat;
        }

        .cont-60{

            position: relative;
            top: -110px;
        }

        .rate{

            display: flex;
            justify-content: space-between;
            align-items: center;

            .card-rate{

                flex-basis: 32%;
                text-align: center;
                color: #929AA3;
                background-color: white;
                border-radius: 15px;
                border-top: 5px solid #7ABC64;;
                box-shadow: 0 25px 35px #bbbec1;
                padding: 60px 50px;
                position: relative;
                top: -40px;

                div{

                    display: flex;
                    justify-content: center;
                    align-items: center;
                    width: 250px;
                    height: 250px;
                    margin: 0 auto;
                    border: 10px solid #7ABC64;
                    border-radius: 50%;

                    span{

                        font-size: 4rem;
                    }
                }

                h3{

                    padding-top: 40px;
                    font-size: 1.2rem;
                }
            }
        }

        .text{

            display: flex;
            align-items: center;
            padding: 70px 0;

            .left-text{

                flex-basis: 70%;

                h2{
                    font-size: 2rem;
                    padding-bottom: 35px;
                }

                p{
                    font-size: 1.5rem;
                    line-height: 40px;
                    color: #929AA3;
                }
            }

            .about-us{

                flex-basis: 30%;

                span{
                    display: block;
                    text-align: center;
                }
            }
        }

        .instructors{

            display: flex;
            justify-content: space-between;
            align-items: center;

            .card-instructors{

                flex-basis: 32%;
                text-align: center;
                color: #929AA3;
                background-color: white;
                border-radius: 15px;
                border-top: 5px solid #7ABC64;;
                box-shadow: 0 25px 35px #bbbec1;
                padding: 60px 0;
                position: relative;
                top: 40px;

                img{
                    width: 300px;
                    height: 200px;
                }

                h3{

                    font-size: 1.6rem;
                    padding: 20px 0 15px 0;
                }

                .cont-icon > *{

                    padding-right: 15px;
                    padding-bottom: 15px;
                }

                p{
                
                    padding: 0 60px;
                }   
            }
        }
    }
 
</style>