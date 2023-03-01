class Musica {
    constructor(private artista: string, private nomeDaMusica: string) {
    }

    play() {
        console.log('Tocando ' + this.nomeDaMusica + 'by ' + this.artista);
    }
}


class TocadorDeMusica {
    constructor(private musicas: Musica[]) {
    }

    play() {
        const musica = this.getMusicaAleatoria();
        musica.play();
    }

    private getMusicaAleatoria() {
        const quantidadeDeMusicas = this.musicas.length;
        const indiceDaMusica = Math.floor(Math.random() * quantidadeDeMusicas);

        return this.musicas[indiceDaMusica];
    }
}

const musicas = [
    new Musica('Bushbaby', 'Megaphone'),
    new Musica('Delays', 'One More Lie In'),
    new Musica('Goober Gun', 'Stereo'),
    new Musica('Sohnee', 'Shatter'),
    new Musica('Get Amped', 'Celebrity')
]

const tocadorDeMusica = new TocadorDeMusica(musicas);

tocadorDeMusica.play();
