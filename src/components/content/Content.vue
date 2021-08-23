<template>
  <div class="content__wrapper">
  </div>
</template>

<script>
export default {
  name: 'Content',
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
      margin: 0 100px;
    }
  }
</style>
