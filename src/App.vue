<template>
  <router-link to="/"><header-with-logo /></router-link>
  <router-view />
  <nav-component />
</template>

<script>
import HeaderWithLogo from "./components/HeaderWithLogo.vue";
import NavComponent from "./components/NavComponent.vue";

export default {
  name: "App",
  components: {
    HeaderWithLogo,
    NavComponent,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: auto;
  height: auto;
  background-image: url("./img/together.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  display: flex;
  flex-direction: column;
}

a {
  text-decoration: none;
}
</style>
