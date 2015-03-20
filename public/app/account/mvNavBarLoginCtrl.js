angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, mvIdentity, mvNotifier, mvAuth, $location) {
  $scope.identity = mvIdentity;
  $scope.signin = function(username, password) {
    mvAuth.authenticateUser(username, password).then(function(success) {
      if (success) {
        /* //Disabled due Toastr/Angular bug
        mvNotifier.notify('You have successfully signed in!');*/
        console.log("This code doesn't run {mvNotifier.notify('You have successfully signed in!');}");
        alert('You are signed in!');
      } else {
        /* // Disabled due Toastr/Angular bug
        mvNotifier.notify('Username/Password combination incorrect');*/
        console.log("This code doesn't run {mvNotifier.notify('Username/Password combination incorrect');}");
        alert('Incorrect username or password');
      }
    });
  };
  $scope.signout = function() {
    mvAuth.logoutUser().then(function() {
      $scope.username = "";
      $scope.password = "";
          /* //Disabled due Toastr/Angular bug
      mvNotifier.notify('You have been successfully signed out!');*/
      console.log("This code doesn't run {mvNotifier.notify('You have been successfully signed out!');}");
      alert('You are signed out!');
      $location.path('/');
    });
  };
});
