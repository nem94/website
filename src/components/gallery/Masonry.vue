<template>
  <b-container fluid>
    <b-container>
      <masonry
        :item-selector="itemSelector"
        :column-width="columnWidth"
        @layoutComplete="onLayoutComplete"
        :transition-duration="0.5"
        :stagger="15"
        :gutter="5"
      >
        <div class="grid-item" v-for="(item, index) in imgArr" :key="index">
          <b-img
            class="scale-in-center"
            :src="item.src"
            @click="emitClickEvent(item)"
          ></b-img>
        </div>
      </masonry>
    </b-container>
  </b-container>
</template>

<script>
import masonry from '@/services/masonry';
export default {
  computed: {
    imgArr() {
      return masonry.images;
    },
  },
  data() {
    return {
      itemSelector: '.grid-item',
      columnWidth: 350,
      msnry: null,
    };
  },
  methods: {
    onLayoutComplete() {
      console.log('layout complete !');
    },
    emitClickEvent(img) {
      const index = this.imgArr.indexOf(img);
      this.imgArr.splice(index, 1);
      this.imgArr.unshift(img);
      this.$emit('clicked-img', this.imgArr);
    },
  },
};
</script>

<style lang="scss" scoped>
.grid-item {
  width: 350px;
  position: relative;
  padding-bottom: 5px;
  &:nth-child(even) {
    animation-delay: 0.75s;
  }
  img {
    max-width: 100%;
  }
}

.scale-in-center {
  -webkit-animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

/**
 * ----------------------------------------
 * animation scale-in-center
 * ----------------------------------------
 */
@-webkit-keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes scale-in-center {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 1;
  }
}
</style>
