let notas  = Number(0)
let alunos = Number(prompt("quantos alunos tem na sala?"))
for (let i = 1; i <=alunos; i++){
    notas+= Number(prompt('digite a nota do aluno nº '+i))
}
document.write(`a media da nota dos alunos da sala é ${notas/alunos}`)