<template>
    <section>
        <div class="cont-60">
            <div class="newsletter">
                <h2>Sign up to our Newsletter</h2>
                <input type="text">
                <span class="btn-green">SUBSCRIBE</span>
                <p>We do not share your data with anybody, and only use it for its intended purpose</p>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'SectionSette'
    }
</script>

<style lang="scss" scoped>

section{

    background-image: url('../assets/img/newsletter_background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
    .cont-60{

        display: flex;
        justify-content: center;
        align-items: center;
        padding: 70px 0;
    }

        .newsletter{

            display: flex;
            flex-direction: column;
            text-align: center;

            h2{

                font-size: 2.2rem;
                padding-bottom: 50px;
            }

            input{

                height: 50px;
                border: 1px solid rgb(196, 193, 193);
                border-radius: 10px;
                margin-bottom: 35px;
            }

            .btn-green{

                margin-bottom: 35px;
            }

            p{

                color: #A9ADB4;
                padding: 0 30px;
            }
        }
}

</style>