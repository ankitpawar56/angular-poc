angular.module('store').config(['$provide',  //By using provide
    function($provide) {
        $provide.service('ageService', function() {
            this.age= 20;
        })
    }
])