<template>
  <header>
    <div class="header-info">
      <b-img src="@/assets/logo.png"></b-img>
      <div class="info-list">
        <div class="item">
          <b-icon-telephone></b-icon-telephone>
          <div class="ml-2">
            <span class="d-block text-uppercase">Telefon</span>
            <span>0757 000 000</span>
          </div>
        </div>
        <div class="item">
          <b-icon-clock-history></b-icon-clock-history>
          <div class="ml-2">
            <span class="d-block text-uppercase">Program</span>
            <span>Luni - Sambata 08:00 - 18:00</span>
          </div>
        </div>
        <div class="item">
          <b-icon-map></b-icon-map>
          <div class="ml-2">
            <span class="d-block text-uppercase">Adresa</span>
            <span>Sos. Buzaului 3 B, Braila</span>
          </div>
        </div>
      </div>
    </div>
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/">Home</b-nav-item>
          <b-nav-item to="/about">About</b-nav-item>
          <b-nav-item to="/services">Services</b-nav-item>
          <b-nav-item to="/projects">Projects</b-nav-item>
          <b-nav-item to="/contact-us">Contact</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header-info {
  background-color: $primary;
  border-bottom: 1px solid $dark-grey;
  padding: 1rem 1.5rem;
  display: flex;
  img {
    max-width: 100%;
    height: 90px;
  }
  .info-list {
    margin-left: auto;
    display: flex;

    .item {
      align-items: center;
      display: flex;
      padding-right: 3rem;
      padding-left: 3rem;
      border-right: 1px solid $light-grey;
      font-size: 15px;
      &:last-child {
        border-right: 0;
      }
      .text-uppercase {
        color: $light-grey;
      }
    }
  }
  .b-icon {
    font-size: 25px;
    color: $light;
  }
}
.navbar {
  background-color: $primary;
  padding-bottom: 0;

  .navbar-nav {
    margin-left: auto;
    margin-right: auto;
    .nav-item {
      .nav-link {
        color: $light;
        transition: all ease-in-out 0.5s;
        border-bottom: 3px solid transparent;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 14px;
        padding: 1rem;
        &.router-link-active {
          color: $secondary;
          border-bottom: 3px solid $secondary;
        }
      }
      &:hover {
        .nav-link {
          color: $secondary;
          border-bottom: 3px solid $secondary;
        }
      }
    }
  }
}

@media all and (max-width: 768px) {
  .header-info {
    border: none;
    justify-content: center;
    .info-list {
      display: none;
    }
  }
}
</style>
