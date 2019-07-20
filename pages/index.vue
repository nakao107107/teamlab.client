<template>
  <div>
    <section class="hero">
      <div class="container">
        <div class="hero-content pb-5 text-center">
          <h1 class="hearo-heading">Items</h1>
        </div>
      </div>
    </section>
    <div class="container">

      <div class="row">
        <div class="products-grid col-xl-9 col-lg-8 order-lg-2">
          <header class="product-grid-header">
            <div class="mb-3 mr-3">
              showing
              <strong>1-12</strong>
              of
              <strong>158</strong>
              products
            </div>
            <div class="mb-3 mr-3">
              <div class="">
                <input type="search" class="search-area-input">
                <button class="search-area-button"></button>
              </div>
            </div>
            <div class="mb-3 mr-3">
              <span class="d-inline-block mr-1">store</span>
              <select class="custom-select w-auto border-0" name="" id="">
                <option value="">store1</option>
                <option value="">store2</option>
                <option value="">store3</option>
                <option value="">store4</option>
              </select>
            </div>
          </header>
          <!--ここからcomponent化して繰り返し-->
          <item v-for="item in items" :key="item.id" :item="item"/>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex'
  import Item from '~/components/index/Item.vue'

  export default {

    /*
    初回データの読み込み
    */
    async fetch ({ error, store })
    {
      try {
        await store.dispatch('items/init')
      }
      catch(e) {
        error({ statusCode: 500 });
      }
    },

    components: {
      Item
    },

    computed: {

      ...mapGetters('items', ['items'])

    }


  }

</script>

<style scoped>

</style>

