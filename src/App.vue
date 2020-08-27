<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<style lang="scss">
#app {
  color: $secondary;
  .dropdown-toggle {
    display: none;
  }

  .navbar {
    .dropdown-menu {
      border-radius: 0;
      border: 0;
      background-color: $primary;
      padding: 0;
      .dropdown-item {
        padding: 1rem;
        background-color: $primary;
        color: $light;
        border-bottom: 3px solid transparent;
        &:hover {
          color: $secondary;
          border-bottom-color: $secondary;
        }
        &.router-link-exact-active {
          color: $secondary;
          border-bottom-color: $secondary;
        }
      }
    }
  }
}
</style>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
