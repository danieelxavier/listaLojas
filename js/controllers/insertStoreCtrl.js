angular.module("insertStore").controller("insertStoreCtrl", function ($scope, $http, $window){
	$scope.app = "Nova Loja"

	$scope.ip = "http://192.168.0.142:3000"
	$scope.result = ""


	$scope.locs = [
		{nome: "ICOMP", lat: "-3.088655", lng: "-59.963048"},
		{nome: "AMAZONAS SHOPPING", lat: "-3.093597", lng: "-60.022813"}
	];



	$scope.adicionar = function (contato){
		// $scope.contatos.push(angular.copy(contato));

		$http({
	        method : "GET",
	        url : $scope.ip + "/api/search/insert-store?id=" + contato.id + "&name=" + contato.nome + "&lat=" + contato.loc.lat + "&lng=" + contato.loc.lng + "&radius=-1",
	        headers: {
	        	'Content-Type': 'application/json'
	        }
	    }).then(function mySuccess(response) {
	    	$scope.result = response.data.result
	        console.log($scope.result);
	    }, function myError(response) {
	        console.log(response.statusText);
	    });


		delete $scope.contato;
	};

	$scope.goBack = function (){

		$window.location.href = 'index.html'
	}


})