<template>
  <b-container fluid class="overflow-hidden">
    <b-row>
      <MainBanner
        img-name="house"
        :size="350"
        title="Constructii civile la cele mai inalte standarde"
        animation="slide-left"
        position="center"
      />
    </b-row>
    <b-row>
      <SmallBanner
        title="Construim orice tip de imobil"
        main-description="Toate detaliile ce tin de aspect sau durabilitate sunt analizate cu grija, astfel incat rezultatul sa fie cu adevarat remarcabil."
        second-description="Serviciile noastre in domeniul constructiilor industriale acopera urmatoarele zone:"
      />
    </b-row>
    <b-row>
      <b-container class="wrapper">
        <b-row>
          <b-col>
            <Card
              title="finisaje"
              icon="check2-circle"
              :delay="200"
              animation="zoom-in-left"
              img="item_background_2"
            />
          </b-col>
          <b-col>
            <Card
              title="mansardari"
              icon="check2-circle"
              :delay="200"
              animation="zoom-in-left"
              img="item_background_2"
            />
          </b-col>
          <b-col>
            <Card
              title="termohidroizolari"
              icon="check2-circle"
              :delay="200"
              animation="zoom-in-left"
              img="item_background_2"
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
