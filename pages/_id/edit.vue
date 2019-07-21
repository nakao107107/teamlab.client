<template>
  <div class="container">
    <img src="https://d19m59y37dris4.cloudfront.net/sell/1-2-5/img/product/serrah-galos-494312-unsplash.95dae512.jpg"
         alt="item-img"
         class="img-fluid">
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
      <button class="btn btn-info">商品情報を更新</button>
      <button class="btn btn-danger">商品を削除</button>
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

    }


  }


</script>

<style scoped>

</style>
