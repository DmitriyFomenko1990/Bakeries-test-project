<template>
      <div class="bakeries__wrapper">
        <button class="bakeries__prevBtn" @click="previousSlide"/>
        <button class="bakeries__nextBtn" @click="nextSlide"/>
        <div class="bakeries__carousel" :style="{'margin-left': '-' + (260 * slideCounter) + 'px'}">
          <img v-for="source in sources" class="bakeries__logo" v-bind:src="source" :key="source"  alt="logo"/>
        </div>
      </div>
</template>

<script>

export default {
  name: 'Bakeries',
  data () {
    return { slideCounter: 0 }
  },
  methods: {
    previousSlide () {
      if (this.slideCounter > 0) {
        --this.slideCounter
        console.log(this.slideCounter)
      }
    },
    nextSlide () {
      if (this.slideCounter < this.sources.length) {
        ++this.slideCounter
        console.log(this.slideCounter)
      }
    }
  },
  computed: {
    sources () {
      return this.$store.getters.getSources
    }
  }
}
</script>

<style scoped lang="scss">
.bakeries {
  &__wrapper{
    margin: 30px 0;
    max-width: 100%;
    padding: 0 50px;
    position: relative;
    overflow: hidden;
     }
  &__carousel{
    display: flex;
    overflow: hidden;
    transition: margin-left 1s;
  }
  &__logo{
    width: 200px;
    height: 100px;
    margin: 0 30px;
   }
  &__prevBtn{
    width: 40px;
    height: 40px;
    background: url("../../../assets/carousel/arrow_left.svg") center no-repeat;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  &__nextBtn{
    width: 40px;
    height: 40px;
    background: url("../../../assets/carousel/arrow_right.svg") center no-repeat;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  }
</style>
