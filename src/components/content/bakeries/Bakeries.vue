<template>
      <div class="bakeries__wrapper">
        <h1 class="bakeries__title">The best bakeries</h1>
        <BakeriesCarousel v-if="sources.length > 4" v-bind:sources="sources"/>
        <BakeriesLogos v-else v-bind:sources="sources" />
      </div>
</template>

<script>
import BakeriesCarousel from './BakeriesCarousel';
import BakeriesLogos from './BakeriesLogos';

export default {
  name: 'Bakeries',
  components: {
    BakeriesLogos,
    BakeriesCarousel
  },
  computed: {
    schedules () {
      return this.$store.getters.getAllSchedules
    },
    sources () {
      return this.$store.getters.getSources
    },
  }
}
</script>

<style scoped lang="scss">
.bakeries {
  &__wrapper{
    margin: 30px 0;
    max-width: 100%;
    height: 115px;
     }
  &__title{
    text-align: left;
    font-size: 15px;
    font-weight: 600;
    border-bottom: solid 1px #000000;
    padding-bottom: 5px;
  }
}
</style>
