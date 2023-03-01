// Um pouco mais de interfaces

interface Ponto {
    // propriedades
    x: number;
    y: number;
}

interface Passageiro {
    nome: string;
}

interface Veiculo {
    // construtor
    new(): Veiculo;

    // propriedade 
    localizacaoAtual: Ponto

    // metodos
    viagemPara(ponto: Ponto): void;
    adicionarPassageiro(passageiro: Passageiro): void;
    removerPassageiro(passageiro: Passageiro): void;

}


