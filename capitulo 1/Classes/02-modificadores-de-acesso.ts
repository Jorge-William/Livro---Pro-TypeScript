/**
 *  Existem três modificadores de acesso
 *  - private
 *  - protected 
 *  - public
 */

class Funcionario {
    private nomeFuncionario: string;
    private matricula: number;
    // Variaveis estaticas só podem ser acessadas através da classe 
    static readonly codigoClasse: number = 6001;

    constructor(nomeFuncionario: string, matricula: number) {
        this.nomeFuncionario = nomeFuncionario;
        this.matricula = matricula;
    }

    mostrarFuncionario(): void {
        console.log(this.nomeFuncionario, this.matricula);
    }
}

const jorge = new Funcionario('jorge', 11234)

jorge.mostrarFuncionario();

// Como a variável foi declarada privada, a mesma não pode ser acessada fora da classe Funcionario
jorge.nomeFuncionario = 'jorginho'
console.log(jorge.nomeFuncionario)

// Acessando a variavel estática atravez do nome da classe. O erro ocorre pois a variavel é somente leitura impossibilitando a modificação da mesma
console.log(Funcionario.codigoClasse = 60);
