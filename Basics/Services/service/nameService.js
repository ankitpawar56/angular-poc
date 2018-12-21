var app = angular.module('nameService',[]);
app.service('nameService',['$log', function($log) { //Dependancy injection
    this.name = "my name";
    this.namelen = function() {
        $log.log("Name is ", this.name)
        return this.name.length;
    }
}]);