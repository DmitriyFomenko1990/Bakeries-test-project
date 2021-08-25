<template>
  <carousel class="carousel__wrapper" :per-page="4"  :mouse-drag="false" :navigationEnabled="true" :paginationEnabled="false" :touchDrag="true">
    <slide v-for="(source, index) in sources" :key="index">
      <img class="carousel__logo" v-bind:src="source"  alt="logo"/>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel'
export default {
  name: 'BakeriesCarousel',
  props: {
    sources: Array
  },
  components: {
    Carousel,
    Slide
  }
}
</script>

<style scoped lang="scss">
.carousel {
  &__wrapper{
    width: 95%;
    margin: 0 auto;
  }
  &__logo{
    width: 150px;
    height: 75px;
   }
}
</style>
