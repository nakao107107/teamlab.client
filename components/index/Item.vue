<template>
  <!--ここからcomponent化して繰り返し-->
  <div class="col-xl-3 col-lg-4 col-sm-6">
    <div class="product">
      <div class="product-image">
        <img :src="item.images[0].url"
             alt="product image"
             class="img-fluid">
        <div class="product-hover-overlay">
          <a :href="`/${item.id}/edit`" class="product-hover-overlay-link"></a>
        </div>
      </div>
      <div class="py-2">
        <h3 class="h6 text-uppercase mb-1">{{item.name}}</h3>
        <span class="text-muted">{{item.price}}円</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

    props: ['item']


  }
</script>

<style scoped>

</style>
