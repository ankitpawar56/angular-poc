var app = angular.module('StoreController', [])
app.controller('StoreController', ['$scope','nameService','ageService', function($scope, nameService, ageService){
    $scope.name= nameService.name,
    $scope.addToList = function addToList() {
        nameService.name = this.name;
        console.log(ageService.age)
        console.log(nameService.name, nameService.namelen());
        this.list.push({name:this.name})
    },
    $scope.deleteItem = function deleteItem(index) {
        this.list.splice(index,1)
    },
    $scope.list = [{
        name: 'apple',
    },
    {
        name: 'bananas',
    }
]
}]);