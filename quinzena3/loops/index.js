// console.log("Oie, eu só sirvo pra saber se as coisas funcionaram!")

//----------------> EXERCÍCIO 1
//O código é sobre laços de repeditações, onde valores são iterados em ambdas variáveis, até chegar na condição desejada.
// será impresso: 10.

//-----------------> EXERCÍCIO 2    
//A.
//19
//21
//23
//25
//27
//30

//B.
//Não, pois o for..of faz iteração dos itens do array sem usar o indice para o acesso.

//-------------------> EXERCÍCIO 3

const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

// A.

// for (let elemento of array) {
//     console.log(elemento)
// }

// B.

// for (let elemento of array) {
//     console.log(elemento / 10)
// }

//C.

// let novoArray = []

// for (let elemento of array) {
//     if (elemento % 2 === 0) {
//         novoArray.push(elemento)
//     }
// }

// console.log(novoArray)

// D.

// for (let i = 0; i < array.length; i++) {
//     console.log("O elemento do índex ", i, "é: ", array[i])
// }

//E.

let maiorNumero = array[0]
let menorNumero = array[0]

for (let elemento of array) {
    if (elemento > maiorNumero) {
        maiorNumero = elemento
    }
    if (elemento < menorNumero) {
        menorNumero = elemento
    }
}

console.log("O maior número é ", maiorNumero)
console.log("O menor número é ", menorNumero)
