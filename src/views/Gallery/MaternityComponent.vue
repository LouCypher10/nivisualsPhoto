<template>
  <div class="main">
    <ul>
      <li v-for="(image, index) in gallery" :key="index">
        <img :src="require(`@/img/${image}.jpg`)" alt="image" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "WeddingComponent",
  setup() {
    const gallery = ["m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8"];
    return { gallery };
  },
};
</script>
<style lang="scss" scoped>
.main {
  margin: 5vw 20vw 15vw 20vw;
}

li {
  text-align: center;
  display: inline-block;
  list-style: none;
  position: relative;
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

li:nth-child(5) {
  transform: rotate(10deg);
}

li:nth-child(6) {
  transform: rotate(0deg);
}

li:nth-child(7) {
  transform: rotate(-10deg);
}

li:nth-child(8) {
  transform: rotate(20deg);
}

img {
  border: solid 12px #fff;
  width: 25vw;
}

@media screen and (max-width: 550px) {
  img {
    width: 60vw;
    border: solid 5px #fff;
  }
}
</style>
