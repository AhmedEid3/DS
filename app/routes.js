(function () {
"use strict";

angular
  .module("dsApp")
  .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider']
  function RoutesConfig( $stateProvider, $urlRouterProvider ) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
    .state("home", {
      url: '/',
      templateUrl: 'app/view/home.html'
    })
    .state("services", {
      url: '/services',
      templateUrl: 'app/view/services.html'
    })
    .state("social", {
      url: '/social',
      templateUrl: 'app/view/social.html'
    })
    .state("mobileapps", {
      url: '/mobileapps',
      templateUrl: 'app/view/mobileapps.html'
    })
    .state("contact", {
      url: '/contact',
      templateUrl: 'app/view/contact.html'
    })
    .state("video", {
      url: '/video',
      templateUrl: 'app/view/video.html'
    })
    .state("Webdevelopment", {
      url: '/Webdevelopment',
      templateUrl: 'app/view/Webdevelopment.html'
    })
    .state("emailmarketing", {
      url: '/emailmarketing',
      templateUrl: 'app/view/emailmarketing.html'
    })
        ;

  }

})();
