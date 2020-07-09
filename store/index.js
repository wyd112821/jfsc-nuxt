import Vue from 'vue'
import Vuex from 'vuex'
import menuBar from './modules/menuBar'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  modules: {
    menuBar,
  }
})

export default store
