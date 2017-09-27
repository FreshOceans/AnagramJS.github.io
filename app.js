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
        firstPhrase: "",
        fullAnagram: function() {
            var finalPhrase;
            finalPhrase = this.firstPhrase.split('').sort(function() {
                return 0.5 - Math.random()
            }).join('');

            return finalPhrase

            // Issue with infinte digest loop lies inside $scope.phrase.fullAnagram's return value.
            // Create a if condition to solve or divide finalPhrase functions
            // Ex: $scope.random = function() {return 0.5 - Math.random();};
        }
    };
});
