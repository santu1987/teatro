angular.module("teatroApp")
	.controller("MainController", function($scope,$sce,$http,$compile,$location,obrasHomeFactory){
		//Cuerpo declaraciones
		
		$scope.base_url = $("#base_url").val();
		//------------------------------------------------------------
		/*
		*	Bloque obligatorio para todo controlador
		*/
		
		$scope.arreglo_id = []

		//--
		$scope.cargar_home = function(){

			$scope.consultar_obras();

		}		

		$scope.consultar_obras = function(){
		
    		obrasHomeFactory.asignar_valores("",$scope.base_url);
			obrasHomeFactory.cargar_obras_filtro(function(data){
				$scope.obras = data;
				console.log($scope.obras);
			});
		}
		

		
		//--
		$scope.sanitizeMe = function(text) {
		    return $sce.trustAsHtml(text)
		}
		//---Bloque de llamados
		$scope.cargar_home()
		//--------------------------------------
	});
