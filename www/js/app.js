// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform,$cordovaNativeAudio) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    if(window.plugins && window.plugins.NativeAudio)
    { 


      $cordovaNativeAudio.preloadComplex('ayCaramba', 'audio/ayCaramba.mp3', 1, 1);
      $cordovaNativeAudio.preloadComplex('Eructo', 'audio/Eructo.mp3', 1, 1);
      $cordovaNativeAudio.preloadComplex('Gorgory', 'audio/Gorgory.mp3', 1, 1);
      $cordovaNativeAudio.preloadComplex('Lisa', 'audio/Lisa.mp3', 1, 1);
      $cordovaNativeAudio.preloadComplex('MorirMoe', 'audio/MorirMoe.mp3', 1, 1);
      $cordovaNativeAudio.preloadComplex('Nelson', 'audio/Nelson.mp3', 1, 1);

      $cordovaNativeAudio.preloadComplex('Burns', 'audio/Burns.mp3', 1, 1);
      $cordovaNativeAudio.preloadComplex('Doh', 'audio/Doh.wav', 1, 1);

      $cordovaNativeAudio.preloadComplex('Milkhouse', 'audio/Milkhouse.mp3', 1, 1);
      $cordovaNativeAudio.preloadComplex('Opening', 'audio/Opening.mp3', 1, 1);
      $cordovaNativeAudio.preloadComplex('PequenoDemonio', 'audio/PequenoDemonio.mp3', 1, 1);
      $cordovaNativeAudio.preloadComplex('RisaHomero', 'audio/RisaHomero.mp3', 1, 1);




    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html',
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
