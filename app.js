var app = angular.module("app", []);

app.controller('mainCtrl', function($scope){
    $scope.title = "AnagramJS";
    $scope.reroll = function reroll(value){
      // set anagram to randomize
          $scope.anagram = value.split('').sort(function() {
            return 0.5 - Math.random()
          }).join('');
    };
    $scope.$watch('word', (newVal, oldVal) => {
        if (newVal) {
            $scope.reroll(newVal);
        } else {
            // empty anagram if word is empty
            $scope.anagram = "";
        }
    });
});
