/**
 * para, faca 
 *      contador; condicao; manipulacao do contador (incremento/ decremento)
 *      quantidadeDePetiscos; quantidadeDePetiscos <= quantidadeCalculada; quantidadeDePetiscos++
*/

const quantidadeCalculada = 3
const gatos = ['Lessie', 'Pony', 'Fumaca']

for(let quantidadeDePetiscos = 0; quantidadeDePetiscos < gatos.length; quantidadeDePetiscos++) {
    
    console.log(`Dando o petisco de nº ${quantidadeDePetiscos}`)
    console.log(`Para o gato ${gatos[quantidadeDePetiscos]}`)
}