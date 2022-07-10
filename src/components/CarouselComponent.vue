<template>
  <div class="container">
    <figure class="icon-cards mt-3">
      <div class="icon-cards__content">
        <div
          class="icon-cards__item d-flex align-items-center justify-content-center"
        >
          <span class="h1"
            ><img src="../img/irish_man.jpg" alt="Irish man"
          /></span>
        </div>
        <div
          class="icon-cards__item d-flex align-items-center justify-content-center"
        >
          <span class="h1"
            ><img src="../img/DarkKacper.jpg" alt="Dark Kacper"
          /></span>
        </div>
        <div
          class="icon-cards__item d-flex align-items-center justify-content-center"
        >
          <span class="h1"
            ><img src="../img/girlBlueDress.jpg" alt="Girl in blue dress"
          /></span>
        </div>
      </div>
    </figure>
  </div>
</template>

<script>
export default {
  name: "CarouselComponent",
  setup() {
    function classToggle() {
      var el = document.querySelector(".icon-cards__content");
      el.classList.toggle("step-animation");
    }

    document.querySelector("#toggle-animation");
    document.addEventListener("click", classToggle);
  },
};
</script>
<style lang="scss" scoped>
.container {
  height: 50vw;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
}
img {
  width: 30vw;
  height: auto;
  border-radius: 15px;
}

.icon-cards {
  width: 60vw;
  height: 40vw;
  max-width: 380px;
  max-height: 250px;
  margin: 0;
  color: white;
  perspective: 1000px;
  transform-origin: center;

  // This is the element that rotates with the animation

  &__content {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-origin: center;
    transform-style: preserve-3d;
    transform: translateZ(-30vw) rotateY(0);
    animation: carousel 10s infinite cubic-bezier(0.77, 0, 0.175, 1) forwards;

    &.step-animation {
      animation: carousel 8s infinite steps(1) forwards;
    }
  }

  // Individual cards

  &__item {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 60vw;
    height: 40vw;
    max-width: 380px;
    max-height: 250px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    border-radius: 6px;
    transform-origin: center;

    &:nth-child(1) {
      transform: rotateY(0) translateZ(35vw);
    }

    &:nth-child(2) {
      transform: rotateY(120deg) translateZ(35vw);
    }

    &:nth-child(3) {
      transform: rotateY(240deg) translateZ(35vw);
    }
  }
}

// Carousel animation

@keyframes carousel {
  0%,
  17.5% {
    transform: translateZ(-35vw) rotateY(0);
  }
  27.5%,
  45% {
    transform: translateZ(-35vw) rotateY(-120deg);
  }
  55%,
  72.5% {
    transform: translateZ(-35vw) rotateY(-240deg);
  }
  82.5%,
  100% {
    transform: translateZ(-35vw) rotateY(-360deg);
  }
}
// Jelly checkbox animation

@keyframes jelly {
  from {
    transform: scale(1, 1);
  }
  30% {
    transform: scale(1.25, 0.75);
  }
  40% {
    transform: scale(0.75, 1.25);
  }
  50% {
    transform: scale(1.15, 0.85);
  }
  65% {
    transform: scale(0.95, 1.05);
  }
  75% {
    transform: scale(1.05, 0.95);
  }
  to {
    transform: scale(1, 1);
  }
}
</style>
