/**
 * Retorne o número de vogais no texto fornecido. Consideraremos a, e, i, o e u 
 * como vogais para este Kata . 
 * O texto de entrada conterá apenas letras minúsculas e/ou espaços. 
 * Letras acentuadas não fazem parte desse desafio.  
 * 
 */

function contarVogais(texto) {
    const vogais = ['a', 'e', 'i', 'o', 'u'];
    return texto
      .toLowerCase()
      .split('')
      .filter(letra => vogais.includes(letra)).length;
  }
  
  const frase = "May the force be with you";
  const numeroDeVogais = contarVogais(frase);
  
  console.log(`Frase: "${frase}"`);
  console.log(`Número de vogais: ${numeroDeVogais}`);
  
  