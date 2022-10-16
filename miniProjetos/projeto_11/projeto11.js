function endereco(rua, cidade, cep){
    this.rua = rua
    this.cidade = cidade
    this.cep = cep
}

function exibirEndereco(endereco){
    for(let chave in endereco){
        console.log(chave, endereco[chave])
    }
}

rua = 'Rua 5'
cidade = 'Salvador'
cep = '40000-100'
let novoEndereco = new endereco(rua, cidade, cep)
exibirEndereco(novoEndereco);
