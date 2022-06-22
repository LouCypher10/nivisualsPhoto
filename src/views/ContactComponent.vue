<template>
  <div class="main">
    <div class="left">
      <p>Hello there.</p>
      <p>Thank You to visit my page.</p>
      <p>
        If You like my work, wont to know my prices, or free term - contact me.
      </p>
    </div>
    <div class="right">
      <div class="contact">+44 7366 144802</div>
      <div class="contact">nivisuals.photo@gmail.com</div>
      <div class="contact">Garron Crescent BT402AT, Larne</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ContactComponent",
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script:wght@500&display=swap");
.main {
  display: flex;
  flex-direction: row;
  margin: 40px auto;
  .left {
    font-family: "Dancing Script", cursive;
    font-size: 2vw;
    color: #fff;
    line-height: 5vw;
    padding: 4vw 3vw;
    width: 30vw;
    height: 40vw;
    background-color: rgba(106, 42, 0, 0.799);
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 1vw;
    width: 30vw;
    height: 40vw;
    background-image: url("../assets/img/photographs.jpg");
    background-size: cover;
    .contact {
      width: 25vw;
      height: 4vw;
      background-color: rgba(40, 28, 19, 0.955);
      font-size: 1.3vw;
      color: #fff;
      text-align: center;
      line-height: 4vw;
      transform: translateX(-2vw);
    }
  }
}
@media screen and (max-width: 770px) {
  .main {
    flex-direction: column;
    .left {
      width: 70vw;
      height: 100vw;
      font-size: 8vw;
      padding: 20vw 4vw;
    }
    .right {
      width: 70vw;
      height: 100vw;
      .contact {
        width: 60vw;
        height: 10vw;
        line-height: 10vw;
        font-size: 4vw;
        transform: translateX(-6vw);
      }
    }
  }
}
</style>
