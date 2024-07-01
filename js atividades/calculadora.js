let operador = prompt('Digite a operação matematica que você deseja utilizar:\n1 - Somar\n2 - Subtrair\n3 - Multiplicar\n4 - Dividir')
let n1 = Number(prompt('Digite o primeiro numero:'))
let n2 = Number(prompt('Digite o segundo numero:'))

function somar(n1,n2){
    return (n1+n2)
}
function subtrair(n1,n2){
    return (n1-n2)
}
function multiplicar(n1,n2){
    return (n1*n2)
}
function dividir(n1,n2){
    return (n1/n2)
}
function calculadora(n1,n2,operador){
    let funcao = eval(operador)
    let operacao = funcao(n1,n2)
    alert(operacao)
}

calculadora(n1,n2,funcao)