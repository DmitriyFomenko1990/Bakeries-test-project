<template>
  <carousel class="carousel__wrapper" :per-page="4"  :mouse-drag="false" :navigationEnabled="true"
            :paginationEnabled="false" :touchDrag="true" navigationNextLabel=">" navigationPrevLabel="<">
    <slide v-for="(source, index) in sources" :key="index">
      <img class="carousel__logo" v-bind:src="source"  alt="logo"/>
    </slide>
  </carousel>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';
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
    height: 75px;
    margin: 20px auto 0;
  }
  &__logo{
    width: 150px;
    height: 75px;
   }
}
</style>
