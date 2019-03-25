<template>
    <Section class="banner" :pose="isVisible ? 'visible' : 'hidden'">
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
    </Section>
</template>

<script>
import axios from 'axios'
import posed from 'vue-pose'

import db from '../services/firebase.js'

export default {
    data: () => ({
        info: '',
        isVisible: false
    }),
    components: {
        Section: posed.section({
            visible: {
                opacity: 1,
                transition: {
                    duration: 1000,
                    ease: 'easeIn'    
                }
            },
            hidden: { opacity: 0 }
        })
    },
    async created() {
        const data = await db.collection('infos').doc('SRCU7wISQFDN2uupDAFM').get()

        this.info = data.data();
    },
    mounted() {
        this.isVisible = !this.isVisible
    }
}
</script>

<style lang="scss">
.banner {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 0 100px;
    min-height: 100vh;
    margin-bottom: 110px;
    background: {
        image: url('../assets/background.svg');
        size: contain;
        repeat: no-repeat;
        position:  0 -1px;
    }

    @media screen and (max-width: 1024px) {
        padding: 0 20px;

        background-size: cover;
    }

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
            width: 67%;

            @media screen and (max-width: 1024px) {
                margin-bottom: 20px;

                width: 100%;
            }

            > .title {
                margin-bottom: 20px;

                font-size: 3rem;
                line-height: 1.5;
                color: #FFF;

                @media screen and (max-width: 1500px) {
                    max-width: 90%;

                    font-size: 2.4rem;
                }

                @media screen and (max-width: 1024px) { 
                    max-width: 90%;

                    font-size: 2.1rem;
                    line-height: 1.2
                }
            }
            
            > .text {
                max-width: 80%;

                font-size: 1.4rem;
                line-height: 1.5;
                color: rgba(#FFF, .75);

                @media screen and (max-width: 1500px) {
                    max-width: 90%;

                    font-size: 1.2rem;
                }

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
            width: 33%;
            
            @media screen and (max-width: 1024px) { 
                align-self: flex-start;
                width: 100%;
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
