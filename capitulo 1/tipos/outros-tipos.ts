// undefined é quando uma variável foi declarada mas não inicializada

/**
 * null - é quando por exemplo uma busca é feita em um Array de objetos, e nenhum item 
 * é encontrado retornando o valor null
 *  
 * */

// Void é quando um método não retorna valor por padrão
function darPartida(): string {
    return 'vrummm'
}

function ligarCarro(): void {
    darPartida()
}


// O tipo - never - ocorre quando uma parte do código não é executada


try {
    let nome: string = 'Jorge';

    throw new Error()

    function retornaNome(): string {
        return nome;
    }

} catch (error) {
    console.error(error);
}

/** O tipo - any -  ocorre quando não há como o compilador não é capaz 
 * de inferir de que tipo é tal valor
*
*/