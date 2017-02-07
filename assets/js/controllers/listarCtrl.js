// referencia
angular.module( '2remember' ).controller( 'listarCtrl' , function( $scope , lembretesAPI ){
    
    $scope.apagarLembretes = function( idLembrete ){
        lembretesAPI.apagarLembretes( idLembrete );
        $scope.carregaLembretes();
    }
    
    // IIFE
    $scope.carregaLembretes = (function _carregaLembretes (){
        $scope.lembretes = lembretesAPI.retornarLembretes();
        
        return _carregaLembretes;
    })();
    
});