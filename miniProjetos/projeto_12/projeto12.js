function endereco(rua, cidade, cep){
    this.rua = rua
    this.cidade = cidade
    this.cep = cep
}

function ehIgual(endereco1, endereco2){
    for(let chave in endereco1){
        if(endereco1.chave !== endereco2.chave){
            return false
        }
    }
    return true
}

function enderecoMemoriaIgual(endereco1, endereco2){
    return endereco1 === endereco2
}

rua = 'Rua 5'
cidade = 'Salvador'
cep = '40000-100'
let novoEndereco = new endereco(rua, cidade, cep)
let novoEndereco2 = new endereco(rua, cidade, cep)
console.log(`Tem os mesmos valores? ${ehIgual(novoEndereco, novoEndereco2)}`)
console.log(`Tem o mesmo endereço de memória? ${enderecoMemoriaIgual(novoEndereco, novoEndereco2)}`)