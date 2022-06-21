<template>
  <div class="main">
    <ul>
      <li>
        <img src="../assets/img/Portrait.jpg" width="200" />
        <p>Portraits</p>
      </li>
      <li>
        <img src="../assets/img/3.jpg" width="200" />
        <p>Events</p>
      </li>
      <li>
        <img src="../assets/img/4.jpg" width="200" />
        <p>Lovers</p>
      </li>
      <li>
        <img src="../assets/img/Outdoor.jpg" width="200" />
        <p>Openspace</p>
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
p {
  font-family: "Homemade Apple", cursive;
  font-size: 23px;
  color: rgb(105, 33, 33);
}
ul {
  margin: 5vw 25vw 15vw 25vw;
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
  margin: -15px 0 0 0;
}
</style>
