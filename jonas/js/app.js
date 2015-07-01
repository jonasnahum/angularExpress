var sampleApp = angular.module('sampleApp', []);
 

sampleApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/AddNewOrder', {
        templateUrl: '/home/jonas/Documents/github/angularExpress/jonas/js/templates/add_order',
        controller: 'AddOrderController'
    }).
      when('/ShowOrders', {
        templateUrl: __dirname + '/templates/show_orders.ejs',
        controller: 'ShowOrdersController'
      }).
      otherwise({
        redirectTo: '/AddNewOrder'
      });
}]);
 
 
sampleApp.controller('AddOrderController', function($scope) {
     
    $scope.message = 'This is Add new order screen';
     
});
 
 
sampleApp.controller('ShowOrdersController', function($scope) {
 
    $scope.message = 'This is Show orders screen';
 
});