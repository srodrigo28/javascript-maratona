/**
 * Calculando uma lista de produtos quantidade e valor total.
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

    const somaCategoria = ListaJogos.reduce( 
        (total, item) => total + (
            item.nome.startsWith('ps5') ? item.quantidade * item.preco : 0
        ), 0)

console.log('Total de produtos: ' + listaUnidades + ' unidades')
console.log('Valor total de produtos: R$' + somaProdutos )
console.log(somaCategoria)