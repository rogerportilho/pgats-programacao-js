/**
 * Dado que você tenha uma lista de brinquedos com: Bola, Osso, Corda, Sino
 * Crie um script que passe pela lista de brinquedos e entregue um por vez. 
 * Exiba o nome de cada brinquedo que for entregue. 
 * 
 * Use a estrutura de repetição forEach.
 * 
 * Extra: Transforme a lógica em uma função (da forma como conseguir)
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


brinquedosDog.forEach(brinquedo => {
    console.log(`Entregando o brinquedo - ${brinquedo}`)
})

console.log(`Todos os brinquedos foram entregues!`)