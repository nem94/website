<template>
  <b-container fluid class="carousel-wrapper" v-show="showSlider">
    <b-icon-x @click="closeCarousel"></b-icon-x>
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      indicators
      :interval="3000"
    >
      <b-carousel-slide
        :caption="img.info"
        :img-src="img.src"
        v-for="(img, index) in images"
        :key="index"
      ></b-carousel-slide>
    </b-carousel>
  </b-container>
</template>

<script>
export default {
  props: {
    images: {
      type: Array
    },
    showSlider: {
      type: Boolean
    }
  },
  methods: {
    closeCarousel() {
      document.getElementById("body").classList.remove("overflow-hidden");
      this.$emit("toggleCarousel", false);
    }
  },
  updated() {
    console.log(this.images);
    document.getElementById("body").classList.add("overflow-hidden");
    const images = document.getElementsByClassName("img-fluid");
    console.log(images);
    images.forEach(img => {
      img.style.objectFit = "contain";
      img.style.height = "100%";
      console.log(img.height);
    });
    console.log("sss");
  }
};
</script>

<style lang="scss" scoped>
.img-fluid {
  height: 100% !important;
  object-fit: contain !important;
}
.carousel-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  padding: 2rem;
  background-color: rgba(0, 0, 0, 0.75);
  overflow: auto;

  .b-icon {
    position: absolute;
    font-size: 30px;
    right: 5px;
    top: 5px;
    z-index: 10;
    cursor: pointer;
  }

  .carousel-item {
    &.active {
      height: 600px;
    }
  }
}
</style>
