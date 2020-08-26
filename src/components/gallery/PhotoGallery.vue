<template>
  <b-container fluid class="projects pt-4">
    <FullSlider
      :images="images"
      @toggleCarousel="toggleCarousel"
      :showSlider="showSlider"
      v-if="!isSmallScreen"
    />
    <Masonry v-on:clicked-img="showCarousel" v-if="!isSmallScreen" />
    <Slider :images="mobileImgs" v-if="isSmallScreen" />
  </b-container>
</template>

<script>
import FullSlider from "@/components/gallery/FullSlider.vue";
import Slider from "@/components/gallery/Slider.vue";
import Masonry from "@/components/gallery/Masonry.vue";
import masonry from "@/services/masonry";
export default {
  data() {
    return {
      images: null,
      showSlider: false,
      windowWidth: 0,
      isSmallScreen: false
    };
  },
  components: {
    FullSlider,
    Slider,
    Masonry
  },
  computed: {
    mobileImgs() {
      return masonry.images;
    }
  },
  methods: {
    showCarousel(data) {
      this.images = data;
      this.showSlider = true;
    },
    toggleCarousel(value) {
      this.showSlider = value;
    },
    handleResize() {
      this.windowWidth = window.innerWidth;
      this.windowWidth < 768
        ? (this.isSmallScreen = true)
        : (this.isSmallScreen = false);
    }
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  }
};
</script>

<style lang="scss" scoped>
.projects {
  background-color: $dark-grey;
}
</style>
