(function() {
    var app = angular.module('store',['nameService','StoreController']); //external file
    
    // var app = angular.module('store',[ ]);  //same file
    // app.service('nameService', function() {
    //     this.name = "my name";
    //     this.namelen = function() {
    //         return this.name.length;
    //     }
    // });

})();