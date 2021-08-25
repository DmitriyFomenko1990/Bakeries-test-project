<template>
      <div class="bakeries__wrapper">
        <h1 class="bakeries__title">The best bakeries</h1>
        <BakeriesCarousel v-bind:sources="sources"/>
      </div>
</template>

<script>
import BakeriesCarousel from './BakeriesCarousel'

export default {
  name: 'Bakeries',
  components: {
    BakeriesCarousel
  },
  computed: {
    sources () {
      return this.$store.getters.getSources
    }
  }
}
</script>

<style scoped lang="scss">
.bakeries {
  &__wrapper{
    margin: 30px 0;
    max-width: 100%;
    padding: 0 50px;
    overflow: hidden;
     }
  &__title{
    text-align: left;
    font-size: 20px;
    border-bottom: solid 1px;
    padding-bottom: 5px;
  }
}
</style>
