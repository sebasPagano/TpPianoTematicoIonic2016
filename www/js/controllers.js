
var sonido = '';
angular.module('starter.controllers', ['ngCordova'])

.controller('InicioCtrl', function($scope,$timeout,$ionicPlatform,$cordovaNativeAudio) {


})

.controller('PianoCtrl', function($scope,$cordovaNativeAudio,$cordovaVibration,$ionicPlatform,$cordovaFile) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {

  //});
  
  $scope.secuencia = [];



    $scope.ayCaramba= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('ayCaramba');
    $cordovaVibration.vibrate(300);
     sonido= 'ayCaramba';
     $scope.secuencia.push("ayCaramba"); 
  }

      $scope.Eructo= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('Eructo');
    $cordovaVibration.vibrate(300);
     sonido= 'Eructo';
      $scope.secuencia.push("Eructo"); 
  }
      $scope.Gorgory= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('Gorgory');
    $cordovaVibration.vibrate(300);
     sonido= 'Gorgory';
      $scope.secuencia.push("Gorgory"); 
  }
        $scope.Lisa= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('Lisa');
    $cordovaVibration.vibrate(300);
     sonido= 'Lisa';
      $scope.secuencia.push("Lisa"); 
  }
        $scope.MorirMoe= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('MorirMoe');
    $cordovaVibration.vibrate(300);
    sonido= 'MorirMoe';
     $scope.secuencia.push("MorirMoe"); 
  }
        $scope.Nelson= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('Nelson');
    $cordovaVibration.vibrate(300);
     sonido= 'Nelson';
      $scope.secuencia.push("Nelson"); 
  }


      $scope.Burns= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('Burns');
    $cordovaVibration.vibrate(300);
     sonido= 'Burns';
      $scope.secuencia.push("Burns"); 
  }

        $scope.Doh= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('Doh');
    $cordovaVibration.vibrate(300);
     sonido= 'Doh';
      $scope.secuencia.push("Doh"); 
  }



        $scope.Milkhouse= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('Milkhouse');
    $cordovaVibration.vibrate(300);
     sonido= 'Milkhouse';
      $scope.secuencia.push("Milkhouse"); 
  }

          $scope.Opening= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('Opening');
    $cordovaVibration.vibrate(300);
     sonido= 'Opening';
      $scope.secuencia.push("Opening"); 
  }

          $scope.RisaHomero= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('RisaHomero');
    $cordovaVibration.vibrate(300);
     sonido= 'RisaHomero';
      $scope.secuencia.push("RisaHomero"); 
  }

        $scope.PequenoDemonio= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('PequenoDemonio');
    $cordovaVibration.vibrate(300);
     sonido= 'PequenoDemonio';
      $scope.secuencia.push("PequenoDemonio"); 
  }
        $scope.stop= function () {
    $cordovaNativeAudio.stop(sonido);
    
  }
        $scope.play= function () {
    $cordovaNativeAudio.play(sonido);
 
  }
  




})
.controller('AutorCtrl', function($scope) {


});


