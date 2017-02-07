// referencia
angular.module( '2remember' ).controller( 'cadastrarCtrl' , function( $scope , lembretesAPI ){
    
    $scope.cadastrarLembrete = function( lembrete ){
        lembretesAPI.salvarLembretes( lembrete );
        $scope.limparFormulario();
        alert( 'Lembrete cadastrado com sucesso!' );
    }
    
    $scope.limparFormulario = function(){
        
        $scope.formLembretes.$setPristine();
        
        $scope.lembrete = {
            nome : '' ,
            descricao : '' ,
            tempo : ''
        }
    }
});