var app = angular.module('dir', []);

app.controller('mainController',function($scope,){
          $scope.name = 'ng-model Example'
     })

app.directive("searchResult", function() {
    return {
        restrict: 'AECM',
        templateUrl: './directive/searchresult.html',
    }
})

app.directive("secondResult", function() {
    return {
        restrict: 'AECM',
        templateUrl: './directive/secondresult.html',
    }
})