<template>
  <div
    class="item"
    :data-aos="animation"
    :data-aos-delay="delay"
    :data-aos-duration="duration"
    :data-aos-easing="timing"
  >
    <div class="body" :style="{backgroundImage: `url(${this.url}`}">
      <div class="overlay"></div>
      <div class="content d-flex flex-column align-items-center">
        <b-icon :icon="icon"></b-icon>
        <h2 class="my-auto">{{title}}</h2>
        <p>{{description}}</p>
      </div>
    </div>
    <div class="link">
      <b-link :to="to">{{link}}</b-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    img: {
      type: String
    },
    icon: {
      type: String
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    link: {
      type: String,
      default: "read more"
    },
    animation: {
      type: String,
      default: "fade-up-left"
    },
    delay: {
      type: Number
    },
    duration: {
      type: Number,
      default: 800
    },
    timing: {
      type: String,
      default: "ease-in-out"
    },
    to: {
      type: String
    }
  },
  computed: {
    url() {
      return require(`@/assets/${this.img}.jpg`);
    }
  }
};
</script>

<style lang="scss" scoped>
.item {
  text-align: center;
  width: 33.33%;

  position: relative;
  &:hover {
    .body {
      transform: translateY(0) scaleY(1);
    }
  }
  .body {
    position: relative;
    transform: translateY(56px);
    z-index: 1;
    transform-origin: top;
    transform-style: preserve-3d;
    transition: all cubic-bezier(0.165, 0.84, 0.44, 1) 0.4s;
    background-size: cover;
    min-height: 275px;
    background-position: center;

    .content {
      padding: 2rem 2rem;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      color: $white;

      .b-icon {
        color: $secondary;
        font-size: 3.5rem;
      }

      h2 {
        text-transform: uppercase;
      }
    }
    .overlay {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: $primary;
      opacity: 0.75;
    }
  }
  .link {
    padding: 1rem;
    background-color: $secondary;
    a {
      font-weight: 600;
      text-transform: uppercase;
      color: $white;
      text-decoration: none;
    }
  }
}
</style>