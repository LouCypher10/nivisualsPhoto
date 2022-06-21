<template>
  <div class="main">
    <router-link to="about">
      <div class="main_btn">
        <img src="../assets/img/user.svg" alt="About me" />&nbsp; About me
      </div>
    </router-link>
    <router-link to="gallery">
      <div class="main_btn">
        <img src="../assets/img/picture.svg" alt="Picture" />&nbsp; Recent works
      </div></router-link
    >
    <div class="main_btn">
      <img src="../assets/img/envelope.svg" alt="Letter" />&nbsp; Contact me
    </div>
    <router-link to="social">
      <div class="main_btn">
        <img src="../assets/img/facebook.svg" alt="Social media" />&nbsp; Social
        media
      </div></router-link
    >
  </div>
</template>

//----------------------------------------------------------------
<script>
export default {
  name: "NavComponent",
};
</script>

//---------------------------------------------------------------

<style lang="scss" scoped>
.main {
  display: flex;
  min-width: 95vw;
  justify-content: space-around;
  margin-bottom: 40px;
  .main_btn {
    display: flex;
    flex-direction: column;
    width: 10vw;
    height: 10vw;
    font-size: 1rem;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 50%;
    filter: blur(2px);
    transition: ease 0.5s all;
    &:hover {
      filter: none;
      transform: scale(1.1);
      cursor: pointer;
    }

    -webkit-box-shadow: 32px 25px 74px -28px rgba(255, 255, 255, 1);
    -moz-box-shadow: 32px 25px 74px -28px rgba(255, 255, 255, 1);
    box-shadow: 32px 25px 74px -28px rgba(255, 255, 255, 1);

    img {
      color: #fff;
      width: 3vw;
      height: auto;
    }
  }
}

@media screen and (max-width: 550px) {
  .main {
    flex-direction: column;
    width: fit-content;
    align-items: center;
    gap: 30px;
    margin-top: 25vw;
    .main_btn {
      width: 30vw;
      height: 30vw;
      filter: none;
      img {
        width: 8vw;
      }
    }
  }
}
</style>
