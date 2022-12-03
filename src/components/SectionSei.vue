<template>
    <section>
        <div class="cont-60">

            <div>
                <div class="cont-latest-news">

                <h2>Latest News</h2>

                <div class="cont-cards">
                    <div>
                        <img src="../assets/img/blog-choosecar-320x202.jpg" alt="img">
                        <h3>What Car Start With?</h3>
                        <span>February 7th 2019 | 0 Comments</span>
                        <p>Lorem ipsum dolor sit amet, consecutur adipiscing</p>
                    </div>

                    <div>
                        <img src="../assets/img/blogpost-10and2-320x202.jpg" alt="img">
                        <h3>Avada Driving School Expanding</h3>
                        <span>February 7th 2019 | 0 Comments</span>
                        <p>Lorem ipsum dolor sit amet, consecutur adipiscing</p>
                    </div>
                </div>

                <span class="btn-green">MORE FROM THE BLOG</span>
                
                </div>
                <img class="special" src="../assets/img/latestnews-bottom.png" alt="alt">
            </div>

        </div>
    </section>
</template>

<script>
    export default {
        name:'SectionSei'
    }
</script>

<style lang="scss" scoped>

    section{

        background-image: url('../assets/img/latestnews-background.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        height: 850px;
        display: flex;
        justify-content: center;
        align-items: center;

        .cont-60{

            display: flex;
            align-items: center;
            justify-content: center;
        }

        .cont-latest-news{

            background-color: white;
            border-top-left-radius: 15px;
            border-top-right-radius: 15px;
            border-top: 5px solid #7799AD;
            flex-basis: 100%;
            text-align: center;
            padding: 80px 0 60px 0;
            position: relative;
            top: -30px;

            h2{

                font-size: 2.4rem;
                padding-bottom: 60px;
                color: #494C4E;
            }

            .cont-cards{

                display: flex;
                justify-content: center;
                align-items: center;

                div{

                    flex-basis: 45%;
                    padding-bottom: 60px;

                    img{

                        width: 480px;
                        padding-bottom: 20px;
                    }

                    h3{

                        font-size: 1.4rem;
                        color: #7ABC64;
                    }

                    span{

                        font-size: 0.8rem;
                        color: #929AA3;
                    }

                    p{

                        font-size: 1.1rem;
                        padding-top: 20px;
                        color: #929AA3;
                    }
                }
            }
        }

         .special{

            width: 100%;
            display: block;
            position: relative;
            top: -31px;
        }
    }

</style>