app.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : '/filemanager/import/csv/view/',
               	controller  : 'fileController'

            }).when('/filemanager/import/csv/view/', {
                templateUrl : '/filemanager/import/csv/view/',
               	controller  : 'fileController'

            }).when('/catalog/view/products/', {
                templateUrl : '/catalog/view/products/',
               	controller  : 'catalogController'

            }).
      otherwise({
        templateUrl : '/filemanager/import/csv/view/',
        controller  : 'fileController'
      });

            
            
    });

app.controller('fileController', ['$scope', 'defaultService', function ($scope, defaultService) {
$scope.descargar_csv = function(){
  console.log("downloading csv method "+$scope.nombre);
  
	if ($scope.nombre === undefined){
		alert("El nombre no puede estar vacio");
	}

	else{
	       	alert("Descargando archivo");
		    defaultService.get('/filemanager/csv/download/?file='+$scope.nombre, function(d){
		    $('#importar').prop('disabled', false);    //console.log(d)
		    alert(d);
		       										 }, function (e){alert(e);}
		    );
	    }  
    }  


$scope.import_repo = function(repo){
  console.log(repo);
  alert("Descargando archivo");
  defaultService.get('/filemanager/csv/download/?file='+repo, function(d){
        $('#importar').prop('disabled', false);    //console.log(d)
        alert(d);
                               }, function (e){alert(e);}
        );
}

$scope.importar_csv = function(){
  
  $scope.estado = "importing file";
	defaultService.get('/filemanager/import/csv/action/', function(d){
		        //console.log(d)
		    console.log(d);
        $scope.estado = d;
		       										 }, function (e){alert(e);}
		    );

}


}]);



app.controller('catalogController', ['$scope', 'defaultService', function ($scope, defaultService) {
  defaultService.get('/catalog/get/json/', function(d){
            //console.log(d)
        $scope.products = JSON.parse(d);    
        console.log($scope.products);
                               }, function (e){alert(e);}
        );


}]);

