// --------------------> EXERCÍCIO 1
// O código verifica se os números digitados pelo usuário são pares. Para realizar o teste eles usam o resto da divisão representado pelo %.
//Para números pares ele irá imprimir "Passou no teste", e para números impares irá imprimir "Não passou no teste."

//----------------------> EXERCÍCIO 2
// a.
// Serve para passar os preços das frutas ao usuário.

// b.
// "O preço da fruta, maçã, é, R$ 2.25"

//c. 
// O preço da fruta, pêra é, R$ 5. Isso ocorre porque sem o break ele continua a execução do switch caindo no defalt.



//----------------------> EXERCÍCIO 3
// a. 
//A primeira linha temos uma constante onde o prompet pede pro usuária digitar um número, e utilizando o Number antes do prompet indicamos que será 
// trasforma a string da pergunta em número.

//b. 
// A mensagem do terminal será "Esse número passou no teste".
// Já se ele digitar -10 irá dar um erro, pois para que tenha alguma resposta false era nessário ter um else no código.

//c.
//

//----------------------> EXERCÍCIO 4

// let idade = Number(prompt("Qual a sua idade?"))

// if (idade >= 18) {
//     console.log("Você pode dirigir!")
// } else {
//     console.log("Você não pode dirigir!")
// }

//---------------------> EXERCÍCIO 5
// let turno = prompt("Em qual turno você estuda? Digite M(matutino), V(vespertino) ou N(noturno")

// if (turno === "M") {
//     console.log("Bom dia!")
// } else if (turno === "V") {
//     console.log("Boa tarde!")
// } else if (turno === "N") {
//     console.log("Boa noite!")
// } else {
    // console.log("Período não identificado")
// }

//---------------------> EXERCÍCIO 6
// let turno = prompt("Em qual turno você estuda? Digite M(matutino), V(vespertino) ou N(noturno")

// switch (turno) {
//     case "M": 
//         console.log("Bom dia!")
//         break
//     case "V":
//         console.log("Boa tarde!")
//         break
//     case "N":
//         console.log("Boa noite!")
//         break 
//     default:
//         console.log("Período não identificado")
// }


//----------------------> EXERCÍCIO 7

// let filme = prompt("Qual é o gênero do filme?")
// let valor = Number(prompt("Qual o valor do ingresso?"))

// if (filme === "fantasia" && valor <=15) {
//     console.log("Bom filme!")  
// } else {
//     console.log("Escolha outro filme :(")
// }

//---------------------> DESAFIO 1

// let filme = prompt("Qual é o gênero do filme?")
// let valor = Number(prompt("Qual o valor do ingresso?"))

// if (filme === "fantasia" && valor <= 15) {
//     let snack = prompt("Qual snack que você quer comprar?")
//     console.log("Bom filme!")  
//     console.log("... com", snack)
//  } else {
//      console.log("Escolha outro filme :(")
// }

//---------------------> DESAFIO 2
let nome = prompt("Qual é o seu nome completo?")
let tipo = prompt("Qual o tipo de jogo?")
let etapaJogo = prompt("Qual é a etapa do jogo?")
let categoria = Number(prompt("Qual é a categoria?"))
let ingresso = Number(prompt("Quantos ingressos?"))
let valor = 0

switch (etapaJogo) {
    case "SF":
        switch (categoria) {
            case 1:
                valor = 1320
                break
            case 2:
                valor = 880
                break
            case 3:
                valor = 550
                break
            case 4:
                valor = 220
                break
            default:
                break
        }
        break
    case "DT":
        switch (categoria) {
            case 1:
                valor = 660
                break
            case 2:
                valor = 440
                break
            case 3:
                valor = 330
                break
            case 4:
                valor = 170
                break
            default:
                break
        }
        break
    case "FI":
        switch (categoria) {
            case 1:
                valor = 1980
                break
            case 2:
                valor = 1320
                break
            case 3:
                valor = 880
                break
            case 4:
                valor = 330
                break
            default:
                break
        }
        break
    default:
        break
}

let total = valor * ingresso

if (tipo === "IN") {
    total = total * 4.1
}

console.log("Dados da compra")
console.log("Nome do cliente:", nome)
console.log("Tipo do jogo:", tipo)
console.log("Etapa do jogo:", etapaJogo)
console.log("Categoria:", categoria)
console.log("Quantidade de ingressos:", ingresso)

console.log("Valores")
console.log("Valor do ingresso", valor)
console.log("Valor total:", total)


    
