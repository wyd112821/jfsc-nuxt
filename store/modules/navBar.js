const state = () => {
    title: ''
}

const mutations = {
    setTitle(state, val) {
        state.title = val
    }
}

const actions = {
    setTitle: ({commit}, title) => {
        commit('setTitle', title)
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}