<template>
  <div class="home">
    <CarouselComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import CarouselComponent from "@/components/CarouselComponent.vue";

export default {
  name: "HomeView",
  components: {
    CarouselComponent,
  },
};
</script>
