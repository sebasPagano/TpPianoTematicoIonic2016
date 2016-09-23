
var sonido = '';
angular.module('starter.controllers', ['ngCordova'])

.controller('DashCtrl', function($scope,$timeout,$ionicPlatform,$cordovaNativeAudio) {

$ionicPlatform.ready(function(){
  try
  {
    $cordovaNativeAudio.play('Opening');
   
  }
  catch(ex)
  {
    console.log(ex);
  }



  })
})

.controller('ChatsCtrl', function($scope,$cordovaNativeAudio,$cordovaVibration,$ionicPlatform) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {

  //});




    $scope.ayCaramba= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('ayCaramba');
    $cordovaVibration.vibrate(300);
     sonido= 'ayCaramba';
  }
      $scope.Eructo= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('Eructo');
    $cordovaVibration.vibrate(300);
     sonido= 'Eructo';
  }
      $scope.Gorgory= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('Gorgory');
    $cordovaVibration.vibrate(300);
     sonido= 'Gorgory';
  }
        $scope.Lisa= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('Lisa');
    $cordovaVibration.vibrate(300);
     sonido= 'Lisa';
  }
        $scope.MorirMoe= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('MorirMoe');
    $cordovaVibration.vibrate(300);
    sonido= 'MorirMoe';
  }
        $scope.Nelson= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('Nelson');
    $cordovaVibration.vibrate(300);
     sonido= 'Nelson';
  }


      $scope.Burns= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('Burns');
    $cordovaVibration.vibrate(300);
     sonido= 'Burns';
  }

        $scope.Doh= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('Doh');
    $cordovaVibration.vibrate(300);
     sonido= 'Doh';
  }



        $scope.Milkhouse= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('Milkhouse');
    $cordovaVibration.vibrate(300);
     sonido= 'Milkhouse';
  }

          $scope.Opening= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('Opening');
    $cordovaVibration.vibrate(300);
     sonido= 'Opening';
  }

          $scope.RisaHomero= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('RisaHomero');
    $cordovaVibration.vibrate(300);
     sonido= 'RisaHomero';
  }

        $scope.PequenoDemonio= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('PequenoDemonio');
    $cordovaVibration.vibrate(300);
     sonido= 'PequenoDemonio';
  }




})
.controller('AccountCtrl', function($scope) {


});


