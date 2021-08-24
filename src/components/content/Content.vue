<template>
  <div class="content__wrapper">
    <Bakeries />
    <Information />
  </div>
</template>

<script>
import Bakeries from './bakeries/Bakeries'
import Information from './information/Information'
export default {
  name: 'Content',
  components: {
    Information,
    Bakeries
  },
  props: {
  },
  created () {
    this.$store.dispatch('fetchBakeries')
  }
}
</script>

<style scoped lang="scss">
  .content {
    &__wrapper{
      flex: 1 0 auto;
      max-width: 1920px;
      width: 100%;
      margin: 0 auto;
      padding: 0 100px;
    }
  }
</style>
