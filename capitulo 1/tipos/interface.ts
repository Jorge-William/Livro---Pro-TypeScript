// Interface funciona como se fosse um contrato de preenchimento de propriedades e métodos que devem ser 
// fornecidos

interface InterfacePessoa {
    nome: string;
    matricula: number;
}

const pessoaEstudante: InterfacePessoa = {
    nome: 'Flávio',
    matricula: 2.2
}
