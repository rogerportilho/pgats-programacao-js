/**Classificador de porte automático 

Muitos tutores não fazem ideia do porte com base no peso de forma
simplificada, sendo:

- Até 10Kg -> Pequeno; acima disso -> Médio 

Use o operador ternário para determinar o porte. Exiba:
- Nome
- Peso
- Porte classificado

Extra: Transforme a lógica em função;

*/

const nome = 'Ada'
const peso = 5.5

const porte = peso <= 10 ? 'pequeno' : 'medio'

console.log(`--------`)
console.log(`Nome: ${nome}`)
console.log(`Peso: ${peso}`)
console.log(`Porte: ${porte}`)
console.log(`--------`)


//Alternativa com função:

function classificarPortePorPeso(nome, peso) {
    const porte = peso <= 10 ? 'pequeno' : 'medio'

    console.log(`--------`)
    console.log(`Nome: ${nome}`)
    console.log(`Peso: ${peso}`)
    console.log(`Porte: ${porte}`)
    console.log(`--------`)
}

classificarPortePorPeso('Pantera', 14.5)
classificarPortePorPeso('Caramelo', 10)
classificarPortePorPeso('Thor', 5)


