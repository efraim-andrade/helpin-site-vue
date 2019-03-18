<template>
        <section class="contact" id="contact">
        <h2 class="title">Contato</h2>

        <div class="content">
            <Contact :pose="isVisible ? 'visible' : 'hidden'">
                <div class="group">
                    <label for="">Nome:</label>
                    <input class="input -name" type="text" />
                </div>

                <div class="group">
                    <label for="">E-mail:</label>
                    <input class="input -mail" type="email" />
                </div>

                <div class="group">
                    <label for="">Mensagem:</label>
                    <textarea class="input -text" rows="10" cols="5"></textarea>
                </div>
            </Contact>

            <Divider class="divider" :pose="isVisible ? 'visible' : 'hidden'" />

            <Socials class="socials" :pose="isVisible ? 'visible' : 'hidden'">
                <a class="social" href="javascript:;">
                    <img class="icon" src="../assets/facebook-black.svg" alt="Facebook" title="Facebook">

                    <span>facebook/helpin</span>
                </a>
                
                <a class="social" href="javascript:;">
                    <img class="icon" src="../assets/instagram-black.svg" alt="Instagram" title="Instagram">

                    <span>instagram/helpin</span>
                </a>
            </Socials>
        </div>
    </section>
</template>

<script>
import posed from 'vue-pose'

const posedProps = {
    visible: {
        opacity: 1,
        transition: { ease: [0.23, 1, 0.32, 1] }
    },
    hidden: {
        opacity: 0,
        transition: { duration: 2000 }
    }
}

export default {
    data: () => ({
        isVisible: false
    }),
    components: {
        Contact: posed.form({
            visible: {
                ...posedProps.visible,
                left: 0,
                transition: { duration: 1000 }
            },
            hidden: {
                ...posedProps.hidden,
                left: -1500
            }
        }),
        Socials: posed.div({
            visible: {
                ...posedProps.visible,
                right: 0,
                transition: { duration: 1000 }
            },
            hidden: { 
                ...posedProps.hidden,
                right: -1500
            }
        }),
        Divider: posed.div({
            ...posedProps,
            visible: {
                ...posedProps.visible,
                opacity: 1,
                transition: { 
                    duration: 2500,
                    ease: [0.23, 1, 0.32, 1]
                }
            },
        })
    },
    methods: {
        showElements() {
            window.scrollY >= 1500? this.isVisible = true : this.isVisible = false
        }
    },
    mounted() {
        document.addEventListener('scroll', this.showElements)
    }
}
</script>

<style lang="scss">
$dark: #454545;
$darker: #333;
$white_50: rgba(#FFF, .5);

$default: 'Raleway', sans-serif;

.contact {
    position: relative;
    z-index: 1;
    
    padding: 0 200px 50px;
    margin-top: 200px;
    
    background-color: $darker;

    @media screen and (max-width: 1500px) { padding: 0 100px 40px; }

    @media screen and (max-width: 1024px) {
        margin-top: 90px;
        padding: 0 20px 40px;
    }
    
    &:before {
        position: absolute;
        top: -102px;
        left: -2px;
        
        display: block;
        width: 100%;
        height: 100px;
        border: 1px solid transparent;
        
        background: $darker;
        content: "";
        
        clip-path: polygon(0 0, 0% 100%, 100% 100%);
        
        @media screen and (max-width: 1024px) {
            top: -31px;
            
            height: 30px;
        }
    }
    
    > .title {
        margin-bottom: 40px;
        
        color: $white_50;
        font: {
            weight: 300;
            size: 48px;
            family: $default;
        };
    }
    
    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;

        @media screen and (max-width: 720px) { flex-direction: column; }

        > form {
            position: relative;

            flex: 1;
            
            @media screen and (max-width: 1500px) { padding-right: 50px; }

            @media screen and (max-width: 720px) {
                width: 100%;
                padding: 0;
            }

            > .group {
                display: flex;
                flex-direction: column;
                margin-bottom: 20px;

                @media screen and (min-width: 720px) { width: 100%; }
                
                > label {
                    margin-bottom: 5px;
                    
                    color: $white_50;
                    letter-spacing: 0;
                    font: {
                        family: $default;
                        size: 16;
                        weight: 300;
                    };
                }
                
                > .input {
                    height: 40px;
                    padding: 0 12px;
                    border-radius: 6px;
                    border: 1px solid transparent;
                    
                    outline: none;
                    color: $white_50;
                    background-color: $dark;
                    font: {
                        size: 18px;
                        family: $default;
                    };
                    
                    &.-name { width: 300px; }
                    
                    &.-mail { width: 380px; }
                    
                    &.-text {
                        width: 500px;
                        height: 200px;
                        padding: 12px 12px;
                    }

                    @media screen and (max-width: 720px) {
                        &.-name,
                        &.-mail,
                        &.-text  { width: 92%; }
                    }
                }
            }
        }

        > .divider {
            position: relative;

            display: block;
            width: 1px;
            height: 350px;

            background: $white_50;

            @media screen and (max-width: 720px) { display: none; }
        }

        > .socials {
            position: relative;

            flex: 1;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 2;
            grid-gap: 20px;
            justify-items: center;
            margin-top: 20px;

            text-decoration: none;

            > .social {
                display: flex;
                justify-content: flex-start;
                align-items: center;
                width: 300px;

                text-decoration: none;

                &:hover {
                    > span {
                        &:before {
                            width: 100%;
                            
                            transition: .3s;
                        }
                    }
                }

                > .icon {
                    margin-right: 8px;
                    padding: 20px;
                    border-radius: 100%;

                    background: #FFF;
                }

                > span {
                    position: relative;
                    
                    letter-spacing: 0;
                    color: $white_50;
                    font: {
                        family: $default;
                        size: 28px;
                    };

                    &:before {
                        position: absolute;
                        left: 0;
                        bottom: 0;

                        display: block;
                        width: 0;
                        height: 1px;

                        background: $white_50;
                        transition: .3s;
                        content: "";
                    }
                }
            }
        }
    }
}
</style>
