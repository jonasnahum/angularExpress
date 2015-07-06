var sampleApp = angular.module('sampleApp', []);

sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/vertabla', {
        templateUrl: "/js/templates/vertabla.ejs",
        controller: 'vertablaController'
    }).
      when('/nover', {
        templateUrl: "/js/templates/nover.ejs",
        controller: 'noverController'
      }).
      when('/nuevo', {
        templateUrl: "/js/templates/nuevo.ejs",
        controller: 'nuevoController'
      }).
      when('/editar/:id', {
        templateUrl: "/js/templates/editar.ejs",
        controller: 'editarController'
      }).
      otherwise({
        redirectTo: '/vertabla'
      });
}]);
 
sampleApp.controller('vertablaController', 
function($scope, $http) {
    $http.get("http://localhost:3000/articulos")
    .success(function(response) {
        $scope.articulos = response;
    });
});
 
sampleApp.controller('noverController', 
function($scope) {
 
    $scope.message = 'mensaje enviado desde noverController a template';
 
});
sampleApp.controller('nuevoController', 
function($scope, $http, $location) {
    $scope.body = {
        producto: "",
        precio: ""
    };
    $scope.guardar = function() {
        $http.post("http://localhost:3000/nuevo",  $scope.body)
             .success(function() { 
                $location.path('/');
            });
    }; 
});


sampleApp.controller('editarController', 
function($scope, $http, $routeParams, $window, $location) {
    $http.get("http://localhost:3000/editar/" + $routeParams.id)
    .success(function(response) {
        $scope.params = response; 
    });
    
    $scope.body = {
        id: "",
        producto: "",
        precio: ""
      };

    $scope.guardar = function() {
        //$window.alert(JSON.stringify($scope.body));
         $http.post("http://localhost:3000/editar",  $scope.body)
         .success(function() { 
            $location.path('/');
        }); 
    };
});




 

