var app = angular.module('editCustomerController', [])
app.controller('editCustomerController',['customerService','$http','$scope','$routeParams','$location',function(customerService,$http, $scope, $routeParams, $location){
    $scope.id = $routeParams.id
    $scope.loading = true
    //customerService.getCustomerData($scope.id)
    $scope.getCustomerData = function() {
        $scope.loading = true
       $http.get('http://localhost:3000/customers/'+$scope.id).success(function(data) {
           $scope.customer = data
           $scope.loading = false
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
        $location.path("/customers")
    }
}])
