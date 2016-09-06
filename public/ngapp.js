'use strict';
angular.module('app', ['720kb.datepicker'])
    .controller('DoomsdayController', ['$scope', '$http', '$filter', function ($scope, $http, $filter) {
        $scope.headline = "The Doomsday Near Miss List";
        //$scope.value = new Date().toISOString().split("T")[0];
        $scope.number_days = 7;
        $scope.close_object;
        $scope.date  = $filter("date")(new Date(), 'yyyy-MM-dd');
        //$scope.start_date = $scope.end_date - $scope.number_days;
        console.log($scope.end_date);
        $scope.start_date = "2016-09-03";
        $scope.search = function () {
            let end_date = $filter("date")($scope.date, 'yyyy-MM-dd');
            $http.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=' + $scope.start_date + '&end_date=' + end_date + '&api_key=DEMO_KEY')
                .success(function (data) {
                $scope.response = data;
                    $scope.NEO = [];
                    angular.forEach($scope.response, function (item) {
                        console.log(item.near_earth_objects)
                    })
                    //$scope.close_object = ["data"]["near_earth_objects"];
            });
        }
    }]);
