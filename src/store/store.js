import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    counter: 0
  },
  mutations: {
    INCREMENT (state) {
      state.counter ++
    },
    DECREMENT (state) {
      state.counter --
    }
  },
  strict: true
})

export default store
