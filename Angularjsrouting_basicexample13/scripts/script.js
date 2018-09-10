var mainApp=angular.module("mainApp",['ngRoute']);
mainApp.config(['$routeProvider'],function()
{
when ('/',{
templateUrl:'Templates/main.html',
controller:'mainController'
}).
when('/',{
templateUrl:'Templates/contacts.html',
controller:'contactsController'
}).
otherwise({
redirectTo:'/'
});
}]);
mainApp.Comtroller["mainController",function($scope){
$scope.message="Hello";
}];
mainApp.Comtroller["contactsController",function($scope){
$scope.message="patnaik.ansh9@gmail.com";
}];
