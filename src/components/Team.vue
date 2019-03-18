<template>
        <section class="team" id="team">
        <h1 class="title">Equipe</h1>

        <div class="content">
            <Member 
                class="member" 
                v-for="member in members" 
                :key="member.id"
                :item="member.id"
                :pose="isVisible ? 'visible' : 'hidden'"
            >
                <img class="photo" :src="'http://localhost:1337' + member.avatar.url" alt="" />

                <div class="content">
                    <h1 class="name">{{ member.name }}</h1>

                    <p class="role">{{ member.role }}</p>

                    <p class="description">{{ member.history }}</p>
                </div>
            </Member>
        </div>
    </section>
</template>

<script>
import axios from 'axios'
import posed from 'vue-pose'

export default {
    data() {
        return {
            members: [],
            isVisible: false,
        }   
    },
    components: {
        Member: posed.article({
            visible: {
                opacity: 1,
                delay: ({ item }) => item * 300
            },
            hidden: { opacity: 0 } 
        })
    },
    methods: {
        fadeItems() {
            window.scrollY >= 250 ? this.isVisible = true : this.isVisible = false;
        }
    },
    mounted() {
        document.addEventListener('scroll', this.fadeItems)
    },
    async created() {
        const { data } = await axios.get('http://localhost:1337/members') 

        this.members = data
    }
}
</script>

<style lang="scss">
    $primary: #648dff;
    $darker: #333;
    $lighBlue: #94ece3;
    $white_50: rgba(#FFF, .5);

    $default: "Raleway", sans-serif;

.team {       
    position: relative;
    z-index: 1;

    min-height: 100vh;
    margin: 0;
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
        
        content: url('../assets/members-background.svg');

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
            padding: 0 10px 20px;

            text-align: center;
        };

        .member {
            display: flex;
            align-items: center;
            margin-bottom: 40px;

            @media screen and (max-width: 1024px){
                align-items: center;
                flex-direction: column;
            };

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

                    background: linear-gradient(to left, rgba($primary, .3), rgba($lighBlue, 0));

                    @media screen and (max-width: 1024px){ text-align: center; };
                }
            }

            .photo {
                z-index: 1;

                min-width: 260px;
                height: 260px;
                border-radius: 100%;

                margin-right: 16px;
                border-radius: 100%;
                object-fit: cover;
                box-shadow: 0 0 10px rgba($lighBlue, .75);

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
                background: linear-gradient(to right, rgba($primary, .3), rgba($lighBlue, 0));

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
                        font-size: 12px;
                        line-height: 18px;
                    };
                }
            }
        }
    }
}
</style>
