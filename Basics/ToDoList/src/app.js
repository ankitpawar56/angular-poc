(function() {
    var app = angular.module('store',[ ]);
    app.controller('StoreController', function(){
        this.name= '',
        this.addToList = function addToList() {
            this.list.push({name:this.name})
        },
        this.deleteItem = function deleteItem(index) {
            this.list.splice(index,1)
        },
        this.list = [{
            name: 'apple',
        },
        {
            name: 'bananas',
        }
    ]
    });
})();