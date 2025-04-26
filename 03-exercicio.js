<<<<<<< HEAD
/**
 * Calculadora de ração diária
 * 
 * Crie um script que receba o peso do dog em Kg + estoque atual de ração em gramas. 
 * Calcule a quantidade diária de ração com base na seguinte fórmula: Gramas por dia = peso x 30 gramas
 * 
 * Exiba:
 * - Nome do Dog;
 * - Peso;
 * - Quantidade de ração recomendada por dia;
 * - Quantos dias o estoque atual vai durar.
 */

// Calculadora de ração diária

const nome = "Luke"; 
const pesoKg = 10; 
const estoqueGramas = 3000;


const gramasPorDia = pesoKg * 30;

// Quantos dias o estoque vai durar
const diasDeEstoque = Math.floor(estoqueGramas / gramasPorDia);

// Exibe o resultado
console.log(" 🦮 Nome do Dog:", nome);
console.log(" ⚖️  Peso:", pesoKg, "Kg");
console.log(" 🍖 Quantidade de ração recomendada por dia:", gramasPorDia, "g");
console.log(" 📦 O estoque atual deve durar aproximadamente:", diasDeEstoque, "dia(s)\n");


//Alternativa com função

function calcularConsumoDeRacao(nome, pesoKg, estoqueGramas) {
    const gramasPorDia = pesoKg * 30;

    // Quantos dias o estoque vai durar
    const diasDeEstoque = Math.floor(estoqueGramas / gramasPorDia);
    
    // Exibe o resultado
    console.log(" 🦮 Nome do Dog:", nome);
    console.log(" ⚖️  Peso:", pesoKg, "Kg");
    console.log(" 🍖 Quantidade de ração recomendada por dia:", gramasPorDia, "g");
    console.log(" 📦 O estoque atual deve durar aproximadamente:", diasDeEstoque, "dia(s) \n");
}

calcularConsumoDeRacao('Ada', 1 ,2000)
=======
/**
 * Calculadora de ração diária
 * 
 * Crie um script que receba o peso do dog em Kg + estoque atual de ração em gramas. 
 * Calcule a quantidade diária de ração com base na seguinte fórmula: Gramas por dia = peso x 30 gramas
 * 
 * Exiba:
 * - Nome do Dog;
 * - Peso;
 * - Quantidade de ração recomendada por dia;
 * - Quantos dias o estoque atual vai durar.
 */

// Calculadora de ração diária

const nome = "Luke"; 
const pesoKg = 10; 
const estoqueGramas = 3000;


const gramasPorDia = pesoKg * 30;

// Quantos dias o estoque vai durar
const diasDeEstoque = Math.floor(estoqueGramas / gramasPorDia);

// Exibe o resultado
console.log(" 🦮 Nome do Dog:", nome);
console.log(" ⚖️  Peso:", pesoKg, "Kg");
console.log(" 🍖 Quantidade de ração recomendada por dia:", gramasPorDia, "g");
console.log(" 📦 O estoque atual deve durar aproximadamente:", diasDeEstoque, "dia(s)\n");


//Alternativa com função

function calcularConsumoDeRacao(nome, pesoKg, estoqueGramas) {
    const gramasPorDia = pesoKg * 30;

    // Quantos dias o estoque vai durar
    const diasDeEstoque = Math.floor(estoqueGramas / gramasPorDia);
    
    // Exibe o resultado
    console.log(" 🦮 Nome do Dog:", nome);
    console.log(" ⚖️  Peso:", pesoKg, "Kg");
    console.log(" 🍖 Quantidade de ração recomendada por dia:", gramasPorDia, "g");
    console.log(" 📦 O estoque atual deve durar aproximadamente:", diasDeEstoque, "dia(s) \n");
}

calcularConsumoDeRacao('Ada', 1 ,2000)
>>>>>>> 74326a0a2355f6cc3bfe841745f5bc062cedd69e
calcularConsumoDeRacao('Thor', 16, 15000)