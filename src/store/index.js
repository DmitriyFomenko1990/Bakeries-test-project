import Vue from 'vue';
import Vuex from 'vuex';
import { fetchBakeries, fetchLocations } from '../api/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isError: '',
    isEnglish: true,
    bakeries: [],
    locations: []
  },
  mutations: {
    setError (state, error) {
      state.isError = error;
    },
    setLanguage (state, payload) {
      state.isEnglish = payload;
    },
    setBakeries (state, bakeries) {
      state.bakeries = bakeries;
    },
    setLocations (state, locations) {
      state.locations = locations;
    }
  },
  actions: {
    fetchBakeries (context) {
      return fetchBakeries()
        .then(response => {
          context.commit('setBakeries', response);
        })
        .catch(error => {
          context.commit('setError', error);
        })
    },
    fetchLocations (context) {
      return fetchLocations()
        .then(response => {
          context.commit('setLocations', response);
        })
        .catch(error => {
          context.commit('setError', error);
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
    },
    getLocationsNames: state => {
      const namesArray = state.locations.map(location => location.name);
      const locationsArrays = [];
      const size = namesArray.length / 5;
      let remainder = namesArray.length % 5;

      while (namesArray.length > 0) {
        if (remainder > 0) {
          locationsArrays.push(namesArray.splice(0, size + 1));
          remainder--;
        } else {
          locationsArrays.push(namesArray.splice(0, size));
        }
      }
      return locationsArrays
    }
  }
});
