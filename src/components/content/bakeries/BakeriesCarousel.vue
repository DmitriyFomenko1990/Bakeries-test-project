<template>
  <carousel :per-page="4"  :mouse-drag="false" :navigationEnabled="true" :paginationEnabled="false" :touchDrag="true">
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
    margin: 30px 0;
    max-width: 100%;
    padding: 0 50px;
    overflow: hidden;
     }
  &__title{
    text-align: left;
    font-size: 20px;
    border-bottom: solid 1px;
    padding-bottom: 5px;
  }
  &__carousel-wrapper{
    position: relative;
  }
  &__prevBtn{
    width: 40px;
    height: 40px;
    background: url("../../../assets/carousel/arrow_left.svg") center no-repeat;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }
  &__carousel{
    margin: 20px 0;
    display: flex;
    overflow: hidden;
    transition: margin-left 1s;
  }
  &__logo{
    width: 200px;
    height: 100px;
    margin: 0 30px;
   }
  &__nextBtn{
    width: 40px;
    height: 40px;
    background: url("../../../assets/carousel/arrow_right.svg") center no-repeat;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }
}
.VueCarousel-pagination {
  display: none!important;
}
.VueCarousel-dot-container{
  display: none;
}
</style>
