angular.module("teatroApp")
//---------------------------------------------------------------------------------------
//--Bloque de servicios

//--Bloque de factorias

.factory("obrasHomeFactory",['$http',function($http){
	return{
	//-------------------
		asignar_valores : function (id,url){
			if(id!="")
				cod_obra = id;
			else
				cod_obra = "";
			if(url!="")
				base_url = url;
			else
				base_url = "";
			//---
		},
		cargar_obras_filtro: function(callback){
			$http.post(base_url+"WebInicio/consultarObrasFiltros", {cod_obra:cod_obra}).success(callback);
		}
	//-------------------
	}

}])


//--Servicio para compartir datos de mensajes iniciales
.service('serverDataMensajes',[function(){
	var puente = [];
	this.puenteData = function(arreglo){
		puente = arreglo;
		return puente;
	}
	this.obtener_arreglo = function(){
		return puente;
	}
	this.limpiar_arreglo_servicio = function (){
		puente = [];
		return puente;
	}
}])
.service('upload', ["$http", "$q", function ($http, $q)
{
	this.uploadFile = function(file, id_empleo,nombre_archivo)
	{
		var deferred = $q.defer();
		var formData = new FormData();

		formData.append("id_empleo", id_empleo);
		formData.append("file", file);
		/*formData.append("categoria", categoria);
		formData.append("file", file);*/
		formData.append("nombre_archivo",nombre_archivo);
		return $http.post("./controladores/archivosController.php", formData, {
			headers: {
				"Content-type": undefined
			},
			transformRequest: angular.identity
		})
		.success(function(res)
		{
			deferred.resolve(res);
		})
		.error(function(msg, code)
		{
			deferred.reject(msg);
		})
		return deferred.promise;
	}
}]);

