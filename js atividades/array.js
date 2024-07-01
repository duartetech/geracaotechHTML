function calcularMedia(){
    let contador = Number(prompt('quantas notas você deseja calcular a media'))
    let notas = []
    let somaNotas = Number(0)
    for(let i = 0; i <= (contador-1); i++){
        notas[i] = Number(prompt(`digite a ${i+1}ª nota`))
        somaNotas+=notas[i]
    }
    return (somaNotas/contador).toFixed(2)
}

alert(calcularMedia())