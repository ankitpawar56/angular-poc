var app = angular.module('dep', []);

//Service DI
app.service('nameService',function() {
    this.name = "Service name";
    this.namelen = function() {
        return this.name.length;
    }
});
//Controller Constructor
// app.controller('mainController',function($scope, nameService){
//      $scope.name = 'Dependency Injection Example'
//      $scope.namelen = nameService.namelen()
// });

//$inject
    angular
        .module('dep')
        .controller('mainController', mainController)
    //Filter
        mainController.$inject = ['$scope','$filter','nameService'];

    function mainController($scope,$filter,nameService) {
        $scope.name = 'Dependency Injection Example'
        $scope.namelen = nameService.namelen()
        $scope.lowercasehandle = function() {
            return $filter('lowercase')($scope.name);
        }
    }