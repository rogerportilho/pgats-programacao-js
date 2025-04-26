/**Pet

Crie um script que defina o plano de atividades para os dogs durante a estadia. 
O script vai receber o porte (pequeno, médio ou grande); 
e o tempo disponível para a atividade representado em minutos. 

Exemplo:
Pantera - Médio - 45

Use uma condicional para decidir o tipo de atividade com base no porte: 
pequeno -> brincar dentro de casa
médio -> caminhada no quarteirão
grande -> correr no parque
qualquer outro -> porte inválido

Depois, uma condicional para ajustar a mensagem de acordo com o tempo: 
menor que 15 -> "atividade rápida: [atividade]"
de 15 a 30 -> "tempo ideal: [atividade]"
acima de 30 -> "hora da diversão: [atividade]

*/

// Definições iniciais
const nome = "Pantera"; 
const porte = "Médio"; 
const tempoDisponivel = 45; 

let tipoAtividade;
let tempoAtividade;

function atividadeDog(nome, porte, tempoDisponivel) {
// Atividade de acordo com o porte
if (porte.toLowerCase() === "pequeno") {
    tipoAtividade = "brincar dentro de casa";
} else if (porte.toLowerCase() === "médio") {
    tipoAtividade = "caminhada no quarteirão";
} else if (porte.toLowerCase() === "grande") {
    tipoAtividade = "correr no parque";
} else {
    tipoAtividade = "porte inválido";
}

// Tempo de atividade
if (tipoAtividade === "porte inválido") {
    tempoAtividade = "Não é possível definir atividade para porte inválido.";
} else if (tempoDisponivel < 15) {
    tempoAtividade = `Atividade rápida: ${tipoAtividade}`;
} else if (tempoDisponivel <= 30) {
    tempoAtividade = `Tempo ideal: ${tipoAtividade}`;
} else {
    tempoAtividade = `Hora da diversão: ${tipoAtividade}`;
}

console.log('--------------------')
console.log(`Nome do Dog: ${nome}`);
console.log(`Porte: ${porte}`);
console.log(`Tempo disponível: ${tempoDisponivel} minutos`);
console.log(tempoAtividade);
console.log('--------------------')

}

atividadeDog('Thor', 'Pequeno', 60)
atividadeDog('Marie', 'Médio', 30)
atividadeDog('Kano', 'Grande', 15)
atividadeDog('Liu kang', '', 60)
atividadeDog('Kitana', 'Grande', 60)

