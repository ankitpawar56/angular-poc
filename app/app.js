(function(){
    'use strict';

    var app = angular.module('customerapp',
         ['ngRoute',
         'customerService',
         'customerController',
         'addCustomerController',
         'editCustomerController',
         'customerDetailController']);
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider .when('/', {
        controller: 'customerController',
        controllerAs: 'vm',
        templateUrl: 'Customers/customerView.html',
        })
        .when('/customers', {
            controller: 'customerController',
            controllerAs: 'vm',
            templateUrl: 'Customers/customerView.html',
        })
        .when('/addCustomer', {
            controller: 'addCustomerController',
            templateUrl: 'Customers/addCustomer.html',
        })
        .when('/editCustomer/:id', {
            controller: 'editCustomerController',
            templateUrl: 'Customers/editCustomer.html',
        })
        .when('/customerDetail/:id', {
            controller: 'customerDetailController',
            templateUrl: 'Customers/customerDetail.html'
        })
    }])
        
}());