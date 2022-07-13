<template>
  <div class="main">
    <ul>
      <li>
        <router-link to="portraits">
          <img src="../img/p1.jpg" width="200"
        /></router-link>
        <p>Portraits</p>
      </li>
      <li>
        <router-link to="weddings">
          <img src="../img/w6.jpg" width="200"
        /></router-link>
        <p>Weddings & Events</p>
      </li>
      <li>
        <router-link to="couples">
          <img src="../img/4.jpg" width="200"
        /></router-link>
        <p>Couples</p>
      </li>
      <li>
        <router-link to="maternity">
          <img src="../img/Maternity.jpg" width="200"
        /></router-link>
        <p>Maternity</p>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "GalleryComponent",
};
</script>
<style lang="scss" scoped>
ul {
  margin: 5vw 20vw 15vw 20vw;
}
li {
  text-align: center;
  display: inline-block;
  list-style: none;
  position: relative;
  border: solid 12px #fff;
  background: #fff;
  box-shadow: 0 0 15px 0px #555;
  transition: all 1s ease;
  -o-transition: all 1s ease;
  -moz-transition: all 1s ease;
  -webkit-transition: all 1s ease;
  top: 50px;
}

li:hover {
  top: 0px;
  opacity: 0.5;
}

li:nth-child(1) {
  transform: rotate(10deg);
}

li:nth-child(2) {
  transform: rotate(0deg);
}

li:nth-child(3) {
  transform: rotate(-10deg);
}

li:nth-child(4) {
  transform: rotate(20deg);
}

p {
  margin: -6px 0 0 0;
  font-family: "Homemade Apple", cursive;
  font-size: 23px;
  color: rgb(105, 33, 33);
}
</style>
