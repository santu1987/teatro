<!-- Fin Header -->
    <div id="js_up" class="boton-subir">
      <i class="fa fa-arrow-up" aria-hidden="true" style="display: block;"></i>
    </div>
    <input type="hidden" name="sin_preloader" id="sin_preloader" value="0">

    <input type="hidden" name="id_idioma" id="id_idioma" value="<?php if(isset($idioma)){echo $idioma;}?>">
    <?php
   
      $correcto = $this->session->flashdata('tp_login1');
        if ($correcto) 
        {
        ?>
        <input type="text" ng-model="tp_login" name="tp_login" id="tp_login" value="<?=$correcto;?>">

        <?php }
        ?>
    <input type="hidden" name="base_url" id="base_url" value="<?php echo base_url(); ?>">
    <!-- FOOTER -->
        <div id="footer" style="display: none">
            <div class="footer clearfix">
                <div class="container">
                    <div class="row">
                        <div class="col-md-4 col-12">
                            <div class="newsletter clearfix">
                              <div>
                                  <img src="<?=base_url();?>/assets/web/img/logo.png" class="logo-footer">
                              </div>
                              <p class="texto-footer"> {{footer.descripcion}}</p>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-6 col-xs-12">
                            <div class="footerLink">
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-6 col-xs-12">
                            <div class="footerLink">
                             
                            </div>
                        </div>

                        <div class="col-md-2 col-sm-6 col-xs-12">
                            <div class="footerLink">
                                <h5>{{btn.pagos}}</h5>
                                <ul class="list-inline">
                                    <li>
                                      <a href="{{base_url}}{{url.menu3}}">
                                        <i class="fa fa-paypal"></i><span style="margin-left: 5px">Paypal</span>
                                      </a> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-2 col-sm-6 col-xs-12">
                            <div class="footerLink">
                                <h5>{{menu.menu5}}</h5>
                                <ul class="list-unstyled">
                                    <li><a href="mailto:{{footer.correo}}">
                                        <span class="email-zugzug-footer">Hola@tutetatro.com</span></a>
                                    </li>
                                </ul>
                                <ul class="list-inline">
                                    <li><a href="" target="_blank"><i class="fa fa-facebook"></i></a></li>
                                    <li><a href="" target="_blank"><i class="fa fa-instagram"></i></a></li>
                                    <li><a href="" target="_blank"><i class="fa fa-twitter"></i></a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!-- COPY RIGHT -->
            <div class="copyRight clearfix">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12 col-12">
                                <p class="text-center">2020 © Tu Teatro.com Todos los derechos reservados. Política de Privacidad | Términos y Condiciones
                                    
                                </p>
                                <div class="col-sm-12">
                                </div>
                            </div>
                            <div class="col-md-5 col-12">
                                <ul class="list-inline">
                                </ul>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
    
</body>
<input type="hidden" name="base_url" id="base_url" value="<?php echo base_url(); ?>">
        <script src="<?=base_url();?>assets/web/plugins/jquery/jquery.min.js"></script>
        <script src="<?=base_url();?>assets/web/plugins/jquery/jquery-migrate-3.0.0.min.js"></script>
        <script src="<?=base_url();?>assets/web/js/custom.js"></script>
        <!-- -->
        <script src="<?=base_url();?>assets/web/plugins/zoom-master/jquery-zoom.js"></script>
        <!-- -->
        <script src="<?=base_url();?>assets/web/plugins/jquery-ui/jquery-ui.js"></script>
        <script src="<?=base_url();?>assets/web/plugins/bootstrap/js/popper.min.js"></script>
        <script src="<?=base_url();?>assets/web/plugins/bootstrap/js/bootstrap.min.js"></script>
        <script src="<?=base_url();?>assets/web/plugins/wow/wow.min.js"></script>
        <script src="<?=base_url();?>assets/web/plugins/carrousel/carrousel.js"></script>     
        <script src="<?=base_url();?>assets/web/plugins/rs-plugin/js/jquery.themepunch.tools.min.js"></script>
        <script src="<?=base_url();?>assets/web/plugins/rs-plugin/js/jquery.themepunch.revolution.min.js"></script>
        <script src="<?=base_url();?>assets/web/plugins/slick/slick.js"></script>
        <script src="<?=base_url();?>assets/web/plugins/fancybox/jquery.fancybox.min.js"></script>
        <script src="<?=base_url();?>assets/web/plugins/iziToast/js/iziToast.js"></script>
        <script src="<?=base_url();?>assets/web/plugins/prismjs/prism.js"></script>
        <script src="<?=base_url();?>assets/web/plugins/selectbox/jquery.selectbox-0.1.3.min.js"></script>
        <script src="<?=base_url();?>assets/web/plugins/countdown/jquery.syotimer.js"></script>
        <script src="<?=base_url();?>assets/web/plugins/velocity/velocity.min.js"></script>
    <!-- JS -->
    <script src="<?=base_url();?>assets/web/plugins/dzsparallaxer/dzsparallaxer.js"></script>
    <script src="<?=base_url();?>assets/web/plugins/dzsparallaxer/dzsscroller/scroller.js"></script>
    <script src="<?=base_url();?>assets/web/plugins/dzsparallaxer/advancedscroller/plugin.js"></script>
   
    <script src="<?=base_url();?>assets/web/js/fbasic.js"></script>
    <!-- 
    <script src="<?=base_url();?>assets/web/js/owl.carousel.min.js"></script>
    -->
    <!--
    <!--Core Angular JS -->
    <script type="text/javascript"  src="<?=base_url();?>assets/web/js/angular/angular.min.js"></script>
    <script type="text/javascript"  src="<?=base_url();?>assets/web/js/angular/angular-route.js"></script>
    <script type="text/javascript"  src="<?=base_url();?>assets/web/js/angular/angular-sanitize.min.js"></script>
    <script type="text/javascript"  src="<?=base_url();?>assets/web/js/angular/app.js"></script>
    <script type="text/javascript"  src="<?=base_url();?>assets/web/js/angular/directivas/directives.js"></script>
    <script type="text/javascript"  src="<?=base_url();?>assets/web/js/angular/servicios/services.js"></script>
    <!--Controladores Ng -->
    
    <script type="text/javascript"  src="<?=base_url();?>assets/web/js/angular/controladores/inicioController.js"></script>
    <script type="text/javascript"  src="<?=base_url();?>assets/web/js/angular/controladores/MainController.js"></script>
     <script type="text/javascript"  src="<?=base_url();?>assets/web/js/angular/controladores/obrasController.js"></script>
    <!--
    <script type="text/javascript"  src="<?=base_url();?>assets/web/js/angular/controladores/nosotrosController.js"></script>
    <script type="text/javascript"  src="<?=base_url();?>assets/web/js/angular/controladores/noticiasController.js"></script>
    <script type="text/javascript"  src="<?=base_url();?>assets/web/js/angular/controladores/noticiasDetallesController.js"></script>
    <script type="text/javascript"  src="<?=base_url();?>assets/web/js/angular/controladores/contactanosController.js"></script>
    <script type="text/javascript"  src="<?=base_url();?>assets/web/js/angular/controladores/productosController.js"></script>
    <script type="text/javascript"  src="<?=base_url();?>assets/web/js/angular/controladores/productoDetallesController.js"></script>
    <script type="text/javascript"  src="<?=base_url();?>assets/web/js/angular/controladores/carritoController.js"></script>
    <script type="text/javascript"  src="<?=base_url();?>assets/web/js/angular/controladores/orderController.js"></script>
    <script type="text/javascript"  src="<?=base_url();?>assets/web/js/angular/controladores/orderUsuarioController.js"></script>
    <script type="text/javascript"  src="<?=base_url();?>assets/web/js/angular/controladores/checkoutController.js"></script>
    <script type="text/javascript"  src="<?=base_url();?>assets/web/js/angular/controladores/confirmAccountController.js"></script>
    <script type="text/javascript"  src="<?=base_url();?>assets/web/js/angular/controladores/redirectAccountController.js"></script>
    <script type="text/javascript"  src="<?=base_url();?>assets/web/js/angular/controladores/recoveryPasswordController.js"></script>
    <script type="text/javascript"  src="<?=base_url();?>assets/web/js/angular/controladores/privacyController.js"></script>
    <script type="text/javascript"  src="<?=base_url();?>assets/web/js/angular/controladores/termsController.js"></script>
    -->
    
    <!-- -->
</html>
