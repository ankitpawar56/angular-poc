(function(){
    'use strict';

    angular
        .module('routeexample')
        .config(function ($locationProvider, $routeProvider){
            $routeProvider.when("/", {
                template: '<h1>Hi</h1>'
            }).when("/blog/1", {
                template: '<h1>Hi</h1>'
            }).when("/blog/2", {
                template: '<h2>Hello</h2>'
            }).otherwise({
                template: 'Not Found'
            })
        
        })
}());