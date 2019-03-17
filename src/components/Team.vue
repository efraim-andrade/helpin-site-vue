<template>
        <section class="team" id="team">
        <h1 class="title">Equipe</h1>

        <div class="content">
            <article 
                class="member" 
                v-for="member in members" 
                :key="member.id"
            >
                <img class="photo" :src="'http://localhost:1337' + member.avatar.url" alt="" />

                <div class="content">
                    <h1 class="name">{{ member.name }}</h1>

                    <p class="role">{{ member.role }}</p>

                    <p class="description">{{ member.history }}</p>
                </div>
            </article>
        </div>
    </section>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            members: []
        }   
    },
    async created() {
        const { data } = await axios.get('http://localhost:1337/members') 

        this.members = data
    }
}
</script>

<style lang="scss">
    $darker: #333;
    $white_50: rgba(#FFF, .5);
    $nunito: "Nunito Sans", sans-serif;

    .team {       
    position: relative;

    min-height: 100vh;
    margin: 0 100px;
    padding: 0;

    background-color: $darker;

    @media screen and (max-width: 1024px){
        padding: 0 20px;
        margin: 50px 60px 0 20px; 
    };

    &:before,
    &:after {
        position: absolute;
        left: -2px;
        
        display: block;
        width: 100%;
        height: 100px;
        border: 1px solid transparent;

        background: $darker;
        content: "";

        @media screen and (max-width: 1024px) { height: 30px; }
    }

    &:before {
        top: -102px;

        clip-path: polygon(0 100%, 100% 0, 100% 100%);

        @media screen and (max-width: 1024px) { top: -32px; }
    }

    &:after {
        bottom: -102px;

        clip-path: polygon(0 0, 100% 0, 100% 100%);

        @media screen and (max-width: 1024px) { bottom: -32px; }
    }
      
    > .title {
        position: relative;
        z-index: 2;
        
        margin-bottom: 40px;

        text-align: center;
        color: $white_50;
        font-size: 2.5rem;
        font-family: $nunito;

        @media screen and (max-width: 1024px){
            padding-top: 8px;

            font-size: 1.5rem;
        };
        
        &:before {
            position: absolute;
            top: 20px;
            left: 0;
            z-index: -2;

            width: 100%;
            height: 1px;
            
            content: '';
            background-color: #515151;
        }

        &:after {
            position: absolute;
            top: 0;
            left: 50%;
            transform: translateX(-50%);
            z-index: -1;

            display: block;
            width: 180px;
            height: 50px;

            background: $darker;
            content: "";

            @media screen and (max-width: 1024px){ width: 110px; };
        }
    }

    > .content {
        padding: 40px 90px;
        
        @media screen and (max-width: 1024px){
            padding: 0 10px;

            text-align: center;
        };

        .member {
            display: flex;
            align-items: center;
            margin-bottom: 40px;

            @media screen and (max-width: 1024px){
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

                    @media screen and (max-width: 1024px){ text-align: center; };
                }
            }

            .photo {
                min-width: 340px;
                height: 340px;
                border-radius: 100%;

                margin-right: 16px;
                border-radius: 55px;
                object-fit: cover;
                box-shadow: 0 0 10px #111;

                @media screen and (max-width: 1024px){
                    min-width: 160px;
                    width: 160px;
                    height: 160px;
                    border-radius: 100%;

                    margin: 0;
                    margin-bottom: 16px;
                };
            }

            .content {
                color: $white_50;
                font-family: 'Nunito', 'sans-serif';

                .name {
                    margin-bottom: 5px;
                    font-size: 28px;

                    @media screen and (max-width: 1024px){ font-size: 18px; };
                }

                .role {
                    margin-bottom: 20px;

                    opacity: .8;
                    font-size: 14px;

                    @media screen and (max-width: 1024px){ font-size: 10px; };
                }

                .description {
                    font-size: 16px;
                    line-height: 24px;

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
