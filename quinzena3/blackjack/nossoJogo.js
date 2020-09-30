/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Bem vindo ao jogo de Blackjack!")

while (confirm("Quer iniciar uma nova rodada?")) {
   const carta1Jogador = comprarCarta()
   const carta2Jogador = comprarCarta()

   const carta1Computador = comprarCarta()
   const carta2Computador = comprarCarta()

   const pontuacaoJogador = carta1Jogador.valor + carta2Jogador.valor
   const pontuacaoComputador = carta1Computador.valor + carta2Computador.valor

   console.log("Usuário - cartas: ", carta1Jogador.texto, " ", carta2Jogador.texto, " - pontuação: ", pontuacaoJogador)
   console.log("Computador - cartas: ", carta1Computador.texto, " ", carta2Computador.texto, " - pontuação: ", pontuacaoComputador)

   if (pontuacaoJogador > pontuacaoComputador) {
      console.log("O usuário ganhou!")
   } else if (pontuacaoComputador > pontuacaoJogador) {
      console.log("O computador ganhou!")
   } else {
      console.log("Empate!")
   }
}

console.log("O jogo acabou")
   

