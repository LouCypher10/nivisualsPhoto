<template>
  <div class="main">
    <ul>
      <li>
        <img src="../../assets/img/m1.jpg" width="200" />
      </li>
      <li>
        <img src="../../assets/img/m2.jpg" width="200" />
      </li>
      <li>
        <img src="../../assets/img/m3.jpg" width="200" />
      </li>
      <li>
        <img src="../../assets/img/m4.jpg" width="200" />
      </li>
    </ul>
    <ul>
      <li>
        <img src="../../assets/img/m5.jpg" width="200" />
      </li>
      <li>
        <img src="../../assets/img/m6.jpg" width="200" />
      </li>
      <li>
        <img src="../../assets/img/m7.jpg" width="200" />
      </li>
      <li>
        <img src="../../assets/img/m8.jpg" width="200" />
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "MaternityComponent",
};
</script>
<style lang="scss" scoped>
.main {
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
</style>
