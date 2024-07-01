let quantNum = Number(0)
for (let i = 0; i <10; i++) {
    let num = Number(prompt('digite o numero '+(i+1)))
    if(num>30 && num<90){
        quantNum++ 
    }
    
}
alert(`a quantidade de numeros entre entre 30 e 90 é ${quantNum}`)

let num1 = Number(prompt(`digite um numero para iniciar uma contagem`))
let num2 = Number(prompt(`digite um numero para terminar a contagem`))
for (let i = num1; i<num2; i++){
    document.write(`${i}<br>`)
}