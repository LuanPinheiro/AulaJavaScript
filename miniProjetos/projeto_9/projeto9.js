const linhas = 10

exibirAsteriscos(linhas)

function exibirAsteriscos(linhas){
    for(let qtd = 1; qtd <= linhas; qtd++){
        let asteriscos = ''
        for(let i=0; i<qtd; i++){
            asteriscos += '*'
        }
        console.log(asteriscos)
    }
}