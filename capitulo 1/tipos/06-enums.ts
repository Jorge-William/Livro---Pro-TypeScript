enum tipoVehicle {
    carro,
    van,
    bicicleta,
    motocicleta,
    onibus
}

const tipo = tipoVehicle.van;

// van
console.log(tipoVehicle[tipo]);


enum box {
    small, big, medium
}

enum box {
    large = 3,
    xLarge,
    xSmall
}

const tamanho = box.big

enum Direction {
    up = "U",
    down = "DOW",
    left = "LEF",
    right = "RIGH"
}

const result = Direction.right
console.log(result);


enum Jogadores {
    goleiro = 'Matheus Cunha',
    zagueiroDir = 'Pablo',
    zagueiroEsq = 'Rodrigo Caio',
    lateralDir

}
