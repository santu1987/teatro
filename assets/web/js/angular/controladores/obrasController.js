angular.module("teatroApp")
	.controller("obrasController", function($scope,$sce,$http,$compile,$location,obrasHomeFactory){
		//Cuerpo declaraciones
		
		$scope.base_url = $("#base_url").val();
		$scope.identificador = "";
		$scope.disponible =
		//------------------------------------------------------------
		
		$scope.arreglo_id = []

		$scope.consultar_obras = function(){
			$scope.cod_obra = $("#cod_obra").val()
    		obrasHomeFactory.asignar_valores($scope.cod_obra,$scope.base_url);
			obrasHomeFactory.cargar_obras_filtro(function(data){
				$scope.obras = data[0];
				console.log($scope.obras);
			});
		}

		$scope.comprar = function(){
			if($scope.identificador){
				$scope.registrar_compra();
			}else{
				alert("debe ingresar el identificador")
			}
		}

		$scope.registrar_compra = function(){
			$http.post($scope.base_url+"/WebInicio/registrarCompra",{
					'cod_obra': $scope.cod_obra,
					'identificador': $scope.identificador,
					'disponible':$scope.obras.disponible
				}).success(function(data, estatus, headers, config){
					console.log(data);
					$scope.mensaje  = data;
					if($scope.mensaje.mensaje){
						if($scope.mensaje.mensaje=="no_existe"){
							mensaje_alerta("#campo_mensaje","El identificador del usuario no está registrado!","alert-danger");
						}else{
							mensaje_alerta("#campo_mensaje","Gracias por tu tiempo, tu boleto ha sido adquirido, revisa tu email!","alert-success");
							$scope.obras.disponible = $scope.obras.disponible-1;
							if($scope.obras.disponible==0){
								setTimeout(function(){
									 window.location=$scope.base_url;
								},1000)
							}
						}
					} 
					else{
						mensaje_alerta("#campo_mensaje_","Ocurrió un error inesperado","alert-danger");

					}
					//desbloquear_pantalla("#campo_mensaje_clientes","#nombres_clientes,#email_clientes,#telefono_clientes,#mensaje_clientes")
				}).error(function(data,estatus){
					showErrorMessage("Ocurrió un error inesperado:"+data);
				})
		}
		//--Cuerpo de eventos	
		$scope.consultar_obras();
		
		//--------------------------------------
	});
