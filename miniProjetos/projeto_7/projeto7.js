let entrada = 10
console.log(`O numero máximo que será somado é ${entrada}`)

somar(entrada)

function somar(limite){
    let somaFinal = 0
    for(let numero = 0; numero <= limite; numero++){
        if(numero%3 === 0 || numero%5 === 0){
            somaFinal += numero
        }
    }
    console.log(`A soma dos multiplos de 3 e 5 é: ${somaFinal}`)
}