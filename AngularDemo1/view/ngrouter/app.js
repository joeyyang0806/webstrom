var app = angular.module('app', ['ngRoute']);
app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when("/showName", {templateUrl:'showName.html',
                controller:'showNameController'})
        .when('/showInfo',
            {templateUrl:'showInfo.html',
                controller:'showInfoController'})
        .otherwise('/showInfo');
    }])