
/**

Validador de nomes para as tags

Alguns donos estão registrando os dogs com nomes mal formatados. Crie um script para limpar e padronizar os nomes.

Aplique as formatações e exiba:
- O nome original, como foi cadastrado
- O nome formatado

Extra: aplique uma regra que confira se o nome informado possui apenas uma palavra. Exiba se o nome é válido ou não.

Exemplos:

  - nomes válidos
    - Pipoca
    - Guaraná
    - Paçoca
  - nomes inválidos
    - Peggy Carter
    - Pantera Negra

 */


const nomeDog = "Darth Vader @";

// Remove caracteres especiais e espaços
let nomeFormatado = removerCaracteresEspeciais(nomeDog).trim();

// Verifica se é uma única palavra após remoção
const valido = nomeFormatado.length > 0;

// Capitaliza a palavra final
nomeFormatado = capitalizarPalavra(nomeFormatado);

function removerCaracteresEspeciais(nome) {
    return nome
        .replace(/[^a-zA-ZÀ-ÿ\s]/g, ""); // Mantém letras e espaços
}

function capitalizarPalavra(nome) {
    return nome
        .split(' ')
        .filter(Boolean)
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase())
        .join(' ');
}

console.log("Nome original:", nomeDog);
console.log("Nome formatado:", nomeFormatado);
console.log("É válido:", valido);
