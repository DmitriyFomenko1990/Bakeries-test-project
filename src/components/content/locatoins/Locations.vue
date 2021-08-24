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
  methods: {},
  computed: {
    locationsArrays () {
      console.log(this.$store.getters.getLocationsNames)
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
    font-size: 25px;
    padding-bottom: 5px;
    border-bottom: 1px solid #000000;
  }
  &__list-wrapper{
    display: flex;
  }
  &__list{
    margin-top: 20px;
    margin-right: 150px;
    text-align: left;
    width: 100px;
    &:last-child{
      margin-right: 0;
    }
  }
  &__location{
    font-weight: 600;
    line-height: 23px;
    margin-bottom: 10px;
    &:last-child{
      margin-bottom: 0;
    }
  }
  }
</style>
