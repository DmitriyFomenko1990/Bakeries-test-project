import Vue from 'vue'
import Vuex from 'vuex'
import { fetchBakeries } from '../api/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isError: '',
    language: 'EN',
    bakeries: []
  },
  mutations: {
    setError (state, error) {
      state.isError = error
    },
    setLanguage (state, language) {
      state.language = language
    },
    setBakeries (state, bakeries) {
      state.bakeries = bakeries
    }
  },
  actions: {
    fetchBakeries ({ context }) {
      return fetchBakeries()
        .then(response => {
          context.commit('setBakeries', response)
        })
        .catch(error => {
          context.commit('setError', error)
        })
    }
  },
  modules: {
  }
})
