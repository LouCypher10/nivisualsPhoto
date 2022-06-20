<template>
  <router-link to="/"><header-with-logo /></router-link> |
  <router-view />
  <router-link to="/about">About</router-link>
</template>

<script>
import HeaderWithLogo from "./components/HeaderWithLogo.vue";

export default {
  name: "App",
  components: {
    HeaderWithLogo,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 150vh;
  background-image: url("./assets/img/together.jpg");
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
