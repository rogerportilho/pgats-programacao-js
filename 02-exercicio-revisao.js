<<<<<<< HEAD
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

const nome = 'Luke'; // Nome do dog
const idade = 3; // Idade do dog
const idadeMinima = 2; // Idade mínima do dog para adoção
const porte = 'M'; // Indica se o dog é de pequeno porte

const adocao = idade >= idadeMinima
                ? 'sim'
                : porte === 'P'
                ? 'sim'
                : 'não';

// Exibe o resultado
console.log("Nome do Dog:", nome);
console.log("Idade:", idade, "ano(s)");
console.log("Pequeno porte:", porte === 'P' ? "Sim" : "Não");
console.log("Apto para adoção:", adocao === 'sim' ? "Sim" : "Não");
=======
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

const nome = 'Luke'; // Nome do dog
const idade = 3; // Idade do dog
const idadeMinima = 2; // Idade mínima do dog para adoção
const porte = 'M'; // Indica se o dog é de pequeno porte

const adocao = idade >= idadeMinima
                ? 'sim'
                : porte === 'P'
                ? 'sim'
                : 'não';

// Exibe o resultado
console.log("Nome do Dog:", nome);
console.log("Idade:", idade, "ano(s)");
console.log("Pequeno porte:", porte === 'P' ? "Sim" : "Não");
console.log("Apto para adoção:", adocao === 'sim' ? "Sim" : "Não");
>>>>>>> 74326a0a2355f6cc3bfe841745f5bc062cedd69e
