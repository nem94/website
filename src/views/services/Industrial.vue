<template>
  <b-container fluid class="overflow-hidden">
    <b-row>
      <MainBanner
        img-name="industrial_banner"
        :size="350"
        title="Constructii industriale la cele mai inalte standarde"
        animation="slide-left"
        position="center"
      />
    </b-row>
    <b-row>
      <SmallBanner
        title="Constructii industriale de calitate"
        description="Credem in dezvoltarea segmentului industrial de orice fel si tocmai de aceea oferim servicii de calitate in ceea ce priveste construirea acestora.Serviciile noastre in domeniul constructiilor industriale acopera urmatoarele zone:"
      />
    </b-row>
    <b-row>
      <b-container class="wrapper">
        <b-row>
          <b-col>
            <Card
              title="hale"
              img="item_background_1"
              icon="check2-circle"
              :delay="200"
              animation="zoom-in-left"
            />
          </b-col>
          <b-col>
            <Card
              title="depozite industriale"
              img="item_background_1"
              icon="check2-circle"
              :delay="200"
              animation="zoom-in-left"
            />
          </b-col>
          <b-col>
            <Card
              title="silozuri"
              img="item_background_1"
              icon="check2-circle"
              :delay="200"
              animation="zoom-in-left"
            />
          </b-col>
        </b-row>
      </b-container>
    </b-row>
  </b-container>
</template>

<script>
import MainBanner from "@/components/banners/MainBanner.vue";
import SmallBanner from "@/components/banners/SmallBanner.vue";
import Card from "@/components/Card.vue";
export default {
  components: {
    MainBanner,
    SmallBanner,
    Card
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 3rem 0;
}
</style>
