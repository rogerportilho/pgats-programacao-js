/**Exercício Individual
Programação para Automação de Testes
Hands-on
Validador de idade mínima para adoção
Crie um script que verifique se um dog pode ser adotado com base na idade mínima 
definida, por exemplo, 2 anos.
Use os operadores adequados e exiba:
Nome do dog
Idade
Se está apto ou não para adoção
Extra: aplique uma regra com operador lógico para permitir que se o cão 
for de pequeno porte, pode ser adotado independente da idade.
 */

const nome = "Luke"; // Nome do dog
const idade = 1; // Idade do dog
let pequenoPorte = true; // Indica se o dog é de pequeno porte
let apto;

const idadeAdocao = 2; // Idade mínima para adoção

// Verifica se está apto
if (idade >= idadeAdocao || pequenoPorte) {
    apto = true;
} else if (idade > 10) {
    apto = false;
} else {
    apto = false;
}

// Exibe o resultado
console.log("Nome do Dog:", nome);
console.log("Idade:", idade, "ano(s)");
console.log("Pequeno porte:", pequenoPorte ? "Sim" : "Não");
console.log("Apto para adoção:", apto ? "Sim" : "Não");



