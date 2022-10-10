const numeroMaximo = 20
console.log(`O número máximo é: ${numeroMaximo}`)

exibirPrimos(numeroMaximo)

function exibirPrimos(numeroMaximo){
    console.log("Números Primos:")
    for(let num = 2; num <= numeroMaximo; num++){
        if(ehPrimo(num)) console.log(num)
    }
}

function ehPrimo(num){
    for(let antecessor = 2; antecessor < num; antecessor++){
        if(num % antecessor === 0){
            return false
        } 
    }
    return true
}