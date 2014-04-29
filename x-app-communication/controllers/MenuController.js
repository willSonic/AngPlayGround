angular.module("nocSonic.controllers")
    .controller('MenuController', ['$scope', 'audioConsumer', 'requestNotificationChannel', function($scope, dataService, requestNotificationChannel) {
        $scope.hops = dataService.getHops();

        $scope.onEdit = function(hop) {
            requestNotificationChannel.editData(hop);
        }

        $scope.onDelete = function(hop) {
            dataService.deleteHop(hop);
        }
    }]
);