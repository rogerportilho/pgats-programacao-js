/**
 * Crie uma função que pega uma lista de inteiros 
 * e strings e retorna uma nova lista sem as strings. 
 * 
 */

function filtrarNumeros(lista) {
    return lista.filter(item => typeof item === 'number');
  }
  
  const listaFilmesStarWars = [
    1, "A Nova Esperança",
    2, "O Império Contra-Ataca",
    3, "O Retorno de Jedi",
    4, "A Ameaça Fantasma",
    5, "Ataque dos Clones",
    6, "A Vingança dos Sith",
    7, "O Despertar da Força",
    9, "Os Últimos Jedi",
    10, "A Ascensão Skywalker"
  ];

  const apenasNumeros = filtrarNumeros(listaFilmesStarWars);

  console.log("StarWars - Episódio: ", listaFilmesStarWars);
  console.log(" Número dos Episódio: ", apenasNumeros);