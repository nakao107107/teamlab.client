export const state = () => ({

  /*
  検索結果
  */
  stores:         [],
  selected_store: {}


})

export const getters = {

  stores:         (state) => state.stores,
  selected_store: (state) => state.selected_store

}

export const mutations = {

  initState(state)
  {

    state.stores = []
    state.selected_store = {}

  },

  setStores(state, payload) {

    state.stores = payload

  },

  setSelectedStores(state, payload) {

    state.selected_store = payload

  }
}

export const actions = {


  async fetch({ dispatch, commit }) {
    commit('initState')
    const {headers, data, error} = await this.$resource().get(`/stores`)
    commit('setStores', data)
    commit('setSelectedStores', data[0])

  },

  selectStore({state, commit}, id){
    commit('setSelectedStores', state.stores[id])
  }

}
