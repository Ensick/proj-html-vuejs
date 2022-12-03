<template>
    <section>
        <div class="courses cont-60">

            <div class="course-info">
                <img class="corner" src="../assets/img/new-corner.jpg" alt="img">
                <h2>Courses</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, cupiditate aut consectetur eos debitis architecto</p>
                <span class="btn-green">CURSE INFORMATION</span>
            </div>

            <div class="learn-more">
                <div>
                    <img src="../assets/img/courses-passplus.jpg" alt="img">
                    <h3>Pass Plus</h3>
                    <span class="btn-empty-blue">LEARN MORE</span>
                </div>

                <div>
                    <img src="../assets/img/course-intensive.jpg" alt="img">
                    <h3>Intensive Course</h3>
                    <span class="btn-empty-blue">LEARN MORE</span>
                </div>

                <div>
                    <img src="../assets/img/courses-instructor.jpg" alt="img">
                    <h3>Instructors</h3>
                    <span class="btn-empty-blue">LEARN MORE</span>
                </div>
            </div>

        </div>
    </section>
</template>

<script>
    export default {
        name: 'SectionTre'
    }
</script>

<style lang="scss" scoped>

    section{

        background-image: url('../assets/img/promise-background.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: bottom;
        height: 550px;

        .courses{

            display: flex;
            align-content: center;

            .course-info{
                
                flex-basis: 35%;
                padding: 60px 30px;
                text-align: center;
                background-color: white;
                border-radius: 15px;
                box-shadow: 0 25px 35px #BBBEC1;
                position: relative;
                top: -20px;

                .corner{

                    width: 80px;
                    position: absolute;
                    top: 0;
                    left: 0;
                }

                h2{

                    font-size: 2rem;
                    padding-bottom: 30px;
                }

                p{

                    line-height: 30px;
                    margin-bottom: 50px;
                }
            }

            .learn-more{

                flex-basis: 65%;
                display: flex;
                justify-content: flex-end;
                text-align: center;
                color: #33475B;
                padding: 60px 0;
                gap: 40px;

                img{
                    width: 200px;
                    padding-bottom: 15px;
                }

                h3{

                    margin-bottom: 30px;
                }

                .btn-empty-blue{

                    padding: 10px 20px;
                    color: #33475B;
                    border: 3px solid #33475B;
                    border-radius: 20px;
                    cursor: pointer;
                }
            }
        }
    }

</style>