<template>
        <section class="contact" id="contact">
        <h2 class="title">Contato</h2>

        <div class="content">
            <form>
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
            </form>

            <div class="divider"></div>

            <div class="socials">
                <a class="social" href="javascript:;">
                    <img class="icon" src="../assets/facebook-black.svg" alt="Facebook" title="Facebook">

                    <span>facebook/helpin</span>
                </a>
                
                <a class="social" href="javascript:;">
                    <img class="icon" src="../assets/instagram-black.svg" alt="Instagram" title="Instagram">

                    <span>instagram/helpin</span>
                </a>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
$dark: #454545;
$darker: #333;
$white_50: rgba(#FFF, .5);

.contact {
    position: relative;
    
    padding: 0 200px;
    margin-top: 200px;
    height: 600px;
    
    background-color: $darker;
    
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
            top: -32px;
            
            height: 30px;
        }
    }
    
    > .title {
        margin-bottom: 40px;
        
        color: $white_50;
        font: {
            weight: 300;
            size: 48px;
            family: "Nunito", sans-serif;
        };
    }
    
    .content {
        display: flex;
        align-items: center;
        justify-content: space-between;

        > form {
            flex: 1;

            > .group {
                display: flex;
                flex-direction: column;
                margin-bottom: 20px;
                
                > label {
                    margin-bottom: 5px;
                    
                    color: $white_50;
                    letter-spacing: 0;
                    font: {
                        family: "Nunito", sans-serif;
                        size: 16;
                        weight: 300;
                    };
                }
                
                > .input {
                    height: 40px;
                    padding: 0 12px;
                    border-radius: 6px;
                    border: 1px solid transparent;
                    
                    color: $white_50;
                    background-color: $dark;
                    font: {
                        size: 18px;
                        family: 'Nunito', sans-serif;
                    };
                    
                    &.-name { width: 300px; }
                    
                    &.-mail { width: 380px; }
                    
                    &.-text {
                        width: 500px;
                        height: 200px;
                        padding: 12px 12px;
                    }
                }
            }
        }

        > .divider {
            display: block;
            width: 1px;
            height: 350px;

            background: $white_50;
        }

        > .socials {
            flex: 1;
            display: grid;
            grid-template-columns: 1fr;
            grid-template-rows: 2;
            grid-gap: 20px;
            justify-items: center;

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
                        family: "Nunito", sans-serif;
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
