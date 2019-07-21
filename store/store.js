export const state = () => ({

  /*
  検索結果
  */
  stores: [],


})

export const getters = {

  stores   : (state) => state.stores

}

export const mutations = {

  initState(state)
  {

    state.stores = [];

  },

  setStores(state, payload) {

    state.stores = payload

  }
}

export const actions = {


  async fetch({ dispatch, commit })
  {
    commit('initState')
    const {headers, data, error} = await this.$resource().get(`/stores`)
    commit('setStores', data)

  },


}
