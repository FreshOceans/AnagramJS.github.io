var app = angular.module("app", []);

app.controller('mainController', function($scope) {
    $scope.main = {};
    $scope.main.title = "AnagramJS";

    $scope.random = function(a) {
        return a.sort(function() {
            return  0.5 - Math.random();
        });
    };

    $scope.reloadRoute = function() {
        $route.reload();
    };

    $scope.phrase = {
        firstPhrase: "AngularJS",

        fullAnagram: function() {
            var finalPhrase = [];
            finalPhrase = this.firstPhrase.split('').sort(function() { return 0.5 - Math.random()}).join('');
            return finalPhrase
        }
    };
});
