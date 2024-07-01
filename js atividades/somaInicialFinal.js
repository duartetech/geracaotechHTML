let n1 = Number(prompt('Digite o primeiro numero:'))
let n2 = Number(prompt('Digite o segundo numero:'))

function inicialFinal(n1=0,n2=0){
    let soma = Number(0)

    for(let i = n1; i <= n2; i++){
        soma+=i
    }
    return soma
}

alert(inicialFinal(n1,n2))