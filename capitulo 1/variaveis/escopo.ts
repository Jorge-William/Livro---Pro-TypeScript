let escopoGlobal: number = 4;


{
	let escopoDeBloco: number = 10;


	escopoGlobal = 100;


	// essa variável esta indisponível fora de seu escopo
	escopoAninhado = 8;

	{
		let escopoAninhado: number = 40;

		// Esta variével é de um escopo externo o por isso pode ser alterada em um escopo mais interno
		escopoGlobal = 3


	}

}

// essa variável esta indisponível fora de seu escopo
escopoDeBloco = 1





