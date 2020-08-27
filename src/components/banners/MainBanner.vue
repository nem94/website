<template>
  <b-container fluid class="overflow-hidden">
    <b-row>
      <div class="banner d-flex align-items-center" :style="options">
        <div class="overlay"></div>
        <b-col
          offset-md="3"
          md="9"
          :data-aos="animation"
          data-aos-delay="20"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h1 class="title" v-if="title">{{ title }}</h1>
        </b-col>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    imgName: {
      type: String
    },
    position: {
      type: String
    },
    size: {
      type: Number,
      default: 450
    },
    animation: {
      type: String,
      default: "fade-up-left"
    }
  },
  computed: {
    url() {
      return require(`@/assets/${this.imgName}.jpg`);
    },
    options() {
      return {
        backgroundImage: `url(${this.url})`,
        backgroundPosition: this.position,
        height: `${this.size}px`
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  width: 100%;
  perspective: 500px;
  background-size: cover;

  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: $light-grey;
    opacity: 0.5;
  }

  .title {
    font-weight: 700;
    font-size: 60px;
    text-align: left;
    transform: translate3d(0, 0, 0);
  }
}
</style>
