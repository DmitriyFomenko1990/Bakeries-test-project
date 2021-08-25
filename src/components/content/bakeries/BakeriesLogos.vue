<template>
  <div class="logos__wrapper" >
      <img class="logos__logo" v-for="(source, index) in sources" :key="index"  v-bind:src="source"  alt="logo" />
  </div>
</template>

<script>
export default {
  name: 'BakeriesLogos',
  props: {
    sources: Array
  }
}
</script>
<style scoped lang="scss">
.logos {
  &__wrapper{
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  &__logo{
    width: 150px;
    height: 75px;
    margin-top: 20px;
   }
}
</style>
