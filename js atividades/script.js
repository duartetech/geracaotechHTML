let senha = 123
let senhaUser = prompt('Digite a senha')
let tentativas = 3
let contTentativas = 1

if (senha == senhaUser){
    alert('Entrou na conta')
} else {
    while (senha != senhaUser && contTentativas<3){
        senhaUser = prompt(`Senha incorreta\nVocê tem ${tentativas-contTentativas} tentativas: Digite novamente a senha`)
        if (senha == senhaUser){
        alert('Entrou na conta')
        } else {
        contTentativas+=1
        }
    }
}