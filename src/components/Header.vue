<template>
  <header class="header__wrapper">
    <h1 class="header__title">The best bakeries</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
  }
}
</script>

<style scoped lang="scss">
  .header {
    &__wrapper{
      max-width: 1920px;
      width: 100%;
      margin: 10px auto;
      padding: 0 100px;
    }
    &__title{
      margin: 0;
      text-align: left;
      font-size: 20px;
      border-bottom: solid 1px;
      padding-bottom: 5px;
    }
  }
</style>
