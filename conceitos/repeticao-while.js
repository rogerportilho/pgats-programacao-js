/**
 * 
 * enquanto (pet nao estiver cansado); faça {
 *  dar uma volta na quadra
 * }
 */

let voltasAteFicarCansado = 5
let quantidadeDeVoltasAtual = 0

while (quantidadeDeVoltasAtual < voltasAteFicarCansado) {
    console.log('Dar uma volta na quadra')

quantidadeDeVoltasAtual++

}


console.log('-----------------------------------------------------')


let voltasParaDogFicarSatisfeito = 5
let volta = 1 

while(volta <= voltasParaDogFicarSatisfeito) {
    console.log(`Volta de nº ${volta} com o Pitoco`)

    volta++
}

console.log('Acabooooou o passeio, Pitoco!')

console.log('-----------------------------------------------------')


function verificarSeDogEstaSatisfeito() {
    let voltasParaDogFicarSatisfeito = 5
    let volta = 0

    while(volta <= voltasParaDogFicarSatisfeito) {
        console.log(`Volta de nº ${volta} com o Pitoco`)
        console.log(`Pitoco ainda não está satisfeito`)

        volta++
    }

    console.log('Acabooooou o passeio, Pitoco! Agora sim ele está satisfeito')
}

verificarSeDogEstaSatisfeito()