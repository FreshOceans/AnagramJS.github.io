var app = angular.module("app", []);

app.controller('mainController', function($scope) {
    $scope.main = {};
    $scope.main.title = "AnagramJS";

    // Refresh Page acts as reroll button
    $scope.reloadRoute = function() {
        $route.reload();
    };

    // Anagram Creation
    $scope.phrase = {
        firstPhrase: "AngularJS",
        fullAnagram: function() {
            var finalPhrase = [];
            finalPhrase = this.firstPhrase.split('').sort(function() {
                return 0.5 - Math.random()
            }).join('');

            return finalPhrase
        };
    };
});
