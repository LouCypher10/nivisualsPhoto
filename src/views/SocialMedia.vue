<template>
  <div class="container">
    <div class="social">
      <a href="https://www.facebook.com/Nivisuals"
        ><img src="../assets/img/FB.png" alt="Facebook icon" /></a
      >Dzięki Facebookowi będziesz na bierząco z najnowszymi wydarzeniami.
      Dowiesz się, na jakich wydarzeniach można nas spotkać. To również dobre
      miejsce, by nawiązać z nami kontakt.
    </div>
    <div class="social">
      <a href="https://www.instagram.com/nivisuals/"
        ><img src="../assets/img/Daco_4677259.png" alt="Instagram icon" /></a
      >Na Instagramie publikujemy najnowsze zdjęcia. To dobre miejsce, by poznać
      przekrój naszej twórczości i śledzić naszą pracę.
    </div>
  </div>
</template>
<script>
export default {
  name: "SocialMedia",
};
</script>
<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  color: #fff;
  font-size: 2vw;
  margin-top: 50px;

  .social {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 30vw;
    margin-bottom: 50px;
    a {
    }
    img {
      height: 20vw;
      width: 20vw;
    }
  }
}

@media screen and (max-width: 550px) {
  .container {
    flex-direction: column;
    align-items: center;
    font-size: 4vw;
    font-weight: bold;
    .social {
      width: 80vw;
      img {
        height: 50vw;
        width: 50vw;
      }
    }
  }
}
</style>
