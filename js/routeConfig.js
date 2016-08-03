angular.module('new').config(function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('/', {
        url: '/',
        templateUrl: 'templates/user.html'
        //controller: 'ProfileController'
      })
      .state('telst', {
        url: '/test',
        templateUrl: 'templates/test.html',
        controller: 'TestCtrl'
      });

    $urlRouterProvider.otherwise('/');

});