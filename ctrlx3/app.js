var app = angular.module('app', []);

app.controller('controllerA', ['$scope', 'pubsubService', controllerA]);
function controllerA($scope, pubsubService) {

    $scope.changeTeam = function () {
        pubsubService.changeTeam($scope.teamname);
    };
}

app.controller('controllerB', ['$scope', 'pubsubService', controllerB]);
function controllerB($scope, pubsubService) {

    pubsubService.onChangeTeam($scope, function (message) {
        $scope.team = message.filterTeam;
    });

    $scope.confirm = function () {
        pubsubService.confirmTeam($scope.team);
    };
}

app.controller('controllerC', ['$scope', 'pubsubService', controllerC]);
function controllerC($scope, pubsubService) {

    pubsubService.onConfirmTeam($scope, function (message) {
        $scope.team = 'Confirmed name: ' + message.confirmedTeam;
    });
}

var serviceId = 'pubsubService';
app.factory(serviceId, ['$rootScope', pubsubService]);

function pubsubService($rootScope) {

    var CHANGE_TEAM = "changeTeam";
    var changeTeam = function (filterTeam) {

        $rootScope.$broadcast(CHANGE_TEAM, {
            filterTeam: filterTeam
        });
    };

    var onChangeTeam = function ($scope, handler) {
        $scope.$on(CHANGE_TEAM, function (event, message) {
            handler(message);
        });
    };

    var CONFIRM_TEAM = "confirmTeam";
    var confirmTeam = function (name) {

        $rootScope.$broadcast(CONFIRM_TEAM, {
            confirmedTeam: name
        });
    };

    var onConfirmTeam = function ($scope, handler) {
        $scope.$on(CONFIRM_TEAM, function (event, message) {
            handler(message);
        });
    };

    return {
        changeTeam: changeTeam,
        onChangeTeam: onChangeTeam,
        confirmTeam: confirmTeam,
        onConfirmTeam: onConfirmTeam
    };
}