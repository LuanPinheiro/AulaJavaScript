const velocidade = 85

radar(velocidade)

function radar(velocidade){
    const velocidadeLimite = 70
    const KmPorPonto = 5
    const maximoPontos = 12

    if (velocidade <= velocidadeLimite){
        console.log("Velocidade Permitida")
    }
    else{
        const pontos = Math.floor((velocidade - velocidadeLimite) / KmPorPonto) // A cada 5km/h acima do limite de velocidade é adicionado +1 ponto na carteira
        console.log(pontos >= maximoPontos ? "Carteira Suspensa":`+${pontos} na carteira`)
    }
}