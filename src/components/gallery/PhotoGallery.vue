<template>
  <div>
    <Carousel :images="images" />
    <Masonry v-on:clicked-img="doSomething" />
  </div>
</template>

<script>
import Carousel from '@/components/gallery/Carousel.vue';
import Masonry from '@/components/gallery/Masonry.vue';
export default {
  data() {
    return {
      images: null,
    };
  },
  components: {
    Carousel,
    Masonry,
  },
  methods: {
    doSomething(data) {
      this.images = data;
      document.getElementById('body').classList.add('overflow-hidden');
    },
  },
};
</script>

<style lang="scss" scoped></style>
