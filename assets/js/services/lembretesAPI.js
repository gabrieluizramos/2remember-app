angular.module( '2remember' ).factory( 'lembretesAPI' , function( $http ){
	
	function getLembretes(){
		
		var lembretes = [];
		var qtdLembretes = localStorage.length;
		
		for( var i = 0 ; i < qtdLembretes ; i++ ){
			
			var _id = localStorage.key( i );
			var _dados = JSON.parse( localStorage[ localStorage.key( i ) ] );
			
			var _lembrete = {
				id : _id ,
				dados : _dados
			};
			
			lembretes.push( _lembrete );
			
		}
		
		return lembretes;
	}
	
	function postLembretes( lembrete ){
		
		var lastId = localStorage.length ? ( parseInt( localStorage.key( localStorage.length - 1 ) ) + 1 ) : 0

		localStorage.setItem( lastId , JSON.stringify( lembrete ) );
	}
	
	function deleteLembretes( idLembrete ){
		localStorage.removeItem( idLembrete );
	}
	
	return {
		retornarLembretes : getLembretes ,
		salvarLembretes : postLembretes ,
		apagarLembretes : deleteLembretes
	}
});