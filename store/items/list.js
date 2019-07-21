export const state = () => ({

  /*
  検索結果
  */
  items: [],


})

export const getters = {

  items   : (state) => state.items

}

export const mutations = {

  initState(state)
  {

    state.items = [];

  },

  setItems(state, payload) {

    state.items = payload

  }
}

export const actions = {

  /*
  初回表示用
  */
  async init({ dispatch, commit })
  {
    commit('initState')
    await dispatch('search')
  },

  /*
  検索を実行する
  */
  async search({ state, commit }, query)
  {

    const {headers, data, error} = await this.$resource().get(`/items`)

    // if(data && data.error) {
    //   throw new ResourceError(data.error.code, data.error.message, data.error.detail)
    // }
    // else if(error){
    //   throw new ApplicationError()
    // }

    commit('setItems', data)
  },


  async changeStore({commit}, store_id){
    const {headers, data, error} = await this.$resource().get(`/items`, {store_id: store_id})
    commit('setItems', data)
  }

}


