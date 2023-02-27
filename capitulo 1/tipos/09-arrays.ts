// declarando um array de strings
const dibradores: string[] = ['Neymar', 'Ronaldinho', 'Felipe'];

//iterando sobre cada item do array com for
for (let jogador = 0; jogador < dibradores.length; jogador++) {
    console.log(dibradores[jogador]);
}

// ------------------------------------------

interface Monumento {
    nome: String;
    alturaEmMetros: number;
}

const monumentos: Monumento[] = [];

monumentos.push({
    nome: 'cristo redentor',
    alturaEmMetros: 30
})

monumentos.push({
    nome: 'buda',
    alturaEmMetros: 20
})

monumentos.push({
    nome: 'torre eiffel',
    alturaEmMetros: 50
})

console.log(monumentos[2].nome)