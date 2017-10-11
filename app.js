var app = angular.module("app", []);

app.controller('mainController', function($scope) {
    $scope.main = {};
    $scope.main.title = "AnagramJS";

    // Refresh Page acts as reroll button
    $scope.reloadRoute = function() {
        $route.reload();
    };

    // Anagram Creation
    $scope.$watch('initialPhrase', (newVal, oldVal) => {
    if (newVal) {
      // set anagram to randomize
      $scope.anagram = newVal.split('').sort(function() {
        return 0.5 - Math.random()
      }).join('');
    } else {
      // empty anagram if word is empty
      $scope.anagram = "";
    }
    });

});
