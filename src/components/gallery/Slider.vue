<template>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide
      :caption="img.info"
      :img-src="img.src"
      v-for="(img, index) in images"
      :key="index"
    ></b-carousel-slide>
  </b-carousel>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
    },
    showSlider: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped></style>
