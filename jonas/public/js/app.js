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
function($scope) {
    $scope.message = 'mensaje enviado desde nuevo controller';
});
sampleApp.controller('editarController', 
function($scope, $routeParams  ) {
    $scope.params = $routeParams;
});




 

