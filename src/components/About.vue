<template>
        <section class="about" id="about">
        <h1 class="title">Oque tem tanto no nosso app ?</h1>

        <div class="content">
            <Topic 
                class="topic" 
                v-for="topic in topics" 
                :key="topic.id"
                :item="topic.id"
                :pose="isVisible ? 'visible' : 'hidden'"
            >
                <img class="photo" :src="'http://localhost:1337' + topic.mockup.url" alt="" />

                <div class="content">
                    <h1 class="name">{{ topic.title }}</h1>

                    <p class="description">{{ topic.description }}</p>
                </div>
            </Topic>
        </div>
    </section>
</template>

<script>
import api from '@/services/api'
import posed from 'vue-pose'

export default {
    data() {
        return {
            topics: [],
            isVisible: false,
        }
    },
    components: {
        Topic: posed.article({
            visible: {
                opacity: 1,
                delay: ({ item }) => item * 150
            },
            hidden: { opacity: 0 } 
        })
    },
    async created() {
        await this.fetchAbouts()
    },
    mounted() {
        document.addEventListener('scroll', this.fadeItems)
    },
    methods: {
        async fetchAbouts() {
            const abouts = await api.get('/abouts')

            this.topics = abouts
        },
        fadeItems() {
            window.scrollY >= 250 ? this.isVisible = true : this.isVisible = false;
        }
    }
}
</script>

<style lang="scss">
    $primary: #648dff;
    $darker: #333;
    $lighBlue: #94ece3;
    $white_50: rgba(#FFF, .5);

    $secondary: #a574f1;

    $danger: #f27878;

    $default: "Raleway", sans-serif;

.about {       
    position: relative;
    z-index: 1;

    min-height: 100vh;
    margin: 0 0 100px;
    padding: 0;

    @media screen and (max-width: 1024px){
        padding: 0 20px;
        margin: 0 0 20px 0; 
    };

    &:before {
        position: absolute;
        left: -240px;
        top: -110px;
        z-index: -1;
        
        content: url('../assets/orange-ball.svg');

        @media screen and (max-width: 1500px) {
            left: -510px;
        }
    }
      
    > .title {
        position: relative;
        z-index: 2;
        
        margin-bottom: 40px;
        margin-right: 300px;

        text-align: center;
        color: #FFF;
        font-size: 2.5rem;

        @media screen and (max-width: 1024px){
            padding-top: 40px;
            margin-right: 0;

            font-size: 2rem;
        };
    }

    > .content {
        padding: 40px 300px 0 100px;

        @media screen and (max-width: 1500px) { padding: 40px 90px; }

        @media screen and (max-width: 1024px){
            padding: 0 10px 20px;padding: 0 10px 20px;

            text-align: center;
        };

        .topic {
            display: flex;
            align-items: center;
            margin-bottom: 40px;

            @media screen and (max-width: 1024px){
                align-items: center;
                flex-direction: column;
            };

            &:first-child { margin-top: 60px; }

            &:nth-child(2n) {
                flex-direction: row-reverse;

                @media screen and (max-width: 1024px){ flex-direction: column; };

                .photo {
                    margin-right: 0;
                    margin-left: 16px;

                    @media screen and (max-width: 1024px){
                        margin: 0;
                        margin-bottom: 16px;
                        flex-direction: row; 
                    };
                }

                .content {
                    text-align: right;
                    margin-right: -130px;
                    padding-right: 130px;

                    background: linear-gradient(to left, rgba($danger, .3), rgba($secondary, 0));

                    @media screen and (max-width: 1024px){ text-align: center; };
                }
            }

            .photo {
                z-index: 1;

                width: 260px;
                height: 370px;
                min-width: 260px;

                margin-right: 16px;
                border-radius: 16px;
                object-fit: cover;
                box-shadow: 0 12px 20px rgba(#D8818A, .95);

                @media screen and (max-width: 1024px){
                    min-width: 160px;
                    width: 160px;
                    height: 160px;

                    margin: 0;
                    margin-bottom: 16px;
                };
            }

            .content {
                margin-left: -130px;
                padding-left: 130px;

                color: #FFF;
                background: linear-gradient(to right, rgba($danger, .3), rgba($secondary, 0));

                @media screen and (max-width: 1024px) { padding: 0 0 20px 130px; }

                .name {
                    margin-top: 10px;
                    margin-bottom: 5px;
                    
                    font-size: 28px;
                    font-family: $default;

                    @media screen and (max-width: 1024px){ font-size: 18px; };
                }

                .role {
                    margin-bottom: 20px;

                    opacity: .8;
                    font-size: 14px;
                    font-family: $default;

                    @media screen and (max-width: 1024px){ font-size: 10px; };
                }

                .description {
                    max-width: 700px;

                    font-size: 1rem;
                    font-family: $default;
                    line-height: 24px;

                    @media screen and (max-width: 1500px) { font-size: .9rem; }

                    @media screen and (max-width: 1024px){
                        max-width: 76%;
                        margin: 0 auto;

                        font-size: 12px;
                        line-height: 18px;
                    };

                    @media screen and (max-width: 720px) {
                        max-width: 100%; 
                    }
                }
            }
        }
    }
}
</style>
