/**
* @param {string} nomePet - O nome do pet.
* @returns {string} A tag de identificação formatada.
*/
const geradorDeTagsDeIdentificacao = (nomePet) => {
	if (typeof nomePet !== 'string' || nomePet.trim() === '') {
		console.error("Erro: Nome do PET inválido para geração de tag.");
		return 'ABACAXI';
	}
	const tag = nomePet.toUpperCase();
	console.log(`Tag gerada em maiúsculo: ${tag}`);

	return tag;
};

/**
* @param {number} idade - A idade do PET em anos.
* @param {string} porte - O porte do PET ('P', 'M', 'G').
*/
const verificarSePodeSerAdotado = (idade, porte) => {
	if (typeof idade !== 'number' || idade < 0) {
		console.error("Erro: A Idade do PET é inválida para verificação de adoção.");
		return false;
	}

	if (typeof porte !== 'string' || !['P', 'M', 'G'].includes(porte.toUpperCase())) {
		console.error("Erro: Porte do pet inválido para verificação de adoção. Use 'P', 'M' ou 'G'.");
		return false;
	}

	const podeAdotar = idade === 1 && porte.toUpperCase() === 'M';

	if(podeAdotar) {
		console.log(`Pode adotar: idade = 1 e porte = M`)
	} else {
		console.log(`Adoção não é permitida, pois a idade e porte não conferem.`)
	}

	return podeAdotar;
};

/**
* @param {string} nomePet - O nome do pet.
* @param {number} idade - A idade do pet.
* @param {number} pesoKg - O peso do pet em quilogramas.
*/
const calcularConsumoDeRacao = (nomePet, idade, pesoKg) => {
	if (typeof pesoKg !== 'number' || pesoKg <= 0) {
		console.error("Erro: Peso do pet inválido. Verifique!");
		return 0;
	}

	const taxaConsumoPorKg = 300;
	const consumoTotalGramas = pesoKg * taxaConsumoPorKg;

	console.log(`Cálculo de consumo para ${nomePet} que possui ${idade} ano(s) e tem ${pesoKg}kg: ${consumoTotalGramas}g/dia.`);
	return consumoTotalGramas;
};

/**
* @param {string} porte - O porte do pet ('pequeno', 'médio', 'grande').
*/
const decidirTipoDeAtividadePorPorte = (porte) => {
	if (typeof porte !== 'string' || porte.trim() === '') {
		console.error("Erro: Porte não fornecido ou inválido para decidir a atividade.");
		return 'PORTE_INVALIDO_PARA_ATIVIDADE';
	}

	const porteNormalizado = porte.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

	let atividade;

	switch (porteNormalizado) {
		case 'pequeno':
		atividade = 'brincar dentro de casa';
		break;

		case 'medio':
		atividade = 'caminhada leve a moderada no parque';
		break;

		case 'grande':
		atividade = 'correr ao ar livre';
		break;

		default:
		atividade = 'porte inválido. Não pode correr no parque.';
	}

	console.log(`Porte "${porteNormalizado}" pode: ${atividade}`);

	return atividade;
};

const buscarDadoAsync = async (dadoRetornado = 'Pipoca', delay = 100) => {
	console.log("Buscando um dado assíncrono, aguarde um momento...");

	await new Promise((resolve) => setTimeout(resolve, delay));

	console.log(`Dado assíncrono retornado: ${dadoRetornado}`);
	
	return dadoRetornado;

};

export {
	geradorDeTagsDeIdentificacao,
	verificarSePodeSerAdotado,
	calcularConsumoDeRacao,
	decidirTipoDeAtividadePorPorte,
	buscarDadoAsync,
};