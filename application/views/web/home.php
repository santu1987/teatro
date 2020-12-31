 
<div ng-controller="MainController">
     
    <!-- seccion productos -->
    <!--PARALLAX-->
    <div id="prlx_como_funciona" class="dzsparallaxer auto-init height-is-based-on-content use-loading">
      <!-- stylesheets -->
        <div class="super_parallax divimage dzsparallaxer--target w-100 g-bg-size-cover g-bg-img-hero g-bg-cover g-bg-black-opacity-0_6--after" style="height: 130%; background-image: url(<?=base_url();?>assets/web/img/parallax/parallax_principal.jpg);"></div>

        <div class="container g-pt-100 g-pb-70">
          <div class="row">
            <div class="col-sm-6 col-lg-6 align-items-end mt-auto g-mb-50 texto_parallax">
              <div class="text-center">
                <h1 class="d-inline-block g-color-secondary g-font-weight-800 g-font-size-26 mb-0 g-z-index-1" style="color:#fff">Bienvenido a Tu Teatro.com</h1>
              </div>
            </div>
          </div>
        </div>
    </div>
    <section class="mainContent clearfix">
      <div class="container">
        <div class="page-header">
           <h4>Obras</h4>
        </div>
        <div class="row latestArticles fadeInRight wow featuredCollection animated animated" >
          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12" ng-repeat="obra in obras track by $index">
            <div class="thumbnail">
              <div class="imageWrapper">
                  <a href="{{base_url}}ver_obra/{{obra.cod_obra}}">
                    <img ng-src="<?=base_url();?>{{obra.img}}" alt="article-image" style="height: 233px;">
                  </a>
                  <div class="date-holder">
                    <p>{{obra.dias}}</p>
                    <span>{{obra.mes}}</span>
                  </div>
                  <div class="masking">
                      <a href="{{base_url}}ver_obra/{{obra.cod_obra}}" class="btn viewBtn">Comprar</a>
                  </div>
              </div>  
              <h5><a href="{{base_url}}ver_obra/{{obra.cod_obra}}">{{obra.nombre}}</a></h5>
              
              <div class="caption2">
                <p>{{obra.descripcion}}</p>

                <a href="{{base_url}}ver_obra/{{obra.cod_obra}}" target="_self" style="display: flex; margin: 0 auto;">
                    <button type="button" class="btn btn-primary btn-rounded centrar-div btn-about">Comprar</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
       
</div>


