var app = angular.module('addCustomerController', [])
app.controller('addCustomerController',['customerService','$scope','$location',function(customerService, $scope,$location){
    $scope.customerData = {
     firstname : '',
     lastname : '',
     city : '',
     email : '',
     img: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
    }
    $scope.addCustomer = function() {
        customerService.addCustomer($scope.customerData)
        $location.path("/customers")
    }
}])
