// Pratica 1

const estudante = {
    nome: 'Tayrone',
    sobrenome: 'Teixeira',
    numeroDeMatricula: 123456789,
    notasDoSemestre: [6.5, 5, 7.9, 10, 0]
}

//console.log(estudante.nome)

//Pratica 2

estudante.modulo = 3

const nomeDoEstudante = estudante.nome
// console.log(`Nome: ${nomeDoEstudante}`)

const segundaNotaDoEstudante = estudante.notasDoSemestre[1]
// console.log(`Segunda nota: ${segundaNotaDoEstudante}`)

const moduloAtual = estudante.modulo
// console.log(`Modulo atual: ${moduloAtual}`)

//Pratica 3

// const estudanteCopy = {
//     ...estudante
// }
// //add as propriedades separadas
// estudanteCopy.nome = 'Astrodev'
// estudanteCopy.notasDoSemestre.push(9)
// estudanteCopy.modulo = 4

//copiando objeto já adicionando as propriedades

const copyEstudante = {
    ...estudante,
    nome: 'Astrodev',
    modulo: 4,
    notasDoSemestre: [...estudante.notasDoSemestre, 9]
}

// console.log(estudante)
// console.log('---------------------------')
// console.log(copyEstudante)

//criando array de estudante
const estudanteLabenu = []
estudanteLabenu.push(estudante, copyEstudante)

// console.log(estudanteLabenu)

//Exercicio de Fixação
//1
const carrinho = {
    nome: 'Renatinha',
    formaPagamento: 'Cartão',
    endereco: 'Rua PE Conrado'
}
//2
carrinho.compras = [
    { nome: 'Arroz', preco: 22.50, quantidade: 2 },
    { nome: 'Feijão', preco: 9.80, quantidade: 5 }
]
//3
const quantidadeProdutosCarrinho = carrinho.compras.length
console.log(`Quantidade de itens: ${quantidadeProdutosCarrinho}`)
console.log(`-----------------------------`)

//4
const carrinhoPresente = {
    ...carrinho,
    nome: 'Rose',
    formaPagamento: 'Cartão Presente'
}

//5

console.log(`Carrinho:`, carrinho)
console.log(`-----------------------------`)
console.log(`Carrinho Presente:`, carrinhoPresente)

// EXTRA - verifique a quantas unidades de uma das compras

const qtdProdutosCompradoUn = carrinho.compras[1].quantidade

console.log(qtdProdutosCompradoUn)