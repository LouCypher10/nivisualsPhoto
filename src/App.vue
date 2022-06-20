<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view />
</template>

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
</style>
