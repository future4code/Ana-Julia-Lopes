// ------------------ EXERCÍCIOS DE INTERPRETAÇÃO ------------------//

// 1.
// A função recebe como parâmetro um valor em dólar e retorna o valor em reais. Pegando o valor em doláres e multiplicando pela cotação.
// 553.

//------------------------------------------------------------------

// 2.
// A função investeDinheiro tem 2 parâmetros (tipoDeInvestimento e valor), o usuário vai escolher o tipo de investimento que deseja fazer e o valor, o switch case toma a desição
// com base nos parâmetros escolhidos, retornando o valorAposInvestimento.
// 165
// undefined

//-------------------------------------------------------------------

// 3.
// O código cria dois novos arrays (arry1 e array2) a partir de um array (numeros), onde no array1 ele guarda os numeros pares e o array2 
// guarda os números impares. Após isso ele imprime a quantidade total de itens do array numeros, do array 1 e do array 2.
//"Quantidade total de números , 13"
//5
// 7

// -------------------------------------------------------------------

//4.
// O código coloca o menor número do array na variável numero1 e o maior número na variável numero2. 
// -10;
// 1590;

//-------------------------------------------------------------------

// ------------------ EXERCÍCIOS DE LÓGICA DE PROGRAMAÇÃO ------------------//

// 1.
// While, for e for...of;

const numeros = [83, 45, 29, 26, 15]

let i = 0

while (i < numeros.length) {
    console.log(numeros[i])

    i++
}

for (i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

for (let numero of numeros) {
    console.log(numero)
}

//-------------------------------------------------------------------

// 2.

// a) false;
// b) false;
// c) false;
// d) true;
// e) false;

//-------------------------------------------------------------------

//3.
 
// O código não funciona porque falta um valor na constante quantidadeDeNumerosPares e a iteração i++.

const quantidadeDeNumerosPares = Number(prompt("Escolha N"))

let i = 0
while(i <= quantidadeDeNumerosPares) {
    console.log(i * 2)
    
    i++
}

//-------------------------------------------------------------------

// 4.

const triangulos = (a, b, c) => {
    if (a === b && b === c) {
        return "Equilátero"
    } else if ((a === b && b !== c) || (a === c && c !== b) || (b === c && c !== a)) {
        return "Isósceles"
    } else {
        return "Escaleno"
    }

}

console.log(triangulos(3, 4, 5))

//-------------------------------------------------------------------


// 5.

const comparacao = (a, b) => {
    if (a > b) {
        console.log(`O maior é: ${a}`)
    } else if (b > a) {
        console.log(`O maior é: ${b}`)
    } else {
        console.log("São iguais.")
    }

    if (a % b === 0) {
        console.log(`${a} é divisível por ${b}`)
    } else {
        console.log(`${a} não é divisível por ${b}`)
    }

    if (b % a === 0) {
        console.log(`${b} é divisível por ${a}`)
    } else {
        console.log(`${b} não é divisível por ${a}`)
    }

    console.log(`A diferença entre eles é ${Math.sqrt((a - b) * (a - b))}`)

}

console.log(comparacao(15, 30))
//-------------------------------------------------------------------

    
// ------------------ EXERCÍCIOS DE FUNÇÕES ------------------//

// 1.
const maiorMenor = (numeros) => {
    let maiorNumero = numeros[0]
    let menorNumero = numeros[0]
    let segundoMaior = numeros[0]
    let segundoMenor = numeros[0]

    for (let numero of numeros) {
        if (numero > maiorNumero) {
            segundoMaior = maiorNumero
            maiorNumero = numero
        }
        if (numero < menorNumero) {
            segundoMenor = menorNumero
            menorNumero = numero
        }
    }

    console.log(segundoMaior, segundoMenor)
}

maiorMenor([29, 50, 79, 10, 25])

//-------------------------------------------------------------------

//2. 

const mensagem = () => {
    alert("Hello Future4")
}

mensagem()

//-------------------------------------------------------------------

// ------------------ EXERCÍCIOS DE OBJETOS ------------------//

// 1.
// O array guarda uma lista de coisas (numeros, objetos, strings...)
// O objeto são estruturas de dados complexos de maneira organizada. Com os
// objetos consegumos criar modelos mais realistas.

//-------------------------------------------------------------------

// 2.

const criaRetangulo = (lado1, lado2) => {
    const retangulo = {
        largura: lado1,
        altura: lado2,
        perimetro: 2 * (lado1 + lado2),
        area: (lado1 * lado2)
    }

    return retangulo
}

//-------------------------------------------------------------------

// 3.

const filmeFavorito = {
    titulo: "Nasce uma estrela",
    ano: 2018,
    diretor: "Bradley Cooper",
    atoresAtrizes: ["Bradley Cooper", "Lady Gaga", "Sam Elliott"]
}

let listaDeAtores = ""

for (let ator of filmeFavorito.atoresAtrizes) {
    listaDeAtores += `${ator}, `
}

console.log(`Venha assistir ao filme ${filmeFavorito.titulo}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${listaDeAtores}`)

//-------------------------------------------------------------------

// 4.

const pessoa = {
    nome: "Kleber",
    idade: 24,
    email: "kleber@teste.com.br",
    endereco: "Rua Borboletas Psicodélicas, 666"
}

const aninimizarPessoa = (pessoa) => {
    return {
        ...pessoa,
        nome: "Anônimo"
    }
}

//-------------------------------------------------------------------

// ------------------ EXERCÍCIOS DE FUNÇÕES DE ARRAY ------------------//

// 1.

const pessoas = [
	{ nome: "Pedro", idade: 20 },
	{ nome: "João", idade: 10 },
	{ nome: "Paula", idade: 12 },
	{ nome: "Artur", idade: 89 } 
]
// a.
const maioresDeVinte = (pessoas) => {
    return pessoas.filter(pessoa => {
        if (pessoa.idade >= 20) {
            return true
        } else {
            return false
        }
    }) 
}
// b.
const menoresDeVinte = (pessoas) => {
    return pessoas.filter(pessoa => {
        return pessoa.idade < 20
    }) 
}

//-------------------------------------------------------------------

// 2.

//a.

const array = [1, 2, 3, 4, 5, 6]

const multiplos = (array) => {
    return array.map(numero => {
        return numero * 2 
    })
}

// b.

const multiplosTres = (array) => {
    return array.map(numero => {
        return `${numero * 3}`
    })
}

// c.

const parImpar = (array) => {
    return array.map(numero => {
        let paridade = ""
        if (numero % 2 === 0) {
            paridade = "par"  
        } else {
            paridade = "impar"
        }
        return `${numero} é ${paridade}`
    })
}

//-------------------------------------------------------------------




