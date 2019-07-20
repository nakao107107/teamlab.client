<template>
  <div>
    <!--ここからcomponent化して繰り返し-->
    <div class="col-xl-4 col-sm-6 m-0">
      <div class="product">
        <div class="product-image">
          <img src="https://d19m59y37dris4.cloudfront.net/sell/1-2-5/img/product/serrah-galos-494312-unsplash.95dae512.jpg"
               alt="product image"
               class="img-fluid">
        </div>
        <div class="py-2">
          <h3 class="h6 text-uppercase mb-1">{{item.name}}</h3>
          <span class="text-muted">{{item.price}}円</span>
        </div>
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
