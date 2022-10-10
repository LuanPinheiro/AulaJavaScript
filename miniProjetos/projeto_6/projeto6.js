const filme = {
    nome: "Moonage Daydream",
    diretor: "Brett Morgen",
    ano: 2022,
    duracao: 2.25,
    personagem: "David Bowie"
}

exibirPropriedades(filme)

function exibirPropriedades(filme){
    for(let strings in filme){
        typeof(filme[strings]) === 'string' ? console.log(strings ,filme[strings]):null
    }
}