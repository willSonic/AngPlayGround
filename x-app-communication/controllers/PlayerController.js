angular.module("nocSonic.controllers")
    .controller("PlayerController",
    ['$scope', 'audioConsumer', 'requestNotificationChannel', function($scope, dataService, requestNotificationChannel) {
        $scope.hop = null;

        var onEditDataHandler = function(item) {
            $scope.hop = item;
        };

        requestNotificationChannel.onEditData($scope, onEditDataHandler);

        $scope.onSave = function() {
            dataService.saveHop($scope.hop);
            $scope.hop = null;
        }

        $scope.onCancel = function() {
            $scope.hop = null;
        }
    }]
);