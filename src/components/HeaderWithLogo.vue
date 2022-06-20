<template>
  <div class="main">
    <h1>NIVISUALS</h1>
    <h3>PHOTOGRAPHY</h3>
  </div>
</template>

<script>
export default {
  name: "HeaderWithLogo",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nanum+Myeongjo:wght@700&display=swap");
.main {
  text-align: center;
  margin-top: 40px;
  font-family: "Nanum Myeongjo", serif;
  filter: drop-shadow(10px 4px 4px rgb(159, 119, 119));
}
h1 {
  margin-left: auto;
  margin-right: auto;
  width: 36vw;
  font-size: 6vw;
  padding: 15px 0px;
  color: #fff;
  border-top: 0.3rem dashed #fff;
  border-bottom: 0.3rem dashed #fff;
}
h3 {
  text-align: center;
  font-size: 3vw;
  color: #fff;
}
</style>
