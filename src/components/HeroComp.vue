<template>
    <div class="hero-cont">

        <div class="cont-60">
            <h1>Drive with Avada</h1>
            <span>We offer finest driving tution money can buy</span>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'HeroComp'
    }
</script>

<style lang="scss" scoped>

.hero-cont{

    background-image: url('../assets/img/homepage-hero-background.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 700px;
    color: white;
    display: flex;
    align-items: center;

    .cont-60{

        padding-top: 130px;
        
        h1{

            font-size: 3rem;
            padding-bottom: 20px;
        }

        span{

            font-size: 1.6rem;
            color: rgb(228, 226, 226);
        }
    }
}

</style>