let entrada = 11
const resultado = fizzBuzz(entrada)
console.log(`Entrada: ${entrada}`)
console.log(`Retorno: ${resultado}`)

function fizzBuzz(entrada){
    if(typeof(entrada) !== 'number'){
        return 'Não é um numero'
    }

    let retorno = '' // Iniciando a variável como string

    // Concatenando as palavras do possivel retorno
    if(entrada % 3 === 0){
        retorno += "Fizz"
    }
    if(entrada % 5 === 0){
        retorno += "Buzz"
    }

    return retorno === '' ? entrada:retorno
}