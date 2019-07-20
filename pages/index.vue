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
          <div class="col-xl-4 col-sm-6 m-0">
            <div class="product">
              <div class="product-image">
                <img src="https://d19m59y37dris4.cloudfront.net/sell/1-2-5/img/product/serrah-galos-494312-unsplash.95dae512.jpg"
                     alt="product image"
                     class="img-fluid">
              </div>
              <div class="py-2">
                <h3 class="h6 text-uppercase mb-1">item1</h3>
                <span class="text-muted">400円</span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6">
            <div class="product">
              <div class="product-image">
                <img src="https://d19m59y37dris4.cloudfront.net/sell/1-2-5/img/product/serrah-galos-494312-unsplash.95dae512.jpg"
                     alt="product image"
                     class="img-fluid">
              </div>
              <div class="py-2">
                <h3 class="h6 text-uppercase mb-1">item1</h3>
                <span class="text-muted">400円</span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6">
            <div class="product">
              <div class="product-image">
                <img src="https://d19m59y37dris4.cloudfront.net/sell/1-2-5/img/product/serrah-galos-494312-unsplash.95dae512.jpg"
                     alt="product image"
                     class="img-fluid">
              </div>
              <div class="py-2">
                <h3 class="h6 text-uppercase mb-1">item1</h3>
                <span class="text-muted">400円</span>
              </div>
            </div>
          </div>
          <div class="col-xl-4 col-sm-6">
            <div class="product">
              <div class="product-image">
                <img src="https://d19m59y37dris4.cloudfront.net/sell/1-2-5/img/product/serrah-galos-494312-unsplash.95dae512.jpg"
                     alt="product image"
                     class="img-fluid">
              </div>
              <div class="py-2">
                <h3 class="h6 text-uppercase mb-1">item1</h3>
                <span class="text-muted">400円</span>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {


  }

</script>

<style scoped>

</style>

