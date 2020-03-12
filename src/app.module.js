(function(){
'use strict';
    angular
        .module('app', [
            'ui.router',
            'templateCache'
        ])
        .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
            var homeState = {
              name: 'home',
              url: '/home',
              templateUrl: 'views/home.html'
            };
          
            $stateProvider.state(homeState);
            $urlRouterProvider.otherwise('/home');
          }]);
})();