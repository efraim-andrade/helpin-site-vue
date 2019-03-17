<template>
    <section class="banner">
        <header>
            <img class="logo" src="../assets/logo.png" alt="Helpin" title="Helpin" />
        </header>

        <div class="content">
            <div class="left">
                <h2 class="title">{{ info.title }}</h2>

                <p class="text">{{ info.description }}</p>
            </div>

            <div class="right">
                <img src="../assets/mockup.svg" class="mockup" />

                <div class="links">
                    <div class="link"></div>
                    <div class="link"></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            info: ''
        }
    },
    async created() {
        const { data } = await axios.get('http://localhost:1337/infos')

        this.info = data[0];
    }
}
</script>

<style lang="scss">
.banner {
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 100vh;
    padding: 0 100px;

    @media screen and (max-width: 1024px) { padding: 0 20px; }

    > header {
        margin-top: 40px;

        > .logo {
            width: 200px;

            @media screen and (max-width: 1024px) { width: 150px; }
        }
    }

    > .content {
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin-top: 80px;
        z-index: 1;

        @media screen and (max-width: 1024px) {
            flex-direction: column;
            margin-top: 20px;
        }

        > .left {
            width: 60%;

            @media screen and (max-width: 1024px) {
                margin-bottom: 20px;

                width: 92%;
            }

            > .title {
                margin-bottom: 20px;

                font-size: 48px;
                line-height: 1.5;
                color: #FFF;

                @media screen and (max-width: 1024px) { 
                    max-width: 90%;

                    font-size: 36px;
                    line-height: 1.2
                }
            }
            
            > .text {
                max-width: 80%;

                font-size: 18px;
                line-height: 1.5;
                color: rgba(#FFF, .75);

                @media screen and (max-width: 1024px) { 
                    max-width: 100%;
                    
                    font-size: 14px;
                }
            }
        }

        > .right {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 40%;
            
            @media screen and (max-width: 1024px) { 
                align-self: flex-start;
                width: 89%;
            }
            
            > .mockup {
                z-index: 1;

                height: 58vh;
            }
            
            > .links {
                display: grid;
                grid-template-columns: 1fr 1fr;
                grid-gap: 20px;
                margin-top: 20px;
                
                > .link {
                    width: 180px;
                    height: 60px;
                    border-radius: 6px;
                    box-shadow: 0 0 16px rgba(#000, .25);
                    
                    background: palegoldenrod;
                    
                    @media screen and (max-width: 1024px) { 
                        height: 30px;
                        width: 130px;
                    }
                    
                    @media screen and (max-width: 320px) { 
                        height: 30px;
                        width: 112px;
                    }
                }
            }
        }
    }
}
</style>
