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
$scope.estado = "Seleccione un archivo";
$scope.descargar_csv = function(){
  console.log("downloading csv method "+$scope.nombre);
  
	if ($scope.nombre === undefined){
		$scope.estado = "El nombre no puede estar vacio"
	}

	else{
	     $scope.estado = "Descargando archivo";  
		    defaultService.get('/filemanager/csv/download/?file='+$scope.nombre, function(d){
		    $scope.estado = "Importando archivo";
        defaultService.get('/filemanager/import/csv/action/', function(d){
            //console.log(d)
        //alert(d);
        $scope.estado = d;
                               }, function (e){alert(e);}
        );
		    

		       										 }, function (e){alert(e);}
		    );
	    }  
    }  


$scope.import_repo = function(repo){
  console.log(repo);
  $scope.estado = "Descargando archivo";
  //alert("Descargando archivo");
  defaultService.get('/filemanager/csv/download/?file='+repo, function(d){
        
        $scope.estado = "Importando archivo";
        defaultService.get('/filemanager/import/csv/action/', function(d){
            //console.log(d)
        //alert(d);
        $scope.estado = d;
                               }, function (e){alert(e);}
        );
        //alert(d);
                                                            }, function (e){alert(e);}
        );
}




}]);



app.controller('catalogController', ['$scope', 'defaultService', function ($scope, defaultService) {
  defaultService.get('/catalog/get/json/', function(d){
            console.log(d)
        $scope.products = d;    
        console.log($scope.products);
                               }, function (e){alert(e);}
        );


}]);

