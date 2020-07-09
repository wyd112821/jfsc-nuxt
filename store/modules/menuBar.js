const state = () => ({
  height: 0
})

const mutations = {
  setHeight(state, val) {
    state.height = val
  }
}

const actions = {
  setHeight: ({
    commit
  }, height) => {
    commit('setHeight', height)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
