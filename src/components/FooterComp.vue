<template>
    <footer>
        <div class="cont-60">

            <div class="cont-footer-top">

                <div class="info">
                    <img src="../assets/img/avada-drivers-logo-1x.png" alt="logo">
                    <p>Avada Driving School is the right choice for experienced drivers looking for a refresher course, or the brand new driver wanting to pass first time</p>
                </div>

                <div class="contacts">
                    <h3>CONTACT DETAILS</h3>

                    <div v-for="(elem,index) in arrayFooterContacts" :key="index">
                        <font-awesome-icon :icon="`${elem.type} ${elem.icon}`"/>
                        <span>{{elem.contact}}</span>
                    </div>
                </div>

                <div class="courses">
                    <h3>COURSES</h3>

                    <div v-for="(elem,index) in arrayFooterCourses" :key="index">
                        <font-awesome-icon :icon="`${elem.type} ${elem.icon}`"/>
                        <span>{{elem.course}}</span>
                    </div>
                </div>

                <div class="cont-grid">
                    <img src="../assets/img/footer-ad-grid.png" alt="img">
                    <span class="btn-green">BOOK NOW</span>
                </div>

            </div>
        </div>

         <div class="copyright">
            <div class="cont-60">
                <div>
                    <font-awesome-icon icon="fa-regular fa-copyright"/>
                    <span>Copyright 2012 - 2022 | Avada Theme by <span class="green">ThemeFusion</span>| All Rights Reserved | Powered by <span class="green">Federico Censi</span></span>
                </div>  
                <div class="cont-icons-footer">
                    <font-awesome-icon icon="fa-brands fa-facebook-f"/>
                    <font-awesome-icon icon="fa-brands fa-twitter"/>
                    <font-awesome-icon icon="fa-brands fa-youtube" />
                    <font-awesome-icon icon="fa-brands fa-instagram" />
                 </div>
            </div>
            
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'FooterComp',

        props:{

            arrayFooterContacts: Array,
            arrayFooterCourses: Array,
        }
    }
</script>

<style lang="scss" scoped>

    footer{

        background-image: url('../assets/img/footer-background-color.jpg');
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;

        .cont-footer-top{

            display: flex;
            justify-content: space-between;
            padding: 60px 0;

            div{

                flex-basis: 23%;
                
            }

            .info{

                img{

                    padding-bottom: 10px;
                    cursor: pointer;
                }

                p{
                    color: #A9ADB4;
                    line-height: 20px;
                    padding-right: 10px;
                }
            }

            .contacts{

                color: #A9ADB4;

                h3{
                    color: white;
                    padding-bottom: 25px;
                }

                div{

                    padding-bottom: 25px;
                    display: flex;

                    span{

                        padding-left: 10px;
                        cursor: pointer;

                        &:hover{

                            color: white;
                        }
                    }
                }
            }

            .courses{

                h3{
                    color: white;
                    padding-bottom: 25px;
                }

                div{

                    color: #7ABC64;
                    padding-bottom: 20px;

                    span{

                        padding-left: 10px;
                        cursor: pointer;

                        &:hover{

                            color: #8cd774;
                            text-shadow: 2px 2px 2px black;
                        }
                    }
                }
            }

            .cont-grid{

                text-align: center;
            }

            .cont-grid > img{

                width: 100%;
                display: block;
                margin-bottom: 35px;
                cursor: pointer;
            }
        }

        .copyright{

            background-color: #1C1D1E;
            padding: 60px 0;
            color: #717472;

            .cont-60{

                display: flex;
                align-items: center;
                justify-content: space-between;

                .cont-icons-footer >*{

                    color: white;
                    padding-inline-start: 10px;
                    cursor: pointer;
                }
            }

           
        }

        .green{

            color: #7ABC64;
        }
    }

</style>