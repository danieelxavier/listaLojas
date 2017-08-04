angular.module("buscaLojas").controller("buscaLojasCtrl", function ($window, $scope, $http){
	$scope.app = "Busca Lojas"


	$scope.b1 = true
	$scope.b2 = false
	$scope.b3 = false


	$scope.classe1 = "selecionado"
	$scope.classe2 = "negrito"

	$scope.ip = "http://192.168.0.142:3000"
	$scope.url = $scope.ip + "/api/search?q="

	$scope.searchStores = function (text){
		console.log(text)
		$http({
	        method : "GET",
	        url : $scope.url + text + "&qtd=50",
	        headers: {
	        	'Content-Type': 'application/json'
	        }
	    }).then(function mySuccess(response) {
	        $scope.contatos = JSON.parse(response.data.result);
	    }, function myError(response) {
	        console.log(response.statusText);
	    });
	};

	$scope.changeToSearchGeneral = function (){
		$scope.url = $scope.ip + "/api/search?q=" 

		$scope.b1 = true
		$scope.b2 = false
		$scope.b3 = false
	}

	$scope.changeToSearchStore = function (){
		$scope.url = $scope.ip + "/api/search/store?q=" 

		$scope.b1 = false
		$scope.b2 = true
		$scope.b3 = false
	}

	$scope.changeToSearchByCategory = function (){
		$scope.url = $scope.ip + "/api/search/by-category?q=" 

		$scope.b1 = false
		$scope.b2 = false
		$scope.b3 = true
	}

	$scope.goToInsertPage = function (){

		$window.location.href = 'insert.html'
	}

	$scope.selectedB1 = function (){

		// console.log($scope.b1)
		return $scope.b1
	};

	$scope.selectedB2 = function (){

		return $scope.b2
	};

	$scope.selectedB3 = function (){

		return $scope.b3

	};
})
