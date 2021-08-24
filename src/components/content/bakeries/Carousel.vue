<template>
      <div id="bakeries-carousel" class="bakeries-carousel">
        <img v-for="source in sources" class="bakeries__logo" v-bind:src="source" :key="source"  alt="logo"/>
      </div>
</template>

<script>
export default {
  name: 'Bakeries',
  computed: {
    sources () {
      console.log(this.$store.getters.getSources)
      return this.$store.getters.getSources
    },
    bakeries () {
      return this.$store.state.bakeries
    }
  }
}
</script>

<style scoped lang="scss">
.bakeries {
  &__wrapper{
    display: flex;
    flex-wrap: wrap;
     }
  &__logo{
    width: 200px;
    height: 200px;
   }
  }
</style>
