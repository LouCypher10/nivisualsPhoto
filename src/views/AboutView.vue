<template>
  <div class="about">
    <img src="../img/Emilka.png" alt="Emilka" />
    <h1>Photography with passion</h1>
    <p>
      We are a couple of photographers based in Northern Ireland. Working as a
      team since 2021. We don't have wands, but we do have cameras, so we could
      capture a little magic of your life. We change simple moments in a
      beautiful memory. Available for individual or engagement portraits,
      maternity & wedding photography.
    </p>
  </div>
</template>
<script>
export default {
  name: "AboutView",
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap");
.about {
  position: relative;
  width: 50vw;
  align-self: center;
  margin-top: 50px;
  text-align: center;
  color: #fff;
  p {
    font-family: "Dancing Script", cursive;
    margin-top: 2.5rem;
    margin-bottom: 2.5rem;
    font-size: 2.8rem;
  }
}

img {
  width: 35vw;
  height: auto;
  border-radius: 10px;
  margin-bottom: 4vw;
}
@media screen and (max-width: 550px) {
  .about {
    width: 90vw;
  }
}
</style>
