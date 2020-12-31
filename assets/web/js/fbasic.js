//Cuerpo de funciones...
//
//funciones de validaciones
function valida(e,s,i,l)
{
  tecla = (document.all) ? e.keyCode : e.which;
  if (tecla==8 || tecla==0 || tecla==13) return true;
  //Exepcion barras y barras invertidas
  if(tecla == 47 || tecla == 92) return false;
  if (s.value.length>=l) return false;

  if (i==0) patron = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz]/;  // 0 Solo acepta letras
  if (i==1) patron = /[0123456789,.%]/;     // 1 Solo acepta n�meros
  if (i==2) patron = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789]/;      // 2 Acepta n�meros y letras
  if (i==3) patron = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789��������������\s]/;
  if (i==4) patron=  /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz��������������\s]/;
  if (i==5) patron=  /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@._-]/; // Formato Correo Electronico
  if (i==6) patron=  /[ABCDEFabcdef0123456789]/;
  if (i==7) patron = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789��������������()@:;_\-.,/\s]/;
  if (i==8) patron = /[01]/;
  if (i==9) patron = /[GJV0123456789]/; //Formato de RIF
  if (i==10)patron = /[0123456789]/;
  if (i==11)patron = /[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_]/;
  if (i==12)patron = /[gjveGJVE0123456789]/;  //RIF
  if (i==13) patron = /[0123456789,]/;
  if (i==14) patron=  /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._-]/; // Formato Nick Correo Electronico
  if (i==15) patron=  /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@.]/; // Formato direccion manual Correo Electronico
  if (i==16) patron = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzáéíóúÁÉÍÓÚ\w]/;  // 0 Solo acepta letras y comas
  if (i==17) patron = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\s,.]/; // Acepta n�meros, letras, espacios ,.
  if (i==18) patron = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz\wáéíóúÁÉÍÓÚñÑ0123456789.,;()+-_=#*?¿{}$!\s]/; // Acepta n�meros, letras, espacios ,.
  if (i==19) patron=  /[A-Za-zñÑ'áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛÑñäëïöüÄËÏÖÜ\s\t]/;
  if (i==20) patron = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*.,;%()+-_=?¿{}$!]/; // Acepta clave para el ldap
  if (i==21) patron = /[+0123456789.()]/;
  if (i==22) patron=  /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789;_\-.,\s]/; // Formato de url de red social
  te = String.fromCharCode(tecla);
  return patron.test(te);
}
function valida2(s,i,l)
{
  if (i==0) patron = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz]/;  // 0 Solo acepta letras
  if (i==1) patron = /[0123456789,.valida2%]/;     // 1 Solo acepta n�meros
  if (i==2) patron = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789]/;      // 2 Acepta n�meros y letras
  if (i==3) patron = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789��������������\s]/;
  if (i==4) patron=  /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz��������������\s]/;
  if (i==5) patron=  /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@._-]/;
  if (i==6) patron=  /[ABCDEFabcdef0123456789]/;
  if (i==7) patron = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789��������������()@:;_\-.,/\s]/;
  if (i==8) patron = /[01]/;
  if (i==9) patron = /[GJV0123456789]/;
  if (i==10)patron = /[0123456789]/;
  if (i==11)patron = /[abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_]/;
  if (i==12)patron = /[gjveGJVE0123456789]/;  //RIF
  if (i==13) patron = /[0123456789,]/;
  if (i==14) patron=  /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789._-]/; // Formato Nick Correo Electronico
  if (i==15) patron=  /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@.]/; // Formato direccion manual Correo Electronico
  if (i==16) patron = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz]/;  // 0 Solo acepta letras y comas
  if (i==17) patron = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\s,.]/; // 2 Acepta n�meros, letras, espacios ,.
  if (i==18) patron = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz\wáéíóúÁÉÍÓÚñÑ0123456789.,;()+-_=#*?¿{}$!\s]/; // Acepta n�meros, letras, espacios ,.
  if (i==19) patron=  /[A-Za-zñÑ'áéíóúÁÉÍÓÚàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛÑñäëïöüÄËÏÖÜ\s]/;
  if (i==20) patron = /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*.,;%()+-_=?¿{}$!]/; // Acepta clave para el ldap
  if (i==21) patron = /[+0123456789.()]/;
  if (i==22) patron=  /[ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789;_\-.,/\s]/; // Formato de url red social
  r="";
  ll=0;
  for (i=0;i<s.value.length;i++)
  {
    if (patron.test(s.value.charAt(i)))
    {
      r=r+s.value.charAt(i);
      ll++;
      if (ll==l) break;
    }
  }

  return s.value=r;
}
//

//--
function correo(campo,campo_mensaje)
{
    console.log(campo_mensaje)

  var exr = /^\w+[a-z_0-9\-\.]+@\w+[0-9a-z\-\.]+\.[a-z]{2,4}$/i;
    if(!(exr.test(campo.value)))
    {
      campo.value = ""
      if ($("#id_idioma").val()==2)
        mensaje_alerta("#"+campo_mensaje,"You must enter valid email direction", "alert-danger");
      else
        mensaje_alerta("#"+campo_mensaje,"Debe ingresar una dirección de correo v&aacute;lida", "alert-danger");

    }
}
//--

//Mensaje de validacion
function mensaje_alerta(campo, mensaje, tipo_alerta)
{
    $(campo).removeClass("alert alert-danger").removeClass("alert alert-success").removeClass("alert alert-info").removeClass("alert alert-primary").removeClass("alert alert-warning");
    $(campo).addClass("alert "+tipo_alerta);
    $(campo).html(mensaje);
    setTimeout(function()
    {
      $(campo).fadeOut(1400);
    },10000);
    $(campo).show();
}

//--
function ir_div(div){
    $('html,body').animate({
        scrollTop: $(div).offset().top
    }, 2000);
}
//--
function subir_top(){
  $('body, html').animate({
      scrollTop: '0px'
    }, 1000)
}
//-
function activar_parallax_inicio(){
  //subir_top();
  setTimeout(function(){
    dzsprx_init('#prlx_como_funciona', '{ direction: "normal", mode_scroll:"fromtop"}');
  },1500);
}
//
function cambiar_menu(){
  alert("aqui!");
   var scroll_start = 0;
   //var startchange = $('#quienes_somos');
   //var offset = startchange.offset();
   $(document).scroll(function() {
      scroll_start = $(this).scrollTop();

      if(screen.width>1024){
      //------------------------
        if(scroll_start > 20) {
            //$("#menu_ppal").addClass("nav_normal").removeClass("nav_top");
            $("#menu_ppal").addClass("nav_normal").removeClass("nav_top");
            $("#barra_top").addClass("invisible").removeClass("visible");
            $("#barra_medium").addClass("invisible").removeClass("visible");
            $("#logo_top").addClass("visible").removeClass("invisible");
            $(".menu-nav").addClass("item-menu2").removeClass("item-menu");
            $(".redes-soc").addClass("menu-redes2").removeClass("menu-redes");
            $("#header_menu").addClass("fixed-top");
            $("#cuerpo_menu_ppal").addClass("color-header");
            //$("#menu_ppal,.collapse").addClass("color-header");
            //$(".div-triangulo").addClass("triangulo-header");
            $("#triangulo").removeClass("div-triangulo").addClass("sin-triangulo");
            //cambiar_clase_btn_principal(1);
        }else {
            $("#menu_ppal").addClass("nav_top").removeClass("nav_normal");
            $("#barra_top").addClass("visible").removeClass("invisible");
            $("#barra_medium").removeClass("invisible").addClass("visible");
            $("#logo_top").addClass("invisible").removeClass("visible");
            $(".menu-nav").addClass("item-menu").removeClass("item-menu2");
            $(".redes-soc").addClass("menu-redes").removeClass("menu-redes2");
            $("#header_menu").removeClass("fixed-top");
            $("#cuerpo_menu_ppal").removeClass("color-header");
            //$("#menu_ppal,.collapse").removeClass("color-header");
            //$(".div-triangulo").removeClass("triangulo-header");
            $("#triangulo").addClass("div-triangulo").removeClass("sin-triangulo");
        }
      //------------------------  
      }else{
          $(".redes-soc").addClass("menu-redes").removeClass("menu-redes2");
          if(scroll_start > 20) {
              $("#header_menu").addClass("fixed-top");
              //$("#cuerpo_menu_ppal").addClass("color-header");
          }else{
              $("#header_menu").removeClass("fixed-top");
              //$("#cuerpo_menu_ppal").removeClass("color-header");
          }  
       //$("#logo_web").html(logo);
      }
   });
   //--
}
///
function activar_wow(){
  //--OBLIGATORIO PARA CORRER WOW-----------------------------------------------
    var wow = new WOW(
      {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       false,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
            alert("wow!");
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        }
      }
    );
    wow.init();
  //---
}

////////
var directionsDisplay,
directionsService,
map;
//--
function initialize_standar(lat,long,number){
  if((lat!=null)&&(long!=null)){
    //------------------------------------------------------------
    var latitud = parseFloat(lat)
    var longitud = parseFloat(long)
    var directionsService = new google.maps.DirectionsService();
    directionsDisplay = new google.maps.DirectionsRenderer();
    var myLatlng1 = new google.maps.LatLng(latitud,longitud);
    var mapOptions = {
      center: { lat: latitud, lng: longitud},
            zoom: 18,
            zoomControl: false,
            scaleControl: false,
            scrollwheel: false,
            disableDoubleClickZoom: true,
            draggable: false
    }
    var map = new google.maps.Map(document.getElementById("map_canvas"+number), mapOptions);


    directionsDisplay.setMap(map);
    var image = './site_media/images/logo2.ico';
    var marker = new google.maps.Marker({
        position: myLatlng1,
        map: map,
        title: 'ITSS',
        icon: image
    });

    google.maps.event.addDomListener(window, 'resize', function() {
        map.panTo(myLatlng1);
    });
    //------------------------------------------------------------
  }
}
///////
//--------------------------
function init_slider(){
  //----------------------------------------
      var j = true;
      var i = "#owl-main";

      function a() {
          if (!j) {
              $(i + " .caption .fadeIn-1, " + i + " .caption .fadeIn-2, " + i + " .caption .fadeIn-3").stop().delay(800).animate({
                  opacity: 0
              }, {
                  duration: 400,
                  easing: "easeInCubic"
              })
          } else {
              $(i + " .caption .fadeIn-1, " + i + " .caption .fadeIn-2, " + i + " .caption .fadeIn-3").css({
                  opacity: 0
              })
          }
      }

      function c() {
          if (!j) {
              $(i + " .caption .fadeInDown-1, " + i + " .caption .fadeInDown-2, " + i + " .caption .fadeInDown-3").stop().delay(800).animate({
                  opacity: 0,
                  top: "-15px"
              }, {
                  duration: 400,
                  easing: "easeInCubic"
              })
          } else {
              $(i + " .caption .fadeInDown-1, " + i + " .caption .fadeInDown-2, " + i + " .caption .fadeInDown-3").css({
                  opacity: 0,
                  top: "-15px"
              })
          }
      }

      function l() {
          if (!j) {
              $(i + " .caption .fadeInUp-1, " + i + " .caption .fadeInUp-2, " + i + " .caption .fadeInUp-3").stop().delay(800).animate({
                  opacity: 0,
                  top: "15px"
              }, {
                  duration: 400,
                  easing: "easeInCubic"
              })
          } else {
              $(i + " .caption .fadeInUp-1, " + i + " .caption .fadeInUp-2, " + i + " .caption .fadeInUp-3").css({
                  opacity: 0,
                  top: "15px"
              })
          }
      }

      function b() {
          if (!j) {
              $(i + " .caption .fadeInLeft-1, " + i + " .caption .fadeInLeft-2, " + i + " .caption .fadeInLeft-3").stop().delay(800).animate({
                  opacity: 0,
                  left: "15px"
              }, {
                  duration: 400,
                  easing: "easeInCubic"
              })
          } else {
              $(i + " .caption .fadeInLeft-1, " + i + " .caption .fadeInLeft-2, " + i + " .caption .fadeInLeft-3").css({
                  opacity: 0,
                  left: "15px"
              })
          }
      }

      function e() {
          if (!j) {
              $(i + " .caption .fadeInRight-1, " + i + " .caption .fadeInRight-2, " + i + " .caption .fadeInRight-3").stop().delay(800).animate({
                  opacity: 0,
                  left: "-15px"
              }, {
                  duration: 400,
                  easing: "easeInCubic"
              })
          } else {
              $(i + " .caption .fadeInRight-1, " + i + " .caption .fadeInRight-2, " + i + " .caption .fadeInRight-3").css({
                  opacity: 0,
                  left: "-15px"
              })
          }
      }

      function f() {
          $(i + " .active .caption .fadeIn-1").stop().delay(500).animate({
              opacity: 1
          }, {
              duration: 800,
              easing: "easeOutCubic"
          });
          $(i + " .active .caption .fadeIn-2").stop().delay(700).animate({
              opacity: 1
          }, {
              duration: 800,
              easing: "easeOutCubic"
          });
          $(i + " .active .caption .fadeIn-3").stop().delay(1000).animate({
              opacity: 1
          }, {
              duration: 800,
              easing: "easeOutCubic"
          })
      }

      function g() {
          $(i + " .active .caption .fadeInDown-1").stop().delay(500).animate({
              opacity: 1,
              top: "0"
          }, {
              duration: 800,
              easing: "easeOutCubic"
          });
          $(i + " .active .caption .fadeInDown-2").stop().delay(700).animate({
              opacity: 1,
              top: "0"
          }, {
              duration: 800,
              easing: "easeOutCubic"
          });
          $(i + " .active .caption .fadeInDown-3").stop().delay(1000).animate({
              opacity: 1,
              top: "0"
          }, {
              duration: 800,
              easing: "easeOutCubic"
          })
      }

      function h() {
          $(i + " .active .caption .fadeInUp-1").stop().delay(500).animate({
              opacity: 1,
              top: "0"
          }, {
              duration: 800,
              easing: "easeOutCubic"
          });
          $(i + " .active .caption .fadeInUp-2").stop().delay(700).animate({
              opacity: 1,
              top: "0"
          }, {
              duration: 800,
              easing: "easeOutCubic"
          });
          $(i + " .active .caption .fadeInUp-3").stop().delay(1000).animate({
              opacity: 1,
              top: "0"
          }, {
              duration: 800,
              easing: "easeOutCubic"
          })
      }

      function k() {
          $(i + " .active .caption .fadeInLeft-1").stop().delay(500).animate({
              opacity: 1,
              left: "0"
          }, {
              duration: 800,
              easing: "easeOutCubic"
          });
          $(i + " .active .caption .fadeInLeft-2").stop().delay(700).animate({
              opacity: 1,
              left: "0"
          }, {
              duration: 800,
              easing: "easeOutCubic"
          });
          $(i + " .active .caption .fadeInLeft-3").stop().delay(1000).animate({
              opacity: 1,
              left: "0"
          }, {
              duration: 800,
              easing: "easeOutCubic"
          })
      }

      function d() {
          $(i + " .active .caption .fadeInRight-1").stop().delay(500).animate({
              opacity: 1,
              left: "0"
          }, {
              duration: 800,
              easing: "easeOutCubic"
          });
          $(i + " .active .caption .fadeInRight-2").stop().delay(700).animate({
              opacity: 1,
              left: "0"
          }, {
              duration: 800,
              easing: "easeOutCubic"
          });
          $(i + " .active .caption .fadeInRight-3").stop().delay(1000).animate({
              opacity: 1,
              left: "0"
          }, {
              duration: 800,
              easing: "easeOutCubic"
          })
      }
      $(i).owlCarousel({
          autoPlay: 5000,
          stopOnHover: true,
          navigation: true,
          pagination: true,
          singleItem: true,
          addClassActive: true,
          transitionStyle: "fade",
          navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"],
          afterInit: function() {
              f();
              g();
              h();
              k();
              d()
          },
          afterMove: function() {
              f();
              g();
              h();
              k();
              d()
          },
          afterUpdate: function() {
              f();
              g();
              h();
              k();
              d()
          },
          startDragging: function() {
              j = true
          },
          afterAction: function() {
              a();
              c();
              l();
              b();
              e();
              j = false
          }
      });
      if ($(i).hasClass("owl-one-item")) {
          $(i + ".owl-one-item").data("owlCarousel").destroy()
      }
      $(i + ".owl-one-item").owlCarousel({
          singleItem: true,
          navigation: false,
          pagination: false
      });
      $("#transitionType li a").click(function() {
          $("#transitionType li a").removeClass("active");
          $(this).addClass("active");
          var m = $(this).attr("data-transition-type");
          $(i).data("owlCarousel").transitionTypes(m);
          $(i).trigger("owl.next");
          return false
      });
      $("#owl-testimonials").owlCarousel({
          autoPlay: 5000,
          stopOnHover: true,
          navigation: true,
          pagination: true,
          singleItem: true,
          addClassActive: true,
          autoHeight: true,
          transitionStyle: "fadeInAfterOut",
          navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
      });
      $("#owl-projects").owlCarousel({
          navigation: false,
          autoHeight: true,
          slideSpeed: 300,
          paginationSpeed: 400,
          rewindNav: false,
          singleItem: true,
          navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
      });
      $("#owl-latest-works").owlCarousel({
          autoPlay: 5000,
          stopOnHover: true,
          navigation: true,
          pagination: true,
          rewindNav: true,
          items: 4,
          navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
      });
      $("#owl-videos").owlCarousel({
          autoPlay: 5000,
          stopOnHover: true,
          navigation: true,
          pagination: true,
          rewindNav: true,
          items: 5,
          navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
      });
      $("#owl-audio").owlCarousel({
          autoPlay: 5000,
          stopOnHover: true,
          navigation: true,
          pagination: true,
          rewindNav: true,
          items: 5,
          navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
      });
      $("#owl-popular-posts").owlCarousel({
          autoPlay: 5000,
          stopOnHover: true,
          navigation: true,
          pagination: true,
          rewindNav: true,
          items: 5,
          navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
      });
      $("#owl-related-posts").owlCarousel({
          autoPlay: 5000,
          stopOnHover: true,
          navigation: true,
          pagination: true,
          rewindNav: true,
          items: 2,
          itemsDesktopSmall: [1199, 2],
          itemsTablet: [977, 2],
          navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
      });
      $("#owl-featured-works").owlCarousel({
          autoPlay: 5000,
          stopOnHover: true,
          navigation: true,
          pagination: true,
          rewindNav: true,
          singleItem: true,
          transitionStyle: "goDown",
          navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
      });
      $("#owl-work-samples").owlCarousel({
          autoPlay: 5000,
          stopOnHover: true,
          navigation: true,
          pagination: true,
          rewindNav: true,
          items: 3,
          itemsDesktopSmall: [1199, 3],
          itemsTablet: [977, 2],
          navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
      });
      $("#owl-work-samples-big").owlCarousel({
          autoPlay: 5000,
          stopOnHover: true,
          navigation: true,
          pagination: true,
          rewindNav: true,
          singleItem: true,
          transitionStyle: "fadeUp",
          navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
      });
      $("#owl-work, [id*='owl-work-modal']").owlCarousel({
          autoPlay: 5000,
          slideSpeed: 200,
          paginationSpeed: 600,
          rewindSpeed: 800,
          stopOnHover: true,
          navigation: true,
          pagination: true,
          rewindNav: true,
          singleItem: true,
          autoHeight: true,
          navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
      });
      $("#owl-office").owlCarousel({
          autoPlay: 5000,
          slideSpeed: 200,
          paginationSpeed: 600,
          rewindSpeed: 800,
          stopOnHover: true,
          navigation: true,
          pagination: true,
          rewindNav: true,
          singleItem: true,
          autoHeight: true,
          transitionStyle: "fade",
          navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
      });
      $("#owl-clients").owlCarousel({
          autoPlay: 5000,
          stopOnHover: true,
          rewindNav: true,
          items: 4,
          itemsDesktopSmall: [1199, 4],
          itemsTablet: [977, 3],
          navigation: true,
          pagination: true,
          navigationText: ["<i class='icon-left-open-mini'></i>", "<i class='icon-right-open-mini'></i>"]
      });
      $(".slider-next").click(function() {
          owl.trigger("owl.next")
      });
      $(".slider-prev").click(function() {
          owl.trigger("owl.prev")
      })
  //-----------------------------------------------------------------------------
}
//---------------------------
function init_portfolio(){
   var c = $(".items");
        c.imagesLoaded(function() {
            c.isotope({
                percentPosition: true,
                itemSelector: ".item",
                // masonry: {
                //     columnWidth: '50%'
                // }
            })
        });
        var a;

        function b() {
            c.isotope({
                itemSelector: ".item"
            });
            c.isotope('reloadItems');
        }
        b();
        $(window).resize(function() {
            clearTimeout(a);
            a = setTimeout(b, 100)
        });
        $("a.panel-toggle.collapsed").click(function() {
            clearTimeout(a);
            a = setTimeout(b, 100)
        });
        $(".portfolio .filter li a").click(function() {
            $(".portfolio .filter li a").removeClass("active");
            $(this).addClass("active");
            var d = $(this).attr("data-filter");
            c.isotope({
                filter: d
            });
            return false
        })
}
//---------------------------
function carga_inicio(){
  
 activar_parallax_inicio()
 activar_wow()

 setTimeout(function(){
    //alert("aqui!");
    //$("#header_menu,#footer").css({"display":"block"})
    $('#carouselExampleCaptions').carousel({interval: 6000});
    $("#div_carousel_0,#slide_0").addClass("active");
    $("#carouselExampleCaptions").removeClass("cargo_carousel"); 
     //--Boton de subir
    $(window).scroll(function(){
        if($(this).scrollTop() > 200){ //condición a cumplirse cuando el usuario aya bajado 301px a más.
          $("#js_up").slideDown(200); //se muestra el botón en 300 mili segundos
        }else{ // si no
          $("#js_up").slideUp(200); //se oculta el botón en 300 mili segundos
        }
    });
    //creamos una función accediendo a la etiqueta i en su evento click
    $("#js_up i").on('click', function (e) { 
        e.preventDefault(); //evita que se ejecute el tag ancla (<a href="#">valor</a>).
        $("body,html").animate({ // aplicamos la función animate a los tags body y html
          scrollTop: 0 //al colocar el valor 0 a scrollTop me volverá a la parte inicial de la página
        },700); //el valor 700 indica que lo ara en 700 mili segundos
        return false; //rompe el bucle
    });
    //--
    //slider_init()
    //init_portfolio();
    //$("#preloader").css({"display":"none"});
  },100);

}
//---------------------------
function mostrar_texto(){
  $("#carousel-caption,#btn-slider").removeClass("invisible").fadeIn("slow");
}
//---------------------------
function validar_logos(){
  //---------------------------------
      if(screen.width<=360){
          $(".logo_inicial").attr({"src":"site_media/images/logo_mapa.png"});
      }else{
          $(".logo_inicial").attr({"src":"site_media/images/logo_ori.png"});
      }
  //---------------------------------
}
function armar_slider(slide){
  
}
function activarSlider(){
  jQuery('#rev_slider_1').show().revolution({
 
    sliderType: 'carousel',
 
    carousel: {
 
        maxVisibleItems: 5,
        space: 10,
        infinity: 'on',
        stretch: 'off',
 
        border_radius: '10px',
        horizontal_align: 'center',
 
        fadeout: 'off',
        vary_fade: 'off',
 
        vary_rotation: 'off',
        maxRotation: 0,
 
        vary_scale: 'off',
        minScale: 50
 
    },
  });
}
/*function slider_init(){
    var j = true;
    var i = "#owl-main";

    function a() {
        if (!j) {
            $(i + " .caption .fadeIn-1, " + i + " .caption .fadeIn-2, " + i + " .caption .fadeIn-3").stop().delay(800).animate({
                opacity: 0
            }, {
                duration: 400,
                easing: "easeInCubic"
            })
        } else {
            $(i + " .caption .fadeIn-1, " + i + " .caption .fadeIn-2, " + i + " .caption .fadeIn-3").css({
                opacity: 0
            })
        }
    }

    function c() {
        if (!j) {
            $(i + " .caption .fadeInDown-1, " + i + " .caption .fadeInDown-2, " + i + " .caption .fadeInDown-3").stop().delay(800).animate({
                opacity: 0,
                top: "-15px"
            }, {
                duration: 400,
                easing: "easeInCubic"
            })
        } else {
            $(i + " .caption .fadeInDown-1, " + i + " .caption .fadeInDown-2, " + i + " .caption .fadeInDown-3").css({
                opacity: 0,
                top: "-15px"
            })
        }
    }

    function l() {
        if (!j) {
            $(i + " .caption .fadeInUp-1, " + i + " .caption .fadeInUp-2, " + i + " .caption .fadeInUp-3").stop().delay(800).animate({
                opacity: 0,
                top: "15px"
            }, {
                duration: 400,
                easing: "easeInCubic"
            })
        } else {
            $(i + " .caption .fadeInUp-1, " + i + " .caption .fadeInUp-2, " + i + " .caption .fadeInUp-3").css({
                opacity: 0,
                top: "15px"
            })
        }
    }

    function b() {
        if (!j) {
            $(i + " .caption .fadeInLeft-1, " + i + " .caption .fadeInLeft-2, " + i + " .caption .fadeInLeft-3").stop().delay(800).animate({
                opacity: 0,
                left: "15px"
            }, {
                duration: 400,
                easing: "easeInCubic"
            })
        } else {
            $(i + " .caption .fadeInLeft-1, " + i + " .caption .fadeInLeft-2, " + i + " .caption .fadeInLeft-3").css({
                opacity: 0,
                left: "15px"
            })
        }
    }

    function e() {
        if (!j) {
            $(i + " .caption .fadeInRight-1, " + i + " .caption .fadeInRight-2, " + i + " .caption .fadeInRight-3").stop().delay(800).animate({
                opacity: 0,
                left: "-15px"
            }, {
                duration: 400,
                easing: "easeInCubic"
            })
        } else {
            $(i + " .caption .fadeInRight-1, " + i + " .caption .fadeInRight-2, " + i + " .caption .fadeInRight-3").css({
                opacity: 0,
                left: "-15px"
            })
        }
    }

    function f() {
        $(i + " .active .caption .fadeIn-1").stop().delay(500).animate({
            opacity: 1
        }, {
            duration: 800,
            easing: "easeOutCubic"
        });
        $(i + " .active .caption .fadeIn-2").stop().delay(700).animate({
            opacity: 1
        }, {
            duration: 800,
            easing: "easeOutCubic"
        });
        $(i + " .active .caption .fadeIn-3").stop().delay(1000).animate({
            opacity: 1
        }, {
            duration: 800,
            easing: "easeOutCubic"
        })
    }

    function g() {
        $(i + " .active .caption .fadeInDown-1").stop().delay(500).animate({
            opacity: 1,
            top: "0"
        }, {
            duration: 800,
            easing: "easeOutCubic"
        });
        $(i + " .active .caption .fadeInDown-2").stop().delay(700).animate({
            opacity: 1,
            top: "0"
        }, {
            duration: 800,
            easing: "easeOutCubic"
        });
        $(i + " .active .caption .fadeInDown-3").stop().delay(1000).animate({
            opacity: 1,
            top: "0"
        }, {
            duration: 800,
            easing: "easeOutCubic"
        })
    }

    function h() {
        $(i + " .active .caption .fadeInUp-1").stop().delay(500).animate({
            opacity: 1,
            top: "0"
        }, {
            duration: 800,
            easing: "easeOutCubic"
        });
        $(i + " .active .caption .fadeInUp-2").stop().delay(700).animate({
            opacity: 1,
            top: "0"
        }, {
            duration: 800,
            easing: "easeOutCubic"
        });
        $(i + " .active .caption .fadeInUp-3").stop().delay(1000).animate({
            opacity: 1,
            top: "0"
        }, {
            duration: 800,
            easing: "easeOutCubic"
        })
    }

    function k() {
        $(i + " .active .caption .fadeInLeft-1").stop().delay(500).animate({
            opacity: 1,
            left: "0"
        }, {
            duration: 800,
            easing: "easeOutCubic"
        });
        $(i + " .active .caption .fadeInLeft-2").stop().delay(700).animate({
            opacity: 1,
            left: "0"
        }, {
            duration: 800,
            easing: "easeOutCubic"
        });
        $(i + " .active .caption .fadeInLeft-3").stop().delay(1000).animate({
            opacity: 1,
            left: "0"
        }, {
            duration: 800,
            easing: "easeOutCubic"
        })
    }

    function d() {
        $(i + " .active .caption .fadeInRight-1").stop().delay(500).animate({
            opacity: 1,
            left: "0"
        }, {
            duration: 800,
            easing: "easeOutCubic"
        });
        $(i + " .active .caption .fadeInRight-2").stop().delay(700).animate({
            opacity: 1,
            left: "0"
        }, {
            duration: 800,
            easing: "easeOutCubic"
        });
        $(i + " .active .caption .fadeInRight-3").stop().delay(1000).animate({
            opacity: 1,
            left: "0"
        }, {
            duration: 800,
            easing: "easeOutCubic"
        })
    }
    $(i).owlCarousel({
        autoPlay: 5000,
        stopOnHover: true,
        navigation: true,
        pagination: true,
        singleItem: true,
        addClassActive: true,
        transitionStyle: "fade",
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        afterInit: function() {
            f();
            g();
            h();
            k();
            d()
        },
        afterMove: function() {
            f();
            g();
            h();
            k();
            d()
        },
        afterUpdate: function() {
            f();
            g();
            h();
            k();
            d()
        },
        startDragging: function() {
            j = true
        },
        afterAction: function() {
            a();
            c();
            l();
            b();
            e();
            j = false
        }
    });
    if ($(i).hasClass("owl-one-item")) {
        $(i + ".owl-one-item").data("owlCarousel").destroy()
    }
    $(i + ".owl-one-item").owlCarousel({
        singleItem: true,
        navigation: false,
        pagination: false
    });
    $("#transitionType li a").click(function() {
        $("#transitionType li a").removeClass("active");
        $(this).addClass("active");
        var m = $(this).attr("data-transition-type");
        $(i).data("owlCarousel").transitionTypes(m);
        $(i).trigger("owl.next");
        return false
    });
    $("#owl-testimonials").owlCarousel({
        autoPlay: 5000,
        stopOnHover: true,
        navigation: true,
        pagination: true,
        singleItem: true,
        addClassActive: true,
        autoHeight: true,
        transitionStyle: "fadeInAfterOut",
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    $("#owl-projects").owlCarousel({
        navigation: false,
        autoHeight: true,
        slideSpeed: 300,
        paginationSpeed: 400,
        rewindNav: false,
        singleItem: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    $("#owl-latest-works").owlCarousel({
        autoPlay: 5000,
        stopOnHover: true,
        navigation: true,
        pagination: true,
        rewindNav: true,
        items: 4,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    $("#owl-videos").owlCarousel({
        autoPlay: 5000,
        stopOnHover: true,
        navigation: true,
        pagination: true,
        rewindNav: true,
        items: 5,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    $("#owl-audio").owlCarousel({
        autoPlay: 5000,
        stopOnHover: true,
        navigation: true,
        pagination: true,
        rewindNav: true,
        items: 5,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    $("#owl-popular-posts").owlCarousel({
        autoPlay: 5000,
        stopOnHover: true,
        navigation: true,
        pagination: true,
        rewindNav: true,
        items: 5,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    $("#owl-related-posts").owlCarousel({
        autoPlay: 5000,
        stopOnHover: true,
        navigation: true,
        pagination: true,
        rewindNav: true,
        items: 2,
        itemsDesktopSmall: [1199, 2],
        itemsTablet: [977, 2],
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    $("#owl-featured-works").owlCarousel({
        autoPlay: 5000,
        stopOnHover: true,
        navigation: true,
        pagination: true,
        rewindNav: true,
        singleItem: true,
        transitionStyle: "goDown",
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    $("#owl-work-samples").owlCarousel({
        autoPlay: 5000,
        stopOnHover: true,
        navigation: true,
        pagination: true,
        rewindNav: true,
        items: 3,
        itemsDesktopSmall: [1199, 3],
        itemsTablet: [977, 2],
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    $("#owl-work-samples-big").owlCarousel({
        autoPlay: 5000,
        stopOnHover: true,
        navigation: true,
        pagination: true,
        rewindNav: true,
        singleItem: true,
        transitionStyle: "fadeUp",
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    $("#owl-work, [id*='owl-work-modal']").owlCarousel({
        autoPlay: 5000,
        slideSpeed: 200,
        paginationSpeed: 600,
        rewindSpeed: 800,
        stopOnHover: true,
        navigation: true,
        pagination: true,
        rewindNav: true,
        singleItem: true,
        autoHeight: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    $("#owl-office").owlCarousel({
        autoPlay: 5000,
        slideSpeed: 200,
        paginationSpeed: 600,
        rewindSpeed: 800,
        stopOnHover: true,
        navigation: true,
        pagination: true,
        rewindNav: true,
        singleItem: true,
        autoHeight: true,
        transitionStyle: "fade",
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    $("#owl-clients").owlCarousel({
        autoPlay: 5000,
        stopOnHover: true,
        rewindNav: true,
        items: 4,
        itemsDesktopSmall: [1199, 4],
        itemsTablet: [977, 3],
        navigation: true,
        pagination: true,
        navigationText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    $(".slider-next").click(function() {
        owl.trigger("owl.next")
    });
    $(".slider-prev").click(function() {
        owl.trigger("owl.prev")
    })
}*/
function number_format(amount, decimals) {   
 amount += ''; // por si pasan un numero en vez de un string
 amount = parseFloat(amount.replace(/[^0-9\.]/g, ''));
 // elimino cualquier cosa que no sea numero o punto 
  decimals = decimals || 0; // por si la variable no fue fue pasada  
  // si no es un numero o es igual a cero retorno el mismo cero 
  if (isNaN(amount) || amount === 0)      
     return parseFloat(0).toFixed(decimals);     
      // si es mayor o menor que cero retorno el valor formateado como numero   
    amount = '' + amount.toFixed(decimals);   
    var amount_parts = amount.split('.'),    
    regexp = /(\d+)(\d{3})/;       
      while (regexp.test(amount_parts[0]))  
      amount_parts[0] = amount_parts[0].replace(regexp, '$1' + ',' + '$2'); 
       return amount_parts.join('.');  
}

function marcarLineaProducto(id,clase){
  $(clase).removeClass("activo_productos");
  $(id).addClass("activo_productos");
}

function limpiarHash(){
  //alert(window.location.hash)
  //alert((window.location.hash === "#/_=_")||(window.location.hash === "#") ||(window.location.hash === "#_=_")||(window.location.hash === "/#"))
  if((window.location.hash === "#/_=_")||(window.location.hash === "#") ||(window.location.hash === "#_=_")||(window.location.hash === "/#")){
      //alert(window.location.hash)
      history.replaceState 
          ? history.replaceState(null, null, window.location.href.split("#")[0])
          : window.location.hash = "";
  }
  //--
  if (location.href.indexOf("#") > -1) {
      location.assign(location.href.replace(/\/?#/, ""));
  }
  //--
  /*if (window.location.hash && window.location.hash == '#_=_') {
    window.location.hash = '';
  }else
  if (window.location.hash && window.location.hash == '#') {
    window.location.hash = '';
  }else
  if (window.location.hash && window.location.hash == '/#') {
    window.location.hash = '';
  }*/
  //--
}
/*
*
*/
function mayus_primera_letra(lsCadena){
    lsCadena = lsCadena .toLowerCase();
    lsCadena = lsCadena .charAt(0).toUpperCase() + lsCadena .slice(1);
    return lsCadena;
}
/*
* Length de objetos
*/
function object_size(obj) {
    var size = 0, key;
    for (key in obj) {
        if (obj.hasOwnProperty(key)) size++;
    }
    return size;
}
/*
* Coloca la bandera segun el idioma
*/
function bandera_idioma(idioma){
  if(idioma==1){
    $("#bandera").attr("src",base_url+"assets/web/img/flags/spain.png").attr("title","Translate to Spanish")
  }else{
      $("#bandera").attr("src",base_url+"assets/web/img/flags/uk.png").attr("title","Traducir a Ingles")
  }
}
/***/
function mostrar_preloader(){
  $("#header_menu,#footer").css({"display":"none"})
  $("#preloader_zougzoug").css({"display":"block"})
}
//--------------------------------------------------------------------
///-Cuerpo llamados..
carga_inicio();