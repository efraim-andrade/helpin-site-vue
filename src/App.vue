<template>
  <div id="app">
    <SideBar />

    <TopBar />

    <Banner />

    <Team />

    <Contact />
  </div>
</template>

<script>
  import SideBar from './components/SideBar.vue'
  import TopBar from './components/TopBar.vue'
  import Banner from './components/Banner.vue'
  import Team from './components/Team.vue'
  import Contact from './components/Contact.vue'

  export default {
    name: 'app',
    components: {
      SideBar,
      TopBar,
      Banner,
      Team,
      Contact
    }
  }
</script>

<style lang="scss">
  //Fonts
  $default: "Josefin Sans", sans-serif;

  //Colors
  $dark: #454545;
  $darker: #333;
  $white: #FFF;
  $white_50: rgba(#FFF, .5);

  $primary: #648dff;
  $secondary: #a574f1;

  $lighBlue: #94ece3;

  $danger: #f27878;

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    position: relative;
    
    overflow: hidden;
    color: $white;
    font-family: $default;
    background: linear-gradient($primary, $lighBlue);

    /*&:before,
    &:after {
        position: absolute;
        z-index: 0;

        width: 100%;
        height: 1px;
        
        background-color: #515151;
        content: '';
    }
  
    &:before {
        top: 0;
        left: 65%;
        
        width: 1px;
        height: 100%;
        
        @media screen and (max-width: 1370px) { left: 83%; }
    }
    
    &:after {
        top: 10.3%;
        left: 0;
        
        @media screen and (max-width: 1370px) { top: 11%; }

        @media screen and (max-width: 1024px) { top: 120px; }
    }*/
  }
</style>
