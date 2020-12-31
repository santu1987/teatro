<div id="cuerpoNoticias" ng-controller="obrasController">
	<!--PARALLAX-->
	<div id="prlx_como_funciona" class="dzsparallaxer auto-init height-is-based-on-content use-loading">
		<!-- stylesheets -->
		<div class="super_parallax divimage dzsparallaxer--target w-100 g-bg-size-cover g-bg-img-hero g-bg-cover g-bg-black-opacity-0_6--after" style="height: 130%; background-image: url(<?=base_url();?>assets/web/img/parallax/parallax_secundario.jpg);"></div>

		<div class="container g-pt-100 g-pb-70">
		  <div class="row">
		    <div class="col-sm-6 col-lg-6 align-items-end mt-auto g-mb-50 texto_parallax">
		      <div class="text-center">
		        <h1 class="d-inline-block g-color-secondary g-font-weight-800 g-font-size-26 mb-0 g-z-index-1" style="color:#fff">Obras </h1>
		      </div>
		    </div>
		  </div>
		</div>
	</div>
	<!-- -->
	<!-- MAIN CONTENT SECTION -->
	<section class="mainContent clearfix aboutUsInfo">
        <div class="container">
			<div class="row">
				<div class="col-lg-9 col-md-9 col-sm-12 col-xs-12">
					<div class="card" style="width: 100%;">
						<img class="card-img-top  fadeInLeft wow"  ng-src="{{base_url}}{{obras.img}}" alt="Card image cap">
						<div class="card-body fadeInLeft wow">
							<h3 class="card-title">{{obras.nombre}}</h3>
							<span class="sub-notice col-xs-12">  
								<i class="fa fa-hashtag info-news" aria-hidden="true"></i>
				    			<label class="pr-1 parrafos">COD:{{obras.cod_obra}}</label> 

				    	    </span>
				    	    <span class="sub-notice col-xs-12">  
								<i class="fa fa-calendar info-news" aria-hidden="true"></i>
				    			<label class="pr-1 parrafos">{{obras.fecha_obra}}</label> 
				    	    </span>
				    	    <span class="sub-notice col-xs-12">  
								<i class="fa fa fa-users info-news" aria-hidden="true"></i>
				    			<label class="pr-1 parrafos">Aforo:{{obras.aforo}}</label> 
				    	    </span>
				    	    <span class="sub-notice col-xs-12">  
								<i class="fa fa-user info-news" aria-hidden="true"></i>
				    			<label class="pr-1 parrafos">Disponible:{{obras.disponible}}</label> 
				    	    </span>
							<p class="card-text parrafos">{{obras.descripcion}}</p>
							
						</div>
					</div>
					<div style="clear:both;"></div>
				</div>
				<div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 fadeInRight wow cuerpo-noticias-productos">
					<div class="card" style="width: 100%;">
						<div class="card-header letra titulo_publicidad">
						Datos de usuario
						</div>
						  <div class="card-body">
						  	<input type="" id="identificador" name="identificador" class="form-control" placeholder="Ingrese el identificador" ng-model="identificador" maxlength="100">
						  </div>
						  <div  class="btn btn-primary btn-rounded centrar-div btn-about" ng-click="comprar()">Comprar</div>
						  <div class="col-lg-12">
								<div  id="campo_mensaje" name="campo_mensaje" ></div>
						  </div>
							<div style="clear: both"></div>
					</div>
					<div style="clear:both;"></div>
				</div>
			</div>
 			<div class="container">
				
				<input type="hidden" id="cod_obra" name="cod_obra" value="<?=$cod_obra?>">
			</div>	
        </div>
    </section>
</div>