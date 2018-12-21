(function() {
    var app = angular.module('store',[ ]);
    app.controller('StoreController', function(){
        this.product = gem;
        this.products = [{
            name: 'apple',
            price: 40
        },
        {
            name: 'bananas',
            price: 100
        }]
    });
    

    var gem = {
        name: 'works',
        price: 25,
    }
})();