
    var app = angular.module('forminput', []);
    var INTEGER_REGEXP = /^-?\d+$/;
        app.controller('formController',['$scope', function($scope) {
                $scope.name = 'hello';
                $scope.email = 'hi';
                $scope.gender = 1;
                $scope.type = '';
                $scope.address = '';
                $scope.agree = '';
                $scope.age = '';
    
        }])
