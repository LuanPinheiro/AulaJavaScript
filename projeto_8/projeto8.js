const notas = [85, 90, 70]

console.log(mediaDoAluno(notas))

function mediaDoAluno(notas){
    const media = calcularMedia(notas)

    if(media < 59) return 'F'
    if(media < 69) return 'D'
    if(media < 79) return 'C'
    if(media < 89) return 'B'
    if(media <= 100) return 'A'
}

function calcularMedia(notas){
    let media = 0
    console.log(`O aluno possui ${notas.length} notas:`)
    for(let valor of notas){
        console.log(valor)
        media += valor
    }
    console.log(`Média final do aluno: ${media/notas.length}`)
    return media / notas.length
}