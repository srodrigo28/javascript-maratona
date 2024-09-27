/**
 * Calculando total em estoque.
 * Calculando total de todos produtos em estoque.
 * Calculando total por produto x quantidade exp ps2 unid = 10 * preco
 */


const ListaJogos = [
    { nome: 'ps4',   preco: 180,     quantidade: 17 },
    { nome: 'ps5',   preco: 150,  quantidade: 3  },
    { nome: 'ps2',   preco: 50.89,   quantidade: 20 }
]

const listaUnidades = ListaJogos.reduce( 
    (total, item) => total + (item.quantidade), 0)

const somaProdutos = ListaJogos.reduce( 
    (total, item) => total + (item.quantidade * item.preco), 0)

const totalPS4 = ListaJogos.reduce( 
    (total, item) => total + (
        item.nome.startsWith('ps4') ? item.quantidade * item.preco : 0
    ), 0)
    
const totalPS5 = ListaJogos.reduce( 
    (total, item) => total + (
        item.nome.startsWith('ps5') ? item.quantidade * item.preco : 0
    ), 0)

const totalPS2 = ListaJogos.reduce( 
    (total, item) => total + (
        item.nome.startsWith('ps2') ? item.quantidade * item.preco : 0
    ), 0)

console.log('Total de produtos: ' + listaUnidades + ' unidades')
console.log('Valor total de produtos: R$' + somaProdutos )
console.log("Total jogos ps2: " + totalPS2)
console.log("Total jogos ps4: " + totalPS4)
console.log("Total jogos ps5: " + totalPS5)