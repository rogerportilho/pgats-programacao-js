/**
 * 
 * Sintaxe antiga: CommonJS:
 * module.exports = {} / require('')
 * 
 * Passamos a utilizar o ESM (Ecmascript Standard Modules) 
 * não necessitando mais o uso do CommonJS, utilizando apenas export {} / import 
 * 
 * No terminal usar npm init -y (iniciar um projeto npm e -y responder as perguntas)
 * isso irá gerar o package.json
 * 
 * Agora precisa usar uma biblioteca para testes por exemplo, preciso de uma estrutura para o projeto antes, como fazer?
 * adcionar a estrutura e adicionar as bibliotecas. 
 * 
 * Aqui no exemplo usaremos o node - v8 - motor de execução de códigos JS fora do Browser
 * E o NPM que é gerenciador de pacotes (node package manager)
 * 
 * NPM será inciado como init que inicializa um projeto npm (forma de exportar/ importar módulos ou pacotes,
 * instalar pacotes no proejto, executar pacotes no projeto e organizar pacotes que vão para produção ou somente local,
 * install = adicionar um pacote no projeto,
 * npx = executar um pacote já instalado (node Package executor))
 */

const brinquedosDog = [
    'Bola',
    'Osso',
    'Corda',
    'Sino',
    'Pato de borracha',
    'Estrela',
    'garrafa PET'
]

function exibirNomePet(paramNomePet) {
    console.log(`O nome do pet é ${paramNomePet}`)
}

function exibirIdade(paramIdadePet) {
    console.log(`Idade do pet é ${paramIdadePet}`)
}