<template>
  <div>
    <header class="header mb-4">
      <!-- Navbar-->
      <nav class="navbar navbar-expand-lg navbar-sticky navbar-airy navbar-dark bg-dark bg-fixed-dark">
        <div class="container-fluid">
          <!-- Navbar Header  --><a href="/" class="navbar-brand">
          <h6 class="text-uppercase">Teamlab intern</h6>
        </a>
          <button type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation" class="navbar-toggler navbar-toggler-right">
            <i class="fa fa-bars"></i>
          </button>
          <!-- Navbar Collapse -->
          <div id="navbarCollapse" class="collapse navbar-collapse">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item dropdown">
                <a href="/create" class="nav-link ">
                  <i class="fa fa-home"/>
                  商品情報作成
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <!-- /Navbar -->

    </header>
    <nuxt />
    <notifications width="400"/>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.2/js/bootstrap.min.js" integrity="sha384-o+RDsa0aLu++PJvFqy8fFScvbHFLtbvScb8AjopnFD+iEQ7wo/CG0xlczd+2O/em" crossorigin="anonymous"></script>
  </div>
</template>

<style>
/*html {*/
  /*font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',*/
    /*Roboto, 'Helvetica Neue', Arial, sans-serif;*/
  /*font-size: 16px;*/
  /*word-spacing: 1px;*/
  /*-ms-text-size-adjust: 100%;*/
  /*-webkit-text-size-adjust: 100%;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*box-sizing: border-box;*/
/*}*/

/**,*/
/**:before,*/
/**:after {*/
  /*box-sizing: border-box;*/
  /*margin: 0;*/
/*}*/
</style>
