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
      border-bottom: solid 1px;
      margin: 0 auto;
      padding: 10px 100px 5px;
    }
    &__title{
      margin: 0;
      text-align: left;
      font-size: 20px;
    }
  }
</style>
