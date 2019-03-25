<template>
    <nav class="side-bar">
        <ul class="menu">
            <li class="item"><a href="#about">Sobre</a></li>
            <li class="item"><a href="#team">Equipe</a></li>
            <li class="item"><a href="#contact">Contato</a></li>
        </ul>

        <div class="social">
            <a href="javascript:;" class="link -instagram">
                <img src="../assets/instagram.svg" alt="Instagram" title="Instagram">
            </a>

            <a href="javascript:;" class="link -facebook">
                <img src="../assets/facebook.svg" alt="Facebook" title="Facebook">
            </a>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss">
$primary: #648dff;
$secondary: #a574f1;

$lighBlue: #94ece3;

$danger: #f27878;
$white_50: rgba(#FFF, .5);

.side-bar {
    position: fixed;
    bottom: 100px;
    left: 10px;
    z-index: 10;

    @media screen and (max-width: 1024px) { display: none; }

    > .menu {
        > .item {
            transform: rotate(.75turn);

            padding: 0 0 90px 0;
            margin-bottom: 20px;
            list-style: none;

            > a {
                position: relative;

                text-shadow: 0 0 10px rgba(#000, .5);

                cursor: pointer;
                font-size: 18px;
                transition: .3s;
                text-decoration: none;
                color: rgba(#FFF, .85);
                letter-spacing: 0.25rem;

                &:before {
                    position: absolute;
                    left: 0;
                    bottom: -6px;

                    display: block;
                    width: 0;
                    height: 1px;

                    background: #FFF;
                    transition: .3s;
                    content: "";
                }
                
                &:hover {
                    color: rgba(#FFF, .85);
                    transition: .3s;

                    &:before {
                        width: 100%;
    
                        transition: .3s;
                    }
                }
            }
        }
    }

    > .social {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 60%;
        height: 90px;

        > .link {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            height: 40px;
            border-radius: 100%;
            box-shadow: 0 0 16px rgba(#000, .25);

            &.-instagram { background: linear-gradient($secondary, $danger); }

            &.-facebook { background: #3B5999; }

            > img { height: 30px; }
        }
    }
}
</style>
