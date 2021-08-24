import Vue from 'vue'
import Vuex from 'vuex'
import { fetchBakeries } from '../api/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isError: '',
    isEnglish: true,
    bakeries: []
  },
  mutations: {
    setError (state, error) {
      state.isError = error
    },
    setLanguage (state, payload) {
      state.isEnglish = payload
    },
    setBakeries (state, bakeries) {
      state.bakeries = bakeries
    }
  },
  actions: {
    fetchBakeries (context) {
      return fetchBakeries()
        .then(response => {
          context.commit('setBakeries', response)
          console.log(response)
        })
        .catch(error => {
          context.commit('setError', error)
          console.log(error)
        })
    }
  },
  getters: {
    getSources: state => {
      const src = (id) => {
        return `http://api.dev.cakeiteasy.no/api/store/images/${id.toString()}/?size=small_url&compress_type=webp`
      }
      return state.bakeries.reduce((prev, bakery) => {
        if (bakery?.image?.id) {
          return [...prev, src(bakery.image.id)]
        } else {
          return [...prev]
        }
      }, [])
    }
  },
  modules: {
  }
})
