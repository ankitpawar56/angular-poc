
var app=angular.module('storeExample', [])

app.controller('firstController', ['$scope', function($scope){
    $scope.name = 'First Controller  scope',
    $scope.list = [{
        name: 'first controller ngRepeat',
    },
    {
        name: 'scope',
    }
]
}]);

app.controller('secondController', ['$scope', function($scope){
    $scope.name = 'Second Controller  scope',
    $scope.list = [{
        name: 'second controller ngRepeat',
    },
    {
        name: 'scope',
    }
]
}]);