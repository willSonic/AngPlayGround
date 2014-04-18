var app = angular.module('plunker', []);

app.factory('messageService', function($rootScope) {
    var messenger = {
        messages: [],
        identity: 0,
        addMessage: function(text, caller) {

            this.identity +=1;
            var id = this.identity,
                message = {
                    text: caller + text,
                    id: id
                };

            this.messages.push(message);
            $rootScope.$broadcast('messageAdded');
        }
    };

    return messenger;
});

app.controller('Controller1', function($scope, messageService) {
    $scope.messages1 = messageService.messages;
    $scope.post = {
        text: ''
    };

    $scope.postMessage = function() {
        console.log($scope.post);
        messageService.addMessage($scope.text, "controller 1");
    };

    $scope.$on('messageAdded', function() {
        $scope.messages1 = messageService.messages;
    });
});



app.controller('Controller2', function($scope, messageService) {
    $scope.messages2 = messageService.messages;
    $scope.post = {
        text: ''
    };

    $scope.postMessage = function() {
        messageService.addMessage($scope.text, "controller 2");
    };

    $scope.$on('messageAdded', function() {
        $scope.messages2 = messageService.messages;
    });
});