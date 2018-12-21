var app = angular.module('customerDetailController', [])
app.controller('customerDetailController',['$http','$scope','$routeParams',function($http,$scope,$routeParams) {
    $scope.id = $routeParams.id
    $scope.getCustomerData = function() {
        $http.get('http://localhost:3000/customers/'+$scope.id).success(function(data) {
            $scope.customerdata = data    
        }).error(function() {
            console.log('error in customers');
        });
     }()
 
     $scope.customerdata =  ''
}
])
