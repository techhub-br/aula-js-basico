// Funções básicas console.log('dsajdsa')
console.log('oi mundo, eu sou uma pessoa normal')
prompt('você tem autoestima?')


// Crie uma variável com seu nome e imprima no console uma frase:
// Bom dia, {seu nome}!
// Resolução
let nome = 'Juvenal'
console.log('Bom dia', nome)
console.log('Bom dia ' + nome)
console.log(`Bom dia, ${nome}! Como vai você?`)


/*
Operadores relacionais
==  -> Igual (não confundir com =) 
!=  -> Diferente
>   -> maior
>=  -> maior ou igual
<   -> menor
<=  -> menor ou igual
=== -> igual (compara o tipo também)
...
Operadores lógicos
|| -> OU
&& -> E 
!  -> Não (negativo)
*/

// ESTRUTURAS DE CONDIÇÃO - IF
let nome1 = 'filipe'
let idade = 19

if (nome1 == 'filipe' && idade < 18) {
    console.log('Você é menor de idade e se chama', nome)
} else {
    console.log('Vai te catar', nome)
}


// Exemplo - IF
let idade1 = prompt('Qual seria a sua idade? (menos de 18 não entra)')

if (idade1 < 18) {
    alert('PROIBIDO! ACESSO NEGADO!!')
} 
if (idade1 > 100) {
    alert('Sacanagem né, tá mentindo')
} else {
    alert('Acesso liberado! Divirta-se')
}



// LISTAS - ARRAY
let listaFrutas = ['banana 0', 'maçã 1', 'pera 2', 'manga', 'morango' ] //...

let novaFruta = prompt('Adicione uma fruta')

let listaNovaFruta = listaFrutas.find(fruta => fruta == novaFruta) // Encontra a fruta inserida na lista criada
console.log(listaNovasFrutas)


// OBJETOS - DICIONÁRIOS 
let pessoa = {
    nome: 'Filipe',
    idade: 20,
    endereco: 'Rua dos Bobos, 0',
    falar: () => {
        console.log("Pronto, falei.")
        return 'falado.'
    }
}
let produto = {
    id: 1,
    nome: 'Iphone 18 Pro',
    preco: 9542,
    descricao: 'Iphone com 8 câmeras e 4785gb de memória'
}
let atributo = 'falar'
console.log(pessoa[atributo]()) // Aqui eu preciso inserir os parênteses porque no caso o nosso atributo é uma função, e eu quero executá-la

// Combinação objeto + lista
let listaProdutos = [
    {
        id: 1,
        nome: 'Iphone 18',
        preco: 9542,
        descricao: 'Iphone com 8 câmeras e 4785gb de memória',
    },
    {
        id: 2,
        nome: 'Iphone 17',
        preco: 9542,
        descricao: 'Iphone com 8 câmeras e 4785gb de memória'
    }
]

// FUNÇÕES
function saudacao(mensagem, nome) {
    console.log('oi bom dia', nome)
    console.log(mensagem)
}

//saudacao('TUDO BOM???', 'Filipe')
function somarNumeros(x, y) {
    let soma = x + y
    return soma
}
let numerosSomados = somarNumeros(15,13)
console.log(numerosSomados)


