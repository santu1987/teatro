<script type="text/javascript">
  if (window.location.hash && window.location.hash == '#_=_') {
    window.location.hash = '';
  } else
  if (window.location.hash && window.location.hash == '#') {
    window.location.hash = '';
  } else
  if (window.location.hash && window.location.hash == '/#') {
    window.location.hash = '';
  }
</script>



  <body class="body-wrapper version1 loaded1" ng-controller="inicioController">
   

    <div id="preloader_zougzoug" class="" data-loading>
      <div class="loading-spiner">
        <!--Servidor -->
        <!-- Local: -->
        <div class="" style="margin: 0 auto;display: flex;">
          <div id="loader-container"
            style="background-image:url(<?=base_url();?>assets/web/img/logo.png);background-position:center;background-repeat:no-repeat;">
            <div class="loader"></div>
            <div>
              <img src="<?=base_url();?>/assets/web/img/30.gif" class="img-responsive"
                style="margin: 0 auto;display: flex;">
            </div>
            <div style="clear:both"></div>
          </div>
        </div>
      </div>
    </div>
    <!-- Inicio de main-wrapper -->
    <div id="header_menu" class="main-wrapper" style="display: none">

      <!-- HEADER -->
      <div class="header clearfix" ng-controlller="inicioController">

        <!-- TOPBAR -->
        <div class="topBar topBar-ini">
          <div class="container2">
            <div class="row">
              <div class="col-5 col-lg-5 col-md-6 col-sm-6 col-xs-6 d-md-block redes-nav">
                <ul class="list-inline">
                  <li id="nav-facebook"><a href="" target="_blank"><i
                        class="fa fa-facebook"></i></a></li>
                  <li id="nav-instagram"><a href="" target="_blank"><i
                        class="fa fa-instagram"></i></a></li>
                  <li id="nav-twitter"><a href="" target="_blank"><i class="fa fa-twitter"></i></a>
                  </li>
                  <li>
                    <a href="mailto:{{footer.correo}}">
                      <span class="barra-zugzug">|</span>
                      <i class="fa fa-envelope-o margen-correo" aria-hidden="true" ></i>
                      <span class="email-zugzug">hola@tuteatro.com</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col-7 col-lg-7 col-md-6 col-sm-6 col-xs-6  p-right4 p-peque0">
                <ul class="list-inline float-right top-right p-right4">
                  <li class="account-login"><span>
                     
                      <a data-toggle="modal" data-target="#defaultSize" class="iniciar-sesion"
                        ng-click="currentTab = 'login_email';vaciarDatos();">{{menu.menu_iniciar}}
                      </a>

                    </span>
                  </li>
                  <li class="">
                    <!--<a href="index.html#"><i class="fa fa-search"></i></a>-->
                    <ul class="dropdown-menu dropdown-menu-right">
                      <li>
                        <span class="input-group">
                          <input type="text" class="form-control" placeholder="Search…" aria-describedby="basic-addon2">
                          <button type="submit" class="input-group-addon">Submit</button>
                        </span>
                      </li>
                    </ul>
                  </li>
                  
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- NAVBAR -->
        <nav class="navbar navbar-main navbar-default navbar-expand-md" role="navigation">
          <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->

            <a class="navbar-brand" href="{{base_url}}{{url.menu1}}">
              <img src="<?=base_url();?>/assets/web/img/logo.png" class="logo-zugzug">
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target=".navbar-ex1-collapse"
              aria-controls="navbar-ex1-collapse" aria-expanded="false" aria-label="Toggle navigation">
              <i class="fa fa-bars" aria-hidden="true"></i>

            </button>


            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse navbar-ex1-collapse">
              <ul class="nav navbar-nav ml-auto">
                
              </ul>
            </div><!-- /.navbar-collapse -->
           
          </div>
        </nav>
      </div>
      <!-- Fin del header -->