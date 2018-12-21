var app = angular.module('customerController', [])
app.controller('customerController', ['$http', function($http){
    var vm = this
    vm.view = 1
    vm.customers = [],
    vm.searchCustomers = [], 
    vm.searchText = ''
    vm.page = 1,

    vm.getCustomers = function() {
        $http.get('http://localhost:3000/customers?_page=1').success(function(data) {
            vm.customers = data;
        }).error(function() {
            console.log('error in customers');
        });
    }()

    vm.searchCustomers = function() {
        $http.get('http://localhost:3000/customers?q='+vm.searchText).success(function(data) {
            console.log(data)
                vm.customers = data;
        }).error(function() {
            console.log('error in customers');
        });
    }

    vm.clearSearch = function() {
        $http.get('http://localhost:3000/customers').success(function(data) {
            vm.customers = data;
        }).error(function() {
            console.log('error in customers');
        });
    }

    vm.deleteCustomer = function(id) {
        vm.id = id
        $http.delete('http://localhost:3000/customers/'+ vm.id).success(function(data) {
            console.log(data)
            $http.get('http://localhost:3000/customers').success(function(data) {
                vm.customers = data;
                }).error(function() {
                console.log('error in customers');
            });
        }).error(function() {
            console.log('error in customers');
        });
    }

    vm.prev = function() {
        if(vm.page > 1) {
           vm.page = vm.page-1
           $http.get('http://localhost:3000/customers?_page='+vm.page).success(function(data) {
            vm.customers = data;
            }).error(function() {
            console.log('error in customers');
            });
        }

    }
    vm.next = function() {
        if(vm.page < 4) {
            console.log(vm.customers.length)
            vm.page = vm.page+1
            $http.get('http://localhost:3000/customers?_page='+vm.page).success(function(data) {
                vm.customers = data;
                }).error(function() {
                console.log('error in customers');
                });
        }
    }
}])