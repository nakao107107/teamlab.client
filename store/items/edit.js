export const state = () => ({

  /*
  検索結果
  */
  item: {},


})

export const getters = {

  item   : (state) => state.item

}

export const mutations = {

  initState(state)
  {

    state.item = {};

  },

  setItem(state, payload) {

    state.item = payload

  }
}

export const actions = {

  /*
  初回表示用
  */
  async init({ dispatch, commit }, id)
  {
    commit('initState')
    await dispatch('get', id)
  },

  /*
  検索を実行する
  */
  async get({ state, commit }, id)
  {

    const {headers, data, error} = await this.$resource().get(`/items/${id}`)

    // if(data && data.error) {
    //   throw new ResourceError(data.error.code, data.error.message, data.error.detail)
    // }
    // else if(error){
    //   throw new ApplicationError()
    // }

    commit('setItem', data)
  },

  /*
  変更の保存
  */
  async saveAttribute({ state, commit }, payload){

    const {headers, data, error} = await this.$resource().put(`/items/${state.item.id}`, payload)
    commit('setItem', data)
  },

  /*
  削除
  */
  async deleteAttribute({ state, commit }){

    const {headers, data, error} = await this.$resource().delete(`/items/${state.item.id}`)

  }


}


