<template>
  <div class="form-group">
    <input type="text" class="form-control" placeholder="商品名で検索" @input="changeKeyword">
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {

    methods: {
      async changeKeyword(){

        this.$store.dispatch('items/list/search',
          {
            keyword: event.target.value,
            store_id: this.selected_store.id
          })

      }
    },

    computed: {
      ...mapGetters('store', ['selected_store'])
    }

  }
</script>

<style scoped>

</style>
