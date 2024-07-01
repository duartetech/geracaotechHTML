let numeros, somaNumeros = Number(0)
for(let i = 0; i < 10; i++){
    numeros = Number(prompt(`digite o ${i+1}º numero a ser somado:`))
    somaNumeros+=numeros
    alert(somaNumeros)
}
document.write(`${somaNumeros}<br>`)