<template>
  <div>
    <MainBanner
      img-name="signature"
      :size="250"
      title="Certificate"
      animation="slide-left"
      position="center"
    />
    <b-container fluid class="bg-primary">
      <b-container class="wrapper">
        <b-row
          data-aos="zoom-in-up"
          data-aos-delay="20"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
          <b-col cols="12" class="text-center description">
            <h3>Certificate Ligidron</h3>
            <p class="mb-0">
              <span>LIGIDRON</span> beneficiaza de sistem de management al calitatii si mediului documentat, implementat, si mentinut continuu conform standardelor.
              <br />
              <span>ISO 9001 si ISO 14001</span>
            </p>
          </b-col>
        </b-row>
      </b-container>
    </b-container>
    <b-container
      data-aos="zoom-in-up"
      data-aos-delay="20"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
      class="img-wrapper"
    >
      <b-row>
        <b-col>
          <Card
            title="ISO 9001"
            description="Sistemul de management al calitatii"
            img="signature"
            icon="award"
            :delay="200"
            animation="zoom-in-left"
            class="no-transform"
          />
        </b-col>
        <b-col>
          <Card
            title="ISO 14001"
            description="Sistemul de management de mediu"
            img="environment"
            icon="award"
            :delay="200"
            animation="zoom-in-left"
          />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import MainBanner from "@/components/banners/MainBanner.vue";
import Card from "@/components/Card.vue";
export default {
  components: {
    MainBanner,
    Card
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 3rem 0;
  h3 {
    color: $light;
  }
  p {
    color: $light-grey;
    span {
      font-weight: 700;
    }
  }
}

.img-wrapper {
  padding: 3rem 0;
  img {
    max-width: 100%;
    position: relative;
  }
  .overlay {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: $primary;
    opacity: 0.5;
  }
}
</style>