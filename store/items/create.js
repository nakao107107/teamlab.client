export const actions = {

  /*
  検索を実行する
  */
  async createAttribute({ state, commit }, payload)
  {

    const {headers, data, error} = await this.$resource().post('/items', payload)

    // if(data && data.error) {
    //   throw new ResourceError(data.error.code, data.error.message, data.error.detail)
    // }
    // else if(error){
    //   throw new ApplicationError()
    // }
  }

}


