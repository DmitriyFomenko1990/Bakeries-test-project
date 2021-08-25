<template>
  <footer class="footer__wrapper">
    <div class="footer__content">
      <div class="footer__settings">
        <div class="footer__social">
          <button class="footer__first-social-logo footer__social-btn"></button>
          <button class="footer__second-social-logo footer__social-btn"></button>
        </div>
        <h4 class="footer__settings-title">Countries</h4>
        <div class="footer__countries">
          <button class="footer__first-country footer__flag"></button>
          <button class="footer__second-country footer__flag"></button>
        </div>
        <h4 class="footer__settings-title">Language</h4>
        <div class="footer__languages">
          <button class="footer__languageBtn" v-bind:class="{footer__languageBtn_active: !isEnglish}"
              v-on:click="setLanguage(false)">NO</button>
          <span class="footer__separator">|</span>
          <button class="footer__languageBtn" v-bind:class="{footer__languageBtn_active: isEnglish}"
              v-on:click="setLanguage(true)">EN</button>
        </div>
      </div>
      <div class="footer__nav">
        <h3 class="footer__nav-title">Customer service</h3>
        <ul class="footer__list">
          <li class="footer__list-item" v-for="(service, index) in $data.customerService" :key="index">{{ service }}</li>
        </ul>
      </div>
      <div class="footer__nav">
        <h3 class="footer__nav-title">Information</h3>
        <ul class="footer__list">
          <li class="footer__list-item" v-for="(info, index) in $data.informations" :key="index">{{ info }}</li>
        </ul>
      </div>
      <div class="footer__nav">
        <h3 class="footer__nav-title">Inspiration</h3>
        <ul class="footer__list">
          <li class="footer__list-item" v-for="(inspiration, index) in $data.inspirations" :key="index">{{ inspiration }}</li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data: () => {
    return {
      customerService: ['FAQ', 'Terms of use', 'Privacy policy', 'Contact us'],
      informations: ['How it works', 'About Cake it easy', 'For companies', 'Send cakes to multiple locations', 'Cake calendar'],
      inspirations: ['Birthday cake', 'Cake with image or logo', 'Confirmation cake', 'Baptism cake', 'Glutenfree cake']
    }
  },
  methods: {
    setLanguage: function (payload) {
      this.$store.commit('setLanguage', payload)
    }
  },
  computed: {
    isEnglish () {
      return this.$store.state.isEnglish
    }
  }
}
</script>

<style scoped lang="scss">
  .footer {
    &__wrapper{
      flex-shrink: 0;
      background-color: #f3f3f3;
      padding: 20px 200px;
    }
    &__content{
      display: flex;
      justify-content: space-between;
    }
    &__settings{
      width: 70px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &__social{
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
      padding: 0 6px;
    }
    &__social-btn{
      position: relative;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      border: 1px solid #000;
      &:after {
        content: "";
        position: absolute;
        width: 16px;
        height: 16px;
        left: 4px;
        top: 4px;
      }
    }
    &__first-social-logo{
      &:after {
        background: url("../assets/social/first-social1.svg")  center no-repeat;
      }
    }
    &__second-social-logo{
      &:after {
        background: url("../assets/social/second-social2.svg")  center no-repeat;
      }
    }
    &__settings-title{
      margin-bottom: 8px;
      font-size: 10px;
    }
    &__countries{
      display: flex;
      justify-content: space-between;
      margin-bottom: 15px;
    }
    &__flag{
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    &__first-country{
      background:  url("../assets/flags/first-flag.svg")  center no-repeat;
    }
    &__second-country{
      background:  url("../assets/flags/second-flag.svg")  center no-repeat;
    }
    &__languages{
      display: flex;
      justify-content: space-between;
      padding: 0 5px;
    }
    &__languageBtn{
      color: #a6a6a6;
      &_active{
        color:#000000;
      }
    }
    &____separator{
      color: #a6a6a6;
    }
    &__nav{
      text-align: left;
    }
    &__nav-title{
      font-size: 12px;
      font-weight: 600;
      margin-bottom: 12px;
    }
    &__list-item{
      margin-bottom: 10px;
      font-weight: 400;
      font-size: 10px;
      color: #a6a6a6;
      &:last-child{
        margin-bottom: 0;
      }
    }
  }
</style>
