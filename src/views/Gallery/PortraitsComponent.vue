<template>
  <div class="main">
    <ul>
      <li>
        <img src="../../assets/img/Portrait.jpg" width="200" />
      </li>
      <li>
        <img src="../../assets/img/DarkKacper.jpg" width="200" />
      </li>
      <li>
        <img src="../../assets/img/Emilka.jpg" width="200" />
      </li>
      <li>
        <img src="../../assets/img/s4.jpg" width="200" />
      </li>
    </ul>
    <ul>
      <li>
        <img src="../../assets/img/_DSC0145-4.jpg" width="200" />
      </li>
      <li>
        <img src="../../assets/img/2020.jpg" width="200" />
      </li>
      <li>
        <img src="../../assets/img/_DSC0781-Edit.jpg" width="200" />
      </li>
      <li>
        <img src="../../assets/img/DSC_0244-Edit.jpg" width="200" />
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
