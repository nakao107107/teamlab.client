<template>
  <div class="container">
    <img :src="item.images[0].url"
         alt="item-img"
         class="img-fluid mb-3">
    <div class="form-group">
      <label for="name" class="form-label">商品名</label>
      <input id="name" type="text" class="form-control" v-model="input.name">
    </div>
    <div class="form-group">
      <label for="desc" class="form-label">商品説明</label>
      <input id="desc" type="text" class="form-control" v-model="input.desc">
    </div>
    <div class="form-group">
      <label for="price" class="form-label">値段</label>
      <input id="price" type="text" class="form-control" v-model="input.price">
    </div>
    <div>
      <button class="btn btn-info" @click="saveAttribute">商品情報を更新</button>
      <button class="btn btn-danger" @click="deleteAttribute">商品を削除</button>
    </div>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex'

  export default {

    data(){
      return {
        input: {}
      }
    },

    created(){
      // this.accountingだとcategoryでエラーが出るのでidがあるかで判別
      this.input = {

        name:  this.item.name,
        desc:  this.item.description,
        price: this.item.price

      }
    },

    /*
    初回データの読み込み
    */
    async fetch ({ params, error, store })

    {
      try {
        await store.dispatch('items/edit/init', params.id)
      }
      catch(e) {
        error({ statusCode: 500 });
      }
    },



    computed: {

      ...mapGetters('items/edit', ['item'])

    },

    methods: {

      async saveAttribute(){

        try {
          await this.$store.dispatch('items/edit/saveAttribute', this.input)

          this.$notify({
            type: 'success',
            title: '商品情報更新',
            text: '商品情報の更新に成功しました'
          });
        }
        catch(e) {
          throw e
        }

      },

      async deleteAttribute({redirect}){

        try {
          await this.$store.dispatch('items/edit/deleteAttribute')
          this.$notify({
            type: 'success',
            title: '商品情報更新',
            text: '商品情報の更新に成功しました'
          });
          this.$router.push('/')
        }
        catch(e) {
          this.$notify({
            type: 'error',
            title: '商品情報更新失敗',
            text: '商品情報の更新に失敗しました'
          });
          throw e
        }

      }

    }


  }


</script>

<style scoped>

</style>
