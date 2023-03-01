class Conta {
    private _numeroDaConta: number;
    private _nomeDoTitular: string;
    private _saldo: number;

    constructor(_numeroDaConta: number, _nomeDoTitular: string, _saldo: number) {
        this._numeroDaConta = _numeroDaConta;
        this._nomeDoTitular = _nomeDoTitular;
        this._saldo = _saldo;
    }

    public get numeroDaConta() {
        return this._numeroDaConta;
    }

    public set numeroDaConta(numeroDaConta: number) {
        this._numeroDaConta = numeroDaConta;
    }

    public get nomeDoTitular() {
        return this._nomeDoTitular;
    }

    public set nomeDoTitular(nomeTitular: string) {
        this._nomeDoTitular = nomeTitular;
    }

    public get saldoDaConta() {
        return this._saldo
    }

    sacar(valorDoSaque: number): string {
        if (this._saldo < valorDoSaque) {
            return "Saldo insuficiente!!!"
        } else {
            this._saldo -= valorDoSaque
            return "Saque efetuado com seucesso!!!"
        }
    }

    depositar(valorDoDeposito: number): string {
        this._saldo += valorDoDeposito

        return "Depósito efetuado com sucesso!!!"
    }

}


const minhaConta = new Conta(7887, 'Jorge William', 200000);

console.log(minhaConta.nomeDoTitular);
console.log(minhaConta.depositar(15));
console.log(minhaConta.saldoDaConta);
console.log(minhaConta.sacar(56473));
console.log(minhaConta.saldoDaConta);



