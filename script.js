// Code goes here

var app=angular.module("angPrj",['ngRoute'])

.config(function($routeProvider){
     $routeProvider.
     when('/main',{
       templateUrl: 'main.html',
       controller: 'MainCtrl'
     }).
      when('/about',{
       templateUrl: 'about.html',
       controller: 'AboutCtrl'
     }). when('/services',{
       templateUrl: 'services.html',
       controller: 'ServicesCtrl'
     }). when('/contact',{
       templateUrl: 'contact.html',
       controller: 'ContactCtrl'
     }).
     otherwise({redirectTo:'/main'})
     
})
.controller('AboutCtrl',['$scope',function($scope){
  
}])
.controller('ServicesCtrl',['$scope','$http',function($scope,$http){
  $http.get('services.json').then(function(response){
    //console.log(response.data);
    $scope.services = response.data;
  });
}])
.controller('ContactCtrl',['$scope','$http',function($scope,$http){
  $http.get('locations.json').then(function(response){
    $scope.locations = response.data;
  });
}])

.controller('MainCtrl',['$scope','$http',function($scope,$http){
   $http.get('services.json').then(function(response){
    //console.log(response.data);
    $scope.services = response.data;
  });
}]);