<template>
      <div class="info__wrapper">
        <div class="info__block">
          <img class="info__img" src="@/assets/info/info1.jpg" />
          <h4 class="info__title">Hand made <br/>by local bakeries</h4>
        </div>
        <div class="info__block">
          <img class="info__img" src="@/assets/info/info2.jpg" />
          <h4 class="info__title">Same price as from bakery <br/>- but simpler</h4>
        </div>
        <div class="info__block">
          <img class="info__img" src="@/assets/info/info3.jpg" />
          <h4 class="info__title">Send cakes <br/>anywhere</h4>
        </div>
      </div>
</template>

<script>

export default {
  name: 'Information'
}
</script>

<style scoped lang="scss">
.info {
  &__wrapper{
    margin: 50px auto;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 426px){
      margin: 0;
      flex-direction: column;
    }
     }
  &__block{
    width: 210px;
    @media screen and (max-width: 426px){
      margin: 20px auto;
    }
  }
  &__img{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 20px;
  }
  &__title{
    font-weight: 600;
    line-height: 23px;
  }
  }
</style>
