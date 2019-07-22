<template>
  <div>
    <section class="hero">
      <div class="container">
        <div class="hero-content pb-5 text-center">
          <h3 class="hearo-heading">商品情報作成</h3>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="form-group">
        <label for="image" class="form-label">商品画像url</label>
        <input id="image" type="text" class="form-control"
               placeholder="商品画像のurlを入力（現状アップロードはできません)"
               v-model="input.image_url">
      </div>
      <div class="form-group">
        <label for="image" class="form-label">店舗</label>
        <select class="custom-select w-auto border-0" v-model="input.store_id">
          <option v-for="store in stores" :key="store.id" :value="store.id">{{store.name}}</option>
        </select>
      </div>
      <div class="form-group">
        <label for="name" class="form-label">商品名</label>
        <input id="name" type="text" class="form-control"
               placeholder="商品名を入力"
               v-model="input.name">
      </div>
      <div class="form-group">
        <label for="desc" class="form-label">商品説明</label>
        <input id="desc" type="text" class="form-control"
               placeholder="商品の説明を入力"
               v-model="input.description">
      </div>
      <div class="form-group">
        <label for="price" class="form-label">値段</label>
        <input id="price" type="text" class="form-control"
               placeholder="商品の価格を入力"
               v-model="input.price">
      </div>
      <div>
        <button class="btn btn-info" @click="createAttribute">商品情報を作成</button>
      </div>
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
      this.input.store_id = 1
    },

    computed: {
      ...mapGetters('store', ['stores'])
    },

    methods: {

      async createAttribute(){

        try {
          await this.$store.dispatch('items/create/createAttribute', this.input)
          this.$notify({
            type: 'success',
            title: '商品情報作成',
            text: '商品情報の作成に成功しました'
          });
          this.$router.push('/')
        }
        catch(e) {
          this.$notify({
            type: 'error',
            title: '商品情報作成失敗',
            text: '商品情報の作成に失敗しました'
          });
          throw e
        }

      }

    }


  }


</script>

<style></style>
