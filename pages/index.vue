<template>
  <div>
    <section class="hero">
      <div class="container">
        <div class="hero-content pb-5 text-center">
          <h3 class="hearo-heading">商品一覧</h3>
        </div>
      </div>
    </section>
    <div class="container">
      <div class="row flex">
        <div class="col-12">
          <header class="product-grid-header">
            <div class="mb-3 mr-3 col-sm-8 col-xs-12">
              <search/>
            </div>
            <div class="mb-3 mr-3">
              <span class="d-inline-block mr-1">store</span>
              <select class="custom-select w-auto border-0" @change="changeStore">
                <option v-for="(v, k) in stores" :key="v.id" :value="k">{{v.name}}</option>
              </select>
            </div>
          </header>
          <!--ここからcomponent化して繰り返し-->
          <p v-if="items.length == 0" class="text-muted">検索条件に当てはまる商品はありません</p>
          <item v-for="item in items" :key="item.id" :item="item"/>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import { mapGetters } from 'vuex'
  import Item from '~/components/index/item.vue'
  import Search from '~/components/index/search.vue'

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
      Item,
      Search
    },

    computed: {

      ...mapGetters('items/list', ['items']),
      ...mapGetters('store', ['stores', 'selected_store'])

    },

    methods: {

      async changeStore(){

        await this.$store.dispatch('store/selectStore', event.target.value)
        await this.$store.dispatch('items/list/changeStore', this.stores[event.target.value].id)


      }

    }



  }

</script>

<style scoped>

  .flex{
    display: flex;
    flex-wrap: wrap;
  }

</style>

