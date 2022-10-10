const quantidadeNumeros = 10
console.log(`Número máximo a ser printado: ${quantidadeNumeros}`)
parImpar(quantidadeNumeros)

function parImpar(valores){
    for(let i=0; i<=valores; i++){
        console.log(i, i%2===0 ? "PAR":"IMPAR")
    }
}