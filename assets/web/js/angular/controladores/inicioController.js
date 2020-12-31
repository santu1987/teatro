angular.module("teatroApp")
	.controller("inicioController", function ($scope, $http, $window, $compile, $location) {
		//Bloque de metodos
		$scope.base_url = $("#base_url").val();
	});