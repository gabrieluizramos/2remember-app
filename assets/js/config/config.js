// config
angular.module( "2remember" ).config( function( $routeProvider , $locationProvider ) {

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    
    $routeProvider
    .when( '/' , {
        templateUrl : "views/home.html" ,
        controller: 'homeCtrl'
    })
    .when( '/listar' , {
        templateUrl : "views/listar.html" ,
        controller: 'listarCtrl'
    })
    .when( '/cadastrar' , {
        templateUrl : "views/cadastrar.html" ,
        controller: 'cadastrarCtrl'
    })
    .when( '/historico' , {
        templateUrl : "views/historico.html" ,
        controller: 'historicoCtrl'
    })
    .otherwise( { redirectTo: '/' } );
});