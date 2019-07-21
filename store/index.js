export const actions = {

  /*
  init
  */
  async nuxtServerInit({ dispatch, commit }, { app, req, route, redirect, error }) {



    /*
    店舗情報の取得
    */
    await dispatch('store/fetch');

  }

}
