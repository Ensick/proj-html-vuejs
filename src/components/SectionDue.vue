<template>
    <section>

        <div class="start-learning cont-60">
            <div class="drive-today">
                <h2>Start Learning to Drive Today</h2>
                <span>Give us call to schedule your first driving lesson</span>
            </div>

            <div class="phone-number">
                <font-awesome-icon icon="fa-solid fa-phone-flip" />
                <span> 1-800-555-555</span>
            </div>
        </div>
       
    </section>
</template>

<script>
    export default {
        name:'SectionDue'
    }
</script>

<style lang="scss" scoped>

    section{

        background-image: url('../assets/img/horizontal-cta-background.jpg');
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;

       .start-learning {

            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 60px 0;
            font-size: 1.2rem;
            color: white;

            .drive-today{

                h2{

                    font-size: 2rem;
                    padding-bottom: 10px;
                }
            }

            .phone-number{

                font-size: 1.7rem;
                padding-right: 40px;
                
                .fa-phone-flip{

                    padding-right: 20px;
                }
            }
        }
    }

</style>