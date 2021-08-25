<template>
      <div class="locations__wrapper">
        <h2 class="locations__title">Our most popular locations</h2>
        <div class="locations__list-wrapper">
          <ul class="locations__list" v-for="(locationsArray, index) in locationsArrays" :key="index">
            <li class="locations__location" v-for="(location, index) in locationsArray" :key="index">{{ location }}</li>
          </ul>
        </div>
      </div>
</template>

<script>

export default {
  name: 'Locations',
  computed: {
    locationsArrays () {
      return this.$store.getters.getLocationsNames
    }
  }
}
</script>

<style scoped lang="scss">
.locations {
  &__wrapper{
    margin: 30px 0;
    max-width: 100%;
     }
  &__title{
    text-align: left;
    font-weight: 600;
    font-size: 18px;
    padding-bottom: 5px;
    border-bottom: 1px solid #000000;
    margin-bottom: 20px;
  }
  &__list-wrapper{
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 426px){
      flex-direction: column;
    }
  }
  &__list{
    margin-right: 90px;
    text-align: left;
    width: 100px;
    @media screen and (max-width: 1024px){
      margin-right: 50px;
      &:last-child{
        margin-right: 0;
      }
    }
    @media screen and (max-width: 768px){
      margin-right: 30px;
    }
    @media screen and (max-width: 426px){
      margin: 0 auto;
      &:last-child{
        margin-right: auto;
      }
    }
  }
  &__location{
    font-size: 12px;
    font-weight: 600;
    line-height: 15px;
    padding: 8px 0;
  }
  }
</style>
