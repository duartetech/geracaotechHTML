let valorCompra = Number(500)
let porcentagem = Number(0.01)
for(let i = 0; i < 25; i++){
    document.write(`Valor da Compra: R$${valorCompra} | ${(porcentagem*100).toFixed()}% de desconto | Valor final: ${valorCompra-(valorCompra*porcentagem)}<br> `)
    valorCompra+=100
    porcentagem+=0.01
}