<template>
  <div>
    <section class="hero">
      <div class="container">
        <div class="hero-content pb-5 text-center">
          <h3 class="hearo-heading">Items</h3>
        </div>
      </div>
    </section>
    <div class="container">

      <div class="row flex">
        <div class="col-12">
          <header class="product-grid-header">
            <div class="mb-3 mr-3">
              <div class="form-group">
                <input type="text" class="form-control">
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
        await store.dispatch('items/list/init')
      }
      catch(e) {
        error({ statusCode: 500 });
      }
    },

    components: {
      Item
    },

    computed: {

      ...mapGetters('items/list', ['items'])

    }


  }

</script>

<style scoped>

  .flex{
    display: flex;
    flex-wrap: wrap;
  }

</style>

