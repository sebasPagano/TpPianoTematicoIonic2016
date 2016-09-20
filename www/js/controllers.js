
var sonido = '';
angular.module('starter.controllers', ['ngCordova'])

.controller('DashCtrl', function($scope,$timeout) {
$scope.MisMensajes=[];
$scope.miBoton = false;
 var messagesRef = new Firebase('https://tppiano-c5592.firebaseio.com/usuarios/');


$scope.enviarUsuario = function()
{
$scope.miBoton = true;
  var name = $('#nameInput').val();
  messagesRef.push({usuario:name});

}
  

 messagesRef.on('child_added', function (snapshot) {
  $timeout(function(){

    var message = snapshot.val();
    $scope.MisMensajes.push(message);
    console.log($scope.MisMensajes);
    });

  });

})

.controller('ChatsCtrl', function($scope,$cordovaNativeAudio,$ionicPlatform) {
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
     sonido= 'ayCaramba';
  }
      $scope.bardeMoe= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('bardeMoe');
     sonido= 'bardeMoe';
  }
      $scope.Burns= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('Burns');
     sonido= 'Burns';
  }

        $scope.Doh= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('Doh');
     sonido= 'Doh';
  }

        $scope.Flanders= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('Flanders');
     sonido= 'Flanders';
  }

        $scope.marge= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('marge');
     sonido= 'marge';
  }
        $scope.Milkhouse= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('Milkhouse');
     sonido= 'Milkhouse';
  }

          $scope.Opening= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('Opening');
     sonido= 'Opening';
  }

          $scope.PuercoArana= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('PuercoArana');
     sonido= 'PuercoArana';
  }
          $scope.RisaHomero= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('RisaHomero');
     sonido= 'RisaHomero';
  }
            $scope.TomyYDaly= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('TomyYDaly');
     sonido= 'TomyYDaly';
  }
        $scope.PequenoDemonio= function () {
    $cordovaNativeAudio.stop(sonido);
    $cordovaNativeAudio.play('PequenoDemonio');
     sonido= 'PequenoDemonio';
  }




})
.controller('AccountCtrl', function($scope) {


});


