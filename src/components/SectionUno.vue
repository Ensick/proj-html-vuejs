<template>
    <section class="cont-60">
        <div class="description">
            <h2>Get Behind The Wheel</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur officia itaque est ullam! Cum, ab incidunt? Accusamus excepturi explicabo quisquam possimus, sapiente, dolorem, quo est vero recusandae ea cum repellendus?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro amet velit cum dolor similique? Vitae aliquam voluptates veritatis velit amet eum, excepturi, saepe porro rerum deserunt perferendis obcaecati tempora expedita!
            Illum inventore obcaecati, quo architecto autem sit odit ex labore quam nostrum dolorum earum voluptas pariatur. Possimus corrupti a delectus dignissimos voluptatem magni, amet quasi ullam nihil perspiciatis? Assumenda</p>
        </div>

        <div class="sign-in">
            <h3>First Lesson Free!</h3>
            <p>When you make a block booking with us your first lesson is included free.</p>
            <div class="cont-input">
                <input type="text" placeholder="Your Name*">
                <input type="text" placeholder="Email*">
                <input type="text" placeholder="Telephone">
                <input type="text" placeholder="Location">
            </div>
            <span class="btn-green">REQUEST A CALLBACK</span>
        </div>
    </section>
</template>

<script>
    export default {
        name:'SectionUno'
    }
</script>

<style lang="scss" scoped>

section{

    display: flex;
    .description{

        flex-basis: 60%;
        padding: 60px 80px 60px 0;
        font-size: 1.2rem;

        h2{
            font-size: 2.5rem;
            padding-bottom: 40px;
        }

        p{

            line-height: 30px;
        }
    }

    .description p:last-child{

        font-size: 1rem;
        padding-top: 30px;
        line-height: 25px;
    }

    .sign-in{

        background-color: white;
        border-radius: 15px;
        box-shadow: 0 25px 35px lightgrey;
        text-align: center;
        flex-basis: 40%;
        padding: 60px 30px;
        font-size: 1.2rem;
        position: relative;
        top: -80px;

        h3{

            font-size: 1.8rem;
            padding-bottom: 25px;
            color: #7ABC64;
        }

        p{

            font-size: 1rem;
            padding-bottom: 30px;
        }

        .cont-input{

            margin-bottom: 30px;
            input{

                width: 100%;
                height: 50px;
                padding-left: 20px;
                margin-bottom: 20px;
                font-size: 1rem;
                background-color: #F7F7F7;
                border: none;
            }
        }
    }
}

</style>