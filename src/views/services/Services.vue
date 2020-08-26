<template>
  <div>
    <Banner
      img-name="services"
      :size="250"
      title="Services"
      animation="slide-left"
      position="center"
    />
    <b-container class="wrapper">
      <b-row
        data-aos="zoom-in-up"
        data-aos-delay="20"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
      >
        <b-col cols="12" class="text-center description">
          <h3>Specialisti in domeniul constructiilor</h3>
          <p class="mb-0">
            Oferim solutii eficiente perfect adaptate cerintelor dumneavoastră,
            promptitudinea si seriozitatea fiind principile de baza in onorarea
            proiectelor.
            <br />Suntem o echipa de profesionisti in stransa
            colaborare cu arhitecți, instalatori și urbaniști pentru realizarea
            proiectelor de calitate.
          </p>
        </b-col>
      </b-row>
      <b-row>
        <Card
          title="Constructii civile"
          description="bla bla bla"
          img="civil_banner"
          icon="house"
          :delay="200"
          animation="zoom-in-right"
          to="/services/civil"
        />
        <Card
          title="Constructii industriale"
          description="bla bla bla"
          img="industrial_banner"
          icon="building"
          :delay="200"
          animation="zoom-in-up"
          to="/services/industrial"
        />
        <Card
          title="Certificate"
          description="bla bla bla"
          img="signature"
          icon="award"
          :delay="200"
          animation="zoom-in-left"
          to="/certifications"
        />
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";
import Card from "@/components/Card.vue";
export default {
  components: {
    Banner,
    Card
  }
};
</script>

<style lang="scss" scoped>
.description {
  padding: 3rem 0;
  h3 {
    color: $dark-grey;
  }

  p {
    color: $light-grey;
  }
}

.wrapper {
  padding-bottom: 3rem;
}

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
    font-weight: 500;
    text-transform: uppercase;
    color: $white;
  }
}
</style>
