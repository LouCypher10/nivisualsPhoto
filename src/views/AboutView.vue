<template>
  <div class="about">
    <img src="../assets/img/Emilka.jpg" alt="Emilka" />
    <h1>Photography with passion</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, optio
      reiciendis, aut odio voluptates qui voluptatibus at doloremque iure eos
      obcaecati repellendus placeat officiis veritatis? Vero, ducimus.
      Perspiciatis non maiores debitis, expedita dignissimos deserunt enim ipsa
      architecto suscipit sint, explicabo quae praesentium minus commodi
      distinctio culpa? Unde aliquam corrupti sint dolores veritatis autem ipsam
      magni voluptatibus quam. Eum a, tempore repudiandae nesciunt, dolore
      distinctio nihil blanditiis accusamus sint ad facilis libero voluptatum
      dignissimos itaque nam quasi debitis praesentium velit laborum,
      voluptatibus enim consequuntur. Aperiam accusantium facilis veniam non
      iste assumenda aliquam exercitationem pariatur, blanditiis at sed eveniet
      dolorum cupiditate veritatis!
    </p>
  </div>
</template>
<script>
export default {
  name: "AboutView",
};
</script>
<style lang="scss" scoped>
.about {
  position: relative;
  width: 50vw;
  align-self: center;
  margin-top: 50px;
  text-align: center;
  color: #fff;
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
