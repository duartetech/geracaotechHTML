let fila = ['ana', 'julia', 'maria', 'samira', 'mario','pedro','paulo','cleitinho','grethen','clodovil']
let ultimosAtendidos = []
let atendimentoAmanha = []
//3 pessoas serão atendidas
for(let i = 1; i<=3; i++){
    let ultimo = fila.shift() //remove a primeira pessoa da fila
    ultimosAtendidos.unshift(ultimo) //adiciona a pessoa removida ao inicio da fila de atendidos
}

let novoTamanhoFila = fila.length //7

for(let i = 1; i <= novoTamanhoFila; i++){
    let proximo = fila.shift()
    atendimentoAmanha.push(proximo)
}

let numeros = [1,2,3]
function multiplicar(num){
    return num**2
}

let numerosAoQuadrado = numeros.map((item)=>multiplicar(item))

console.log(numeros)
console.log(numerosAoQuadrado)
