// config
angular.module( "2remember" ).config( function( $routeProvider , $locationProvider ) {

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    
    if ( window.location.protocol != 'https:' ){
        window.location.protocol = 'https:';
    }
    
    var url = ( window.location.href == 'gabrieluizramos.github.io' ) ? '/2remember-app/' : '/';
    
    $routeProvider
    .when( url , {
        templateUrl : "views/home.html" ,
        controller: 'homeCtrl'
    })
    .when( url + 'listar' , {
        templateUrl : "views/listar.html" ,
        controller: 'listarCtrl'
    })
    .when( url + 'cadastrar' , {
        templateUrl : "views/cadastrar.html" ,
        controller: 'cadastrarCtrl'
    })
    .when( url + 'historico' , {
        templateUrl : "views/historico.html" ,
        controller: 'historicoCtrl'
    })
    .otherwise( { redirectTo: url } );
});