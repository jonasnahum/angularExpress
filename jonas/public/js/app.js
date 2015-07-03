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
    var empleados=[
                    {name:"George", age:32, retiredate:"March 12, 2014"},
                    {name:"Edward", age:17, retiredate:"June 2, 2023"},
                    {name:"Christine", age:58, retiredate:"December 20, 2036"},
                    {name:"Sarah", age:62, retiredate:"April 30, 2020"}
                  ];
    $scope.empleados = empleados;  
});
 
 
sampleApp.controller('noverController', function($scope) {
 
    $scope.message = 'mensaje enviado desde noverController a template.';
 
});