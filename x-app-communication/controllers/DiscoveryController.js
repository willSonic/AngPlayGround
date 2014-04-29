angular.module("nocSonic.controllers")
    .controller('DiscoveryController', ['$scope', 'audioConsumer', 'requestNotificationChannel', function($scope, dataService, requestNotificationChannel) {
        $scope.mydata = dataService.getHop("50ae677361d118e3646d7d6c");

        $scope.onEdit = function(mydata) {
            requestNotificationChannel.editData(mydata);
        }

    }]
)

