
$(document).foundation();
//angular.module('nocSonic.services',[]);
//angular.module('nocSonic.controllers',['nocSonic.services']);
//var nocSonic = angular.module('nocSonic',[]);
angular.module('nocSonic',['nocSonic.services','nocSonic.controllers']);
angular.module('nocSonic.services',[]);
angular.module('nocSonic.controllers',['nocSonic.services']);
