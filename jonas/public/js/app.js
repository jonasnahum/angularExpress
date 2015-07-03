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
      otherwise({
        redirectTo: '/vertabla'
      });
}]);
 





sampleApp.controller('vertablaController', function($scope) {
    $scope.message = 'mensaje enviado desde vertablaController a template.';  
});
 
 
sampleApp.controller('noverController', function($scope) {
 
    $scope.message = 'mensaje enviado desde noverController a template.';
 
});