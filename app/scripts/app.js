(function(){
    'use strict';

    var app = angular.module('customerapp',
         ['ngRoute',
         'alexjoffroy.angular-loaders',
         'customerService',
         'customerController',
         'addCustomerController',
         'editCustomerController',
         'customerDetailController']);
    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider .when('/', {
        controller: 'customerController',
        controllerAs: 'vm',
        templateUrl: 'views/customerView.html',
        })
        .when('/customers', {
            controller: 'customerController',
            controllerAs: 'vm',
            templateUrl: 'views/customerView.html',
        })
        .when('/addCustomer', {
            controller: 'addCustomerController',
            templateUrl: 'views/addCustomer.html',
        })
        .when('/editCustomer/:id', {
            controller: 'editCustomerController',
            templateUrl: 'views/editCustomer.html',
        })
        .when('/customerDetail/:id', {
            controller: 'customerDetailController',
            templateUrl: 'views/customerDetail.html'
        })
    }])      
}());