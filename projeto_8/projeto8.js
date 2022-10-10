const notas = [85, 90, 70]

console.log(mediaDoAluno(notas))

function mediaDoAluno(notas){
    let media = 0
    let qtd_notas
    
    for(qtd_notas in notas){}
    qtd_notas++
    console.log(`O aluno possui ${qtd_notas} notas:`)
    for(let soma of notas){
        console.log(soma)
        media += soma
    }

    media/=qtd_notas
    console.log(`Média final do aluno: ${media}`)

    if(media < 59) return 'F'
    if(media < 69) return 'D'
    if(media < 79) return 'C'
    if(media < 89) return 'B'
    if(media <= 100) return 'A'
}