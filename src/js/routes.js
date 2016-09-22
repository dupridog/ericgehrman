app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){
    var routes = {
        home:  { url: '/', controller: 'mainCtrl', templateUrl: 'home.html' },
        projects: { url: '/projects', controller: 'mainCtrl', templateUrl: 'projects.html'  }
    };
    _.forEach(routes, function (v, k) {
        $stateProvider.state(k, v);
    });
    $urlRouterProvider.otherwise('/');
}]); 