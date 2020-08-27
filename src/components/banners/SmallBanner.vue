<template>
  <b-container fluid class="small-banner" :class="customClass">
    <b-row
      :data-aos="animation"
      :data-aos-delay="delay"
      :data-aos-duration="duration"
      :data-aos-easing="timing"
    >
      <b-col cols="12" class="text-center">
        <h3>{{title}}</h3>
        <p class="mb-0">{{mainDescription}}</p>
        <p class="mb-0">{{secondDescription}}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    mainDescription: {
      type: String
    },
    secondDescription: {
      type: String
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
    customClass: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.small-banner {
  padding: 3rem 0;
  h3 {
    color: $dark-grey;
  }

  p {
    color: $light-grey;
  }
  &.bg-primary {
    h3 {
      color: $light;
    }
    p {
      color: $light-grey;
    }
  }
}
</style>