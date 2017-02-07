// referencia
angular.module( '2remember' ).controller( 'mainCtrl' , function( $scope , lembretesAPI ){
    
    $scope.lembretesNotificados = [];
    $scope.urlList = window.urlList;
    
    $scope.permitirNotificacoes = (function(){
        if( Notification.persmission != 'granted' ){
            Notification.requestPermission( function( result ) {
        	  if ( result != 'granted' ) {
        	      alert( 'Não será permitido utilizar o app corretamente sem a permissão de notificações.' )
        	  }
        	});
        }
    })();
    
    $scope.enviarNotificacao = function( conteudoMsg ){
        
        navigator.serviceWorker.ready.then( function( registration ) {
            registration.showNotification( '2Remember' , conteudoMsg );
        });
    	
    }
    
    
    $scope.verificarCompromissos = (function(){
        
        navigator.serviceWorker.register( $scope.urlList.defaultUrl + 'assets/js/workers/sw.js' );
        
        window.setInterval( function(){
            
            var lembretes = lembretesAPI.retornarLembretes();
            var qtdLembretes = lembretes.length;
            
            for ( var i = 0 ; i < qtdLembretes ; i++ ){
                
                var idLembrete = parseInt( lembretes[ i ].id );
                var horaLembrete = parseInt( lembretes[ i ].dados.hora );
                var minutoLembrete = parseInt( lembretes[ i ].dados.minuto );
                var antecedencia = parseInt( lembretes[ i ].dados.antecedencia );
                var nomeLembrete = lembretes[ i ].dados.nome;
                
                var agora = new Date();

                if( horaLembrete == agora.getHours() && ( ( agora.getMinutes() + antecedencia ) == minutoLembrete ) && ( $scope.lembretesNotificados.indexOf( idLembrete ) < 0 ) ){
                    
                    var conteudoMsg = {
                        body : 'Lembre-se do seu compromisso "'+ nomeLembrete +'". Ele começará em ' + antecedencia + ' minutos!' ,
                        icon : '/assets/img/icon.png'
                    }
                    
                    $scope.enviarNotificacao( conteudoMsg );
                    $scope.lembretesNotificados.push( idLembrete );
                    
                }
                
            }
            
        } , 1000 );
        
    })();
    
});