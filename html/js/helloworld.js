angular.module('demo', [])
    .controller('Hello', function($scope, $http) {
        $http.get('http://192.168.73.104/items.json').
        then(function(response) {
            $scope.data = response.data;
        });
    });