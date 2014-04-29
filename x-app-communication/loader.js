yepnope({

    load: [
        'https://ajax.googleapis.com/ajax/libs/angularjs/1.2.0-rc.2/angular.js',
        'https://cdn.jsdelivr.net/foundation/5.2.2/js/vendor/jquery.js',

        'https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.7.1/modernizr.min.js',
        'https://cdn.jsdelivr.net/foundation/5.2.2/js/foundation.min.js',
        'controllers/MenuController.js',
        'controllers/PlayerController.js',
        'services/events.service.js',
        'app.js'
    ],

    complete: function () {
        jQuery(document).ready(function () {
            angular.bootstrap(document, ['nocsonic']);
        });
    }
});