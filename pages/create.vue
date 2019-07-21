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
        <input id="image" type="text" class="form-control" v-model="input.image_url">
      </div>
      <div class="form-group">
        <label for="name" class="form-label">商品名</label>
        <input id="name" type="text" class="form-control" v-model="input.name">
      </div>
      <div class="form-group">
        <label for="desc" class="form-label">商品説明</label>
        <input id="desc" type="text" class="form-control" v-model="input.description">
      </div>
      <div class="form-group">
        <label for="price" class="form-label">値段</label>
        <input id="price" type="text" class="form-control" v-model="input.price">
      </div>
      <div>
        <button class="btn btn-info" @click="createAttribute">商品情報を作成</button>
      </div>
    </div>
  </div>
</template>

<script>

  export default {

    data(){
      return {
        input: {}
      }
    },

    methods: {

      async createAttribute(){

        await this.$store.dispatch('items/create/createAttribute', this.input)

      }

    }


  }


</script>

<style></style>
