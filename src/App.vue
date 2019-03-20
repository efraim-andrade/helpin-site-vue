<template>
  <div id="app">
    <SideBar />

    <TopBar />

    <Banner />

    <About />

    <Team />

    <Contact />
  </div>
</template>

<script>
  import SideBar from './components/SideBar.vue'
  import TopBar from './components/TopBar.vue'
  import Banner from './components/Banner.vue'
  import About from './components/About.vue'
  import Team from './components/Team.vue'
  import Contact from './components/Contact.vue'

  export default {
    name: 'app',
    components: {
      SideBar,
      TopBar,
      Banner,
      About,
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
  }
</style>
