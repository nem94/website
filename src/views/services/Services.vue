<template>
  <div>
    <Banner
      img-name="services"
      :size="250"
      title="Services"
      animation="slide-left"
      position="center"
    />
    <b-container class="d-flex justify-content-center">
      <b-card title="Card Title">
        <b-card-text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </b-card-text>
      </b-card>
      <b-card title="Card Title">
        <b-card-text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </b-card-text>
      </b-card>
    </b-container>

    <b-link to="/services/industrial">industrial</b-link>
    <b-link to="/services/civil">civil</b-link>
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
export default {
  components: {
    Banner,
  },
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 30%;
  border-radius: 0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.05);
  border: 0;
}
</style>
