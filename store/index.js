import Vue from 'vue'
import Vuex from 'vuex'
import navBar from './modules/navBar'

Vue.use(Vuex)

const store = () => new Vuex.Store({
    modules: {
        navBar
    }
})

export default store