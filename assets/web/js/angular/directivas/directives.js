angular.module("teatroApp")
//--Para el preloader
    .directive('footerPage', footerPage)
    //.directive('otrosArticulos', otrosArticulos)
    .directive('uploaderModel', ["$parse", function ($parse) {
        return {
            restrict: 'A',
            link: function (scope, iElement, iAttrs) 
            {
                iElement.on("change", function(e)
                {
                    $parse(iAttrs.uploaderModel).assign(scope, iElement[0].files[0]);
                });
            }
        };
    }])
    .directive('loading',   ['$http','$location' ,function ($http,$location)
    {
        return {
            restrict: 'A',
            link: function (scope, elm, attrs)
            {
                scope.isLoading = function () {
                    return $http.pendingRequests.length > 0;
                };
               
                scope.$watch(scope.isLoading, function (v)
                {
                    //console.log(elm)
                    sin_preloader = $("#sin_preloader").val()
                    if(sin_preloader=="0"){
                        //-----------------------------------
                        if(v){
                            elm.show();
                        }else{
                          
                                elm.hide();
                                $("#header_menu,#footer").css({"display":"block"})
                                /*setTimeout(function(){
                                  slider_init();
                                },500)*/
                        }
                        //-----------------------------------
                    }else{
                             $("#sin_preloader").val("0")
                    }
                });
            }
        };

    }]).directive('otrasNoticias',function(){
        return {
            restrict: 'E',
            templateUrl: 'assets/web/templates/otras_noticias.html',
            scope:true,
            link: function (scope, element) {
                if (scope.$last) {
                }
            }
        };
    })
    //--
    function footerPage($compile){
        //--
        return {
                    restrict: 'E',
                    transclude: true,
                    scope:{
                           direccion:'@'
                    },
                    templateUrl: "./site_media/templates/footerPage.html",
                    controller:"direccionController",
                    replace:true
        }
        //--
    }
    //--

    //--
    /*function otrosArticulos($compile){
        //--
        return {
                    restrict: 'E',
                    transclude: true,
                    scope:{
                        noticias_objeto:'@'
                    },
                    templateUrl: "./site_media/templates/otrosArticulos.html",
                    controller:"noticiasController",
                    replace:true
        }
        //--
    }*/
    //--
//--------------------------------------