/**
 *  Controle de Petiscos
 * 
 * Crie um script que receba uma quantidade de petiscos e dê 1 por vez até o dog estiver satisfeito.
 * 
 * Use a estrutura de repetição for contador
 * 
 * Exiba:
 * Cada vez que um petisco for entregue 
 * Quando o dog estiver satisfeito (que é quando terminar os petiscos)
 * 
 * Extra: transforme a lógica em uma função (de forma que conseguir)
 */
const quantidadePetiscosDisponiveis = 4

for (let petisco = 1; petisco <= quantidadePetiscosDisponiveis; petisco++ ) {
    console.log(`Dando o petisco de nº ${petisco} para o Totó`)
}

console.log(`Satisfeito, chega de petiscos por hoje!`)

console.log(`---------------------------------------------`)

function alimentar(...petiscos) {
    let chance = 0;
    let dogEstaCheio = false;

    for (let i = 0; i < petiscos.length; i++) {
        chance += 5 // soma as chances em % por petiscos
        const random = Math.random() * 100; // numero randomico entre 0 e 100

    console.log(`Petisco ${i + 1}: Cachorro comeu "${petiscos[i]}". Chance de estar cheio: ${chance}%.`);

    if(random < chance) {
        console.log("O cachorro está cheio!");
        dogEstaCheio = true;
        break;
    } else {
        console.log("O cachorro ainda está com fome!");
        }
    }
}

alimentar("Biscoito", "Carne", "Ovo", "Ração", "Banana");