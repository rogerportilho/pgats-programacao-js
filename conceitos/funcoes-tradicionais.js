function ebibirNomeDoDog(nome) {
    console.log(nome)
};

function exibirPorteDoDog(porte = 'ND') {
    console.log(porte)
};

function obterNomeDoDogFormatado(nome) {
    return nome.toUpperCase()
};

function obterObjetoDog() {
    return {
        nome: 'Bailey Maria',
        peso: 11.5,
        dogIrmao: {
            nome: 'Caramelo'
        },
        adotado: true
    }
}

function listarObjetoDog() {
    return [{
        nome: 'Bailey Maria',
        peso: 11.5
    }]
}

function listarDeNomesDeDogs() {
    const nomes = [
        "Pipoca",
        "Amendoim",
        "Caramelo"
    ]

    return nomes
}


ebibirNomeDoDog("Pipoca")
exibirPorteDoDog()
console.log(obterNomeDoDogFormatado("Bailey Maria"))
console.log(obterObjetoDog())
console.log(listarDeNomesDeDogs())
console.log(listarObjetoDog())