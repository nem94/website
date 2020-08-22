<template>
  <b-container fluid class="home">
    <b-row>
      <div class="home-banner d-flex align-items-center">
        <div class="overlay"></div>
        <b-col
          offset-md="3"
          md="9"
          data-aos="fade-up-left"
          data-aos-delay="20"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <h1 class="title">
            Realizam orice tip de lucrare, atat pentru persoane juridice, cat si
            pentru persoane fizice
          </h1>
        </b-col>
      </div>
    </b-row>
    <b-row
      class="bg-primary middle-banner"
      data-aos="zoom-in-up"
      data-aos-delay="20"
      data-aos-duration="800"
      data-aos-easing="ease-in-out"
    >
      <b-col cols="12" class="text-center">
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
    <b-row class="services">
      <b-container>
        <h2>Servicii</h2>
        <b-row class="description">
          <b-col
            cols="12"
            md="6"
            class="item"
            data-aos="fade-down-right"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <b-icon-house font-scale="3"></b-icon-house>
            <h4>Constructii civile</h4>
            <p>
              Oferim solutii personalizate pentru orice tip de constructii
              civile.
              <br />Profesionalismul ne permite sa obtinem rezultate remarcabile
              indiferent ca vorbim de case de locuit, constructii cu destinatie
              turistica sau constructii birouri.
            </p>
          </b-col>
          <b-col
            cols="12"
            md="6"
            class="item"
            data-aos="fade-down-left"
            data-aos-delay="500"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <b-icon-building font-scale="3"></b-icon-building>
            <h4>Constructii industriale</h4>
            <p>
              Constructiile industriale sunt si vor fi intotdeauna un segment de
              maxim interes in zona constructiilor.
              <br />Fiecare constructie industriala reprezinta o provocare si tocmai
              de aceea oferim servicii de calitate in ceea ce priveste
              construirea acestora.
            </p>
          </b-col>
        </b-row>
      </b-container>
    </b-row>
    <b-row class="why bg-primary">
      <b-container>
        <b-row>
          <b-col
            cols="12"
            md="6"
            data-aos="zoom-in-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <h2>De ce noi ?</h2>
            <p class="m-0">
              Profesionalismul ne permite sa obtinem rezultate remarcabile
              indiferent ca vorbim de case de locuit, constructii cu destinatie
              turistica sau constructii birouri.
              <br />Cunoastem importanta materialelor de constructii si stim ce anume
              se potriveste cel mai bine in cazul fiecarei structuri.
              <br />Materialele sunt puse in valoare astfel incat rezultatul
              final sa fie cu adevarat remarcabil.
            </p>
          </b-col>
          <b-col
            md="6"
            data-aos-id="count"
            data-aos="zoom-in-left"
            data-aos-delay="1000"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            class="d-flex justify-content-between align-items-center"
          >
            <div class="ml-3">
              <b-icon-building font-scale="3"></b-icon-building>
              <h5>Lucrari executate</h5>
              <span>{{ animatedProjects }}</span>
            </div>
            <div class="mr-3">
              <b-icon-person-circle font-scale="3"></b-icon-person-circle>
              <h5>Angajati</h5>
              <span>{{ animatedEmployees }}</span>
            </div>
          </b-col>
        </b-row>
      </b-container>
    </b-row>
  </b-container>
</template>

<script>
import gsap from "gsap";

export default {
  data() {
    return {
      employees: 50,
      employeesNumber: 0,
      projects: 150,
      projectsNumber: 0
    };
  },
  computed: {
    animatedEmployees: function() {
      document.addEventListener("aos:in:count", () => {
        gsap.to(this.$data, { duration: 5, employeesNumber: this.employees });
      });
      return this.employeesNumber.toFixed(0);
    },
    animatedProjects: function() {
      document.addEventListener("aos:in:count", () => {
        gsap.to(this.$data, { duration: 5, projectsNumber: this.projects });
      });
      return this.projectsNumber.toFixed(0);
    }
  }
};
</script>

<style lang="scss" scoped>
h2 {
  font-weight: 700;
  font-size: 40px;
}
.home {
  overflow: hidden;
}
.home-banner {
  position: relative;
  background-image: url("../assets/home_banner.jpg");
  background-size: cover;
  height: 650px;
  display: block;
  width: 100%;
  perspective: 500px;

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

.middle-banner {
  padding: 3rem 0;
  h3 {
    color: $light;
  }
  p {
    color: $light-grey;
  }
}

.services {
  text-align: center;
  padding: 3rem 0;
  .description {
    padding-top: 2rem;
    h4 {
      color: $light-grey;
      margin-top: 0.5rem;
    }
    .item {
      p {
        color: $primary;
      }
    }
  }
}

.why {
  text-align: center;
  padding: 3rem 0;
  overflow: hidden;
  p {
    color: $light;
  }
  span {
    color: $light-grey;
    font-size: 40px;
  }
  h5 {
    margin-top: 0.75rem;
    color: $light;
  }
}

.text-focus-in {
  -webkit-animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
  animation: text-focus-in 1s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

/**
 * ----------------------------------------
 * animation text-focus-in
 * ----------------------------------------
 */
@-webkit-keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
@keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
</style>
