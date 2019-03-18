<template>
    <Toolbar class="top-bar" :pose="isVisible ? 'visible' : 'hidden'">
        <div class="header">
            <a class="left">
                <img class="logo" src="../assets/logo-simples.png" alt="helpin" title="helpin" >
            </a>

            <div class="right">
                <div 
                    :class="['menu-burguer', isOpen ? '-active' : '']" @click="toggleMenu"
                >
                    <span class="line"></span>
                    <span class="line"></span>
                    <span class="line"></span>
                </div>
            </div>
        </div>

        <Content class="content" :pose="isOpen ? 'opened' : 'closed'">
            <ul class="menu">
                <li class="item">
                    <a href="#about" class="anchor">
                        Sobre
                    </a>
                </li>
                <li class="item">Contato</li>
            </ul>

            <div class="socials">
                <a href="javascript:;" class="link">
                    <img src="../assets/facebook.svg" alt="" class="icon">
                </a>

                <a href="javascript:;" class="link">
                    <img src="../assets/instagram.svg" alt="" class="icon">
                </a>
            </div>
        </Content>

    </Toolbar>
</template>

<script>
import posed from 'vue-pose'

export default {
    data: () => ({
        isVisible: false,
        isOpen: false
    }),
    components: {
        Toolbar: posed.nav({
            visible: {
                top: 0,
                opacity: 1,
                transition: {
                    duration: 500,
                    ease: [0.010, 0.820, 0.520, 0.995]
                }
            },
            hidden: {
                top: -50,
                opacity: 0,
                transition: {
                    duration: 300,
                    ease: [0.720, 0.325, 0.000, 1.000]
                }
            }
        }),
        Content: posed.div({
            opened: {
                opacity: 1,
            },
            closed: {
                opacity: 0,
            }
        })
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen

            const body = document.querySelector('body');

            body.style.overflow = this.isOpen ? 'hidden' : 'auto'
        },
        showElement() {
            (window.scrollY >= 78 && window.innerWidth <= 1024)
                ? this.isVisible = true
                : this.isVisible = false
        }
    },
    mounted() {
        document.addEventListener('scroll', this.showElement);
    }
}
</script>

<style lang="scss">
$darker: #333;
$white_50: rgba(#FFF, .5);
$primary: #648dff;
$secondary: #a574f1;

    .top-bar {
        display: none;

        @media screen and (max-width: 1024px) {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 10;

            display: block;
            width: calc(100vw - 20px);
            height: 6.5vh;
            padding: 6px 10px;

            background: $darker;

            .header {
                z-index: 2;

                display: grid;
                grid-template-columns: 1fr 40px;
                align-items: center;

                .left {
                    flex: .2;

                    .logo {
                        height: 40px;
                    }
                }

                .right {
                    flex: 1;

                    .menu-burguer {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        width: 36px;
                        height: 25px;


                        .line {
                            display: block;
                            width: 100%;
                            height: 2px;
                            border-radius: 100px;

                            transition: .5s;
                            background: $white_50;
                        }

                        &.-active {
                            .line {
                                &:first-child {
                                    transform-origin: left;
                                    transform: rotate(-45deg) translate(-12px, 15px);
                                }

                                &:nth-child(2) {
                                    transform-origin: right;
                                    transform: rotate(45deg) translate(2px, 14px);
                                }

                                &:nth-child(3) {
                                    opacity: 0;
                                }
                            }
                        }
                    }
                }
            }

            .content {
                position: absolute;
                left: 0;
                z-index: 1;

                display: flex;
                align-items: center;
                flex-direction: column;
                justify-content: space-around;
                width: 100vw;
                height: calc(100vh - 50px);
                padding: 0px 0;

                opacity: 0;
                background: rgba(#111, .95);

                .menu {
                    flex: .2;
                    padding: 0;
                    width: 90%;

                    .item {
                        border-bottom: 1px solid rgba(#FFF, .1)
;
                        list-style: none;
                        line-height: 2.5;
                        font-size: 2.4rem;
                        text-align: center;

                        &:first-child {
                            border-top: 1px solid rgba(#FFF, .1)
                        }
                    }
                }

                .socials {
                    flex: .2;
                    display: flex;
                    align-items: flex-end;
                    justify-content: space-between;
                    width: 40%;

                    .link {
                        .icon { height: 50px; }
                    }
                }
            }
        }
    }
</style>
