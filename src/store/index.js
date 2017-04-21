import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import home from './modules/home'
Vue.use(Vuex)
export default new Vuex.Store({
  actions,
  getters,
  modules: {
  	home
  }
})

