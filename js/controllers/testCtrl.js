
var app=angular.module('new');

app.controller('TestCtrl',function($scope,myValService) {
 
   $scope.test="Angular";
   console.log(myValService);
});


app.constant('myValService', 'someValue');

