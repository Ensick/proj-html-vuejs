<template>
    <header>
        <nav>

            <div class="bg-darkgray">
                <div class="head-call">
                    <div>
                        <span>We have a 95% Successful Pass Rate!</span>
                    </div>

                    <div>
                        <font-awesome-icon icon="fa-solid fa-phone-flip" />
                        <span>Give us a call to book your tuition! 1-800-555-555</span>
                    </div>
                </div>
            </div>

            <div class="bg-rgba-darkgray">
                <div class="head-nav-menu">

                    <div>
                        <img src="../assets/img/avada-drivers-logo-1x.png" alt="logo">
                    </div>

                    <div class="menu">
                        <ul>
                            <li>HOME</li>
                            <li>ABOUT</li>
                            <li>PRICES</li>
                            <li>COURSES</li>
                            <li>LOCATIONS</li>
                            <li>BLOG</li>
                        </ul>
                        
                        <span class="btn-green">BOOK NOW</span>
                    </div>

                </div>
            </div>
            
        </nav>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComp'
    }
</script>

<style lang="scss" scoped>

    header{

        position: fixed;
        z-index: 5;
        top: 0;
        left: 0;
        right: 0;

        nav{

            .bg-darkgray{

                background-color: #353637;

                .head-call{

                    width: 75%;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    color: #717472;
                    padding: 15px 0;
                }   
                
                .fa-phone-flip{

                    padding-inline-end: 10px;
                }
            }

            .bg-rgba-darkgray{

                background-color: #25262675;

                .head-nav-menu{

                    width: 75%;
                    margin: 0 auto;
                    padding: 30px 0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    color: white;

                    .menu{

                        display: flex;
                        align-items: center;
                        gap: 0 15px;
                        ul{

                            display: flex;
                            gap: 0 15px
                        }
                    }
                }
            }
        }
    }

</style>