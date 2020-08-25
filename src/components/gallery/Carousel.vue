<template>
  <b-container fluid class="carousel-wrapper" v-show="images">
    <b-carousel
      id="carousel-fade"
      style="text-shadow: 0px 0px 2px #000"
      fade
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide
        caption="First slide"
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
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.carousel-wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 9;
  padding: 3rem;
  background-color: rgba(0, 0, 0, 0.75);
  overflow: auto;
}
</style>
