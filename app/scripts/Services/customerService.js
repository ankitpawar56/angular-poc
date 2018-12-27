var app = angular.module('customerService', []);
app.service('customerService', ['$http', function($http) {
    this.customerData = '',
    this.addCustomer = function(customerData) {
        this.customerData = customerData
        console.log("in addcustomer", this.customerData)
       $http.post('http://localhost:3000/customers?', this.customerData).success(function(data) {
           console.log(data)
            
       }).error(function() {
           console.log('error in customers');
       });
    }

    // this.getCustomerData = function(id) {
    //     this.id = id,
    //     console.log("in addcustomer", this.customerData)
    //    $http.get('http://localhost:3000/customers/'+this.id).success(function(data) {
    //        console.log(data)
    //        this.customerData = data    
    //        console.log("this.customerData", this.customerData)   
    //    }).error(function() {
    //        console.log('error in customers');
    //    });
    // }

    this.editCustomer = function(customerData,id) {
        this.customerData = customerData,
        this.id = id,
        console.log("in addcustomer", this.customerData)
       $http.put('http://localhost:3000/customers/'+this.id, this.customerData).success(function(data) {
           console.log(data)       
       }).error(function() {
           console.log('error in customers');
       });
    }
}])