let opcao, pesos = Number(0)
let somaNotas = Number(0)


opcao = Number(prompt("1 - aritmetica\n2 - ponderada"))
if (opcao == 1) {
    for ( let i = 1 ; i <=4; i++){
        somaNotas+= Number(prompt('digite a nota nº '+i))
   }
   document.write(`a sua média aritmetica é: ${somaNotas/4}`)
} else if(opcao == 2) {
    for ( let i = 1 ; i <=4; i++){
        if(i%2 == 0){
            somaNotas+= (Number(prompt('digite a nota nº '+i))*2)
            pesos+=2
        } else if(i==3){
            somaNotas+= (Number(prompt('digite a nota nº '+i))*3)
            pesos+=3
        }
        else {
            somaNotas+= Number(prompt('digite a nota nº '+i))
            pesos+=1
        }
   }
   document.write(`a sua média ponderada é: ${(somaNotas/pesos).toFixed(2)}`)
} else (
    alert("opção invalida")
)
