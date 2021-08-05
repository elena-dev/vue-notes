import Vue from 'vue'
import Vuex from 'vuex'
import notes from "./modules/notes";


Vue.use(Vuex)

export default new Vuex.Store({
  namespaced: true,
  modules: {
    notes
  },

  state: {},

  mutations: {},

  actions: {},

  getters: {}
})
