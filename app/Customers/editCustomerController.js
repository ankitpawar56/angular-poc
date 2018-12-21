var app = angular.module('editCustomerController', [])
app.controller('editCustomerController',['customerService','$http','$scope','$routeParams',function(customerService,$http, $scope, $routeParams){
    $scope.id = $routeParams.id
    //customerService.getCustomerData($scope.id)
    $scope.getCustomerData = function() {
       $http.get('http://localhost:3000/customers/'+$scope.id).success(function(data) {
           $scope.customer = data    
       }).error(function() {
           console.log('error in customers');
       });
    }()

    $scope.customer =  ''
    $scope.customerData = {
     firstname : '',
     lastname : '',
     city : '',
     email : '',
     img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    }
    $scope.editCustomer = function() {
        customerService.editCustomer($scope.customer, $scope.id)
    }
}])
