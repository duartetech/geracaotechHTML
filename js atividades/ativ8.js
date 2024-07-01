let numeros = menorNumero = maiorNumero = Number(prompt(`digite o 1º numero a ser comparado:`))
let qtdNumeros = 10
for(let i = 2; i <= qtdNumeros; i++){
    numeros = Number(prompt(`digite o ${i}º numero a ser comparado:`))
    if(numeros > maiorNumero){
        maiorNumero = numeros
    } else if (numeros<menorNumero){
        menorNumero = numeros
    }

}
document.write(`o maior numero é: ${maiorNumero}<br>`)
document.write(`o menor numero é: ${menorNumero}<br>`)