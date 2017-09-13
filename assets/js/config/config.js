// config
angular.module( "2remember" ).config( function( $routeProvider , $locationProvider ) {

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
    
    // if ( window.location.protocol != 'https:' ){
    //     window.location.protocol = 'https:';
    // }
    
    var url = window.location.hostname === 'localhost' ? '/' : '/2remember-app/';
   
    window.urlList = {
        defaultUrl : url ,
        
        home : {
            url : url , 
            config : {
                templateUrl : url + "views/home.html" ,
                controller: 'homeCtrl'
            }
        } ,
        listar : {
            url : url + 'listar' ,
            config : {
                templateUrl : url + "views/listar.html" ,
                controller: 'listarCtrl'
            }
        } ,
        cadastrar : {
            url : url + 'cadastrar' ,
            config : {
                templateUrl : url + "views/cadastrar.html" ,
                controller: 'cadastrarCtrl'
            }
        } ,
        historico : {
            url : url + 'historico' ,
            config : {
                templateUrl : url + "views/historico.html" ,
                controller: 'historicoCtrl'
            }
        }
    };
    
    $routeProvider
    .when( window.urlList.home.url , window.urlList.home.config )
    .when( window.urlList.listar.url , window.urlList.listar.config)
    .when( window.urlList.cadastrar.url , window.urlList.cadastrar.config)
    .when( window.urlList.historico.url , window.urlList.historico.config)
    .otherwise( window.urlList.defaultUrl );
});