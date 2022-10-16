function faixaDePreco(minimo, maximo){
    this.precoMax = minimo
    this.precoMin = maximo
    this.tooltip = `Até R$${maximo}` 
}

let faixas = [
    new faixaDePreco(50,100),
    new faixaDePreco(200,300),
    new faixaDePreco(500,1000)
]
console.log(`Faixas de Preço:`, faixas)