<template>
  <div class="content__wrapper">
    <Bakeries />
    <Information />
    <Locations />
  </div>
</template>

<script>
import Bakeries from './bakeries/Bakeries';
import Information from './information/Information';
import Locations from './locatoins/Locations';
export default {
  name: 'Content',
  components: {
    Locations,
    Information,
    Bakeries
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
      padding: 0 150px;
      @media screen and (max-width: 768px){
        padding: 0 50px;
      }
    }
  }
</style>
