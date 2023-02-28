interface Cefalopod {
    temTinta: boolean,
    bracos: number,
    tentaculos: number
}

interface CefalopodDicionario {
    [index: string]: Cefalopod
}

let dicionario: CefalopodDicionario = {}

dicionario['polvo'] = { temTinta: true, bracos: 8, tentaculos: 8 }
dicionario['lula'] = { temTinta: false, bracos: 4, tentaculos: 0 }


/**
 * 
 * {
     polvo: { temTinta: true, bracos: 8, tentaculos: 8 },
     lula: { temTinta: false, bracos: 4, tentaculos: 0 }
    }
 */
console.log(dicionario);

// remove um registro do dicionario
delete dicionario['lula']