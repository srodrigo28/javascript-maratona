/* *** Objeto 01 forEach***
=========================
    const produtoPreco = [
        { nome: 'arroz cristal', preco: 37.50 },
        { nome: 'arroz pampa', preco: 29.50 }
    ]

    listar = produtoPreco.forEach( item => {
        console.log( item.nome, item.preco )
    });
*/

/* *** Objeto 02 map() 1 ***
=========================
    const produto = [
        { nome: 'arroz cristal', preco: 37.50 },
        { nome: 'arroz pampa', preco: 29.50 }
    ]

    listar = produto.map( item => {
        console.log( item.nome, item.preco )
    });
*/

/* *** Objeto 03 map() 2 ***
========================= 
    const produto = [
        { nome: 'arroz cristal', preco: 37.50, quantidade: 10, status: true },
        { nome: 'arroz pampa', preco: 29.50, quantidade: 10, status: true }
    ]

    listar = produto.map( item => {
        console.log( item.nome, item.preco )
    });

*/

/* *** Objeto 03 map() 3 ***
========================= 
    const produto = [
        { nome: 'arroz cristal', preco: 37.50, quantidade: 10, status: true },
        { nome: 'arroz pampa', preco: 29.50, quantidade: 10, status: true }
    ]

    listar = produto.map( item => {
        console.log( item.nome )
    });
*/

/* *** Objeto 04 find() 1 ***

========================= 
    const produto = [ "arroz 1", "arroz 2", "arroz 3", "arroz 4"];

    nomeBusca = "arroz 3"
    const buscar = produto.find( p => p.startsWith(nomeBusca))
    console.log(buscar)
*/

/* *** Objeto 05 find() 2 ***
========================= 
    const produto = [ "arroz 1", "arroz 2", "arroz 3", "arroz 4"];

    nomeBusca = "arroz 30"
    const buscar = produto.find( p => p.startsWith(nomeBusca))

    if(buscar) {
        console.log(buscar)
    }else{
        console.log("Nenhum item encontrado com o nome: " + nomeBusca)
    }
*/

/* *** Objeto 06 find() 3 ***
========================= 
const produto = [
    { nome: 'arroz cristal', preco: 37.50, quantidade: 10 },
    { nome: 'arroz pampa', preco: 29.50, quantidade: 5 },
    { nome: 'feijão', preco: 6.50, quantidade: 15 }
]

const buscar = "arroz pampa"
const buscarProduto = produto.find( item => item.nome == buscar)
console.log(buscarProduto)
*/

/* *** Objeto 07 reduce() 1 ***
========================= 
    const produto = [
        { nome: 'arroz cristal', preco: 37.50, quantidade: 1 },
        { nome: 'arroz pampa', preco: 29.50, quantidade: 10 },
        { nome: 'feijão', preco: 6.50, quantidade: 1 }
    ]

    const totalPreco = produto.reduce(
        (total, item) => total + (item.preco * item.quantidade), 0)

    console.log('Total R$ ' + totalPreco)
*/

/* *** Objeto 08 reduce() 2 ***
========================= 
    const contasApagar = [
        { nome: 'energia', preco: 180, quantidade: 1 },
        { nome: 'agual',   preco: 150.59, quantidade: 1 },
        { nome: 'carro',   preco: 5550.89, quantidade: 1 }
    ]

    const totalPagar = contasApagar.reduce(
        (total, item) => total + (item.preco * item.quantidade) , 0)

    console.log('Total R$ ' + totalPagar.toFixed(2))
*/

/* *** Objeto 09 reduce() 3 ***
========================= 

const contasApagar = [
    { nome: 'energia', preco: 180, quantidade: 1 },
    { nome: 'agual',   preco: 150.59, quantidade: 1 },
    { nome: 'carro',   preco: 5550.89, quantidade: 1 }
]

const totalPagar = contasApagar.reduce(
    (total, item) => total + (item.preco * item.quantidade) , 0)

console.log('Total a pagar R$ ' + totalPagar.toFixed(2))


const contasAreceber = [
    { nome: 'lucas', preco: 500, quantidade: 1, cidadePais: 'portugal' },
    { nome: 'emerson portugal',   preco: 600, quantidade: 1, cidadePais: 'portugal' },
    { nome: 'Luiz fernando',   preco: 400, quantidade: 1, cidadePais: 'senador canedo' },
    { nome: 'Giovanni',   preco: 1000, quantidade: 1, cidadePais: 'porto velho' },
    { nome: 'Kauan',   preco: 400, quantidade: 1, cidadePais: 'Goiânia' },
    { nome: 'Construservice',   preco: 1500, quantidade: 1, cidadePais: 'Goiânia' },
]

const totalReceber = contasAreceber.reduce(
    (total, item) => total + (item.preco * item.quantidade) , 0)

console.log('Total a receber R$ ' + totalReceber.toFixed(2))

const pagar = totalPagar.toFixed(2);
const receber = totalReceber.toFixed(2);
const saldo = receber - pagar;
// Saldo da conta
console.log('Saldo de conta R$ ' + saldo.toFixed(2));
*/

/* *** Objeto 10 every()  1 ***
* verifica se todos passa na condição

const valores = [10, 20, 30, 100]

const acima20 = valores.every( item => item > 20)

console.log(acima20) // true
*/

/* *** Objeto 11 every()  2 ***
* verifica se todos passa na condição com uso de condicional


const valores = [10, 20, 30, 100]

const acima20 = valores.every( item => item > 20)

if(acima20){
    console.log("Todos os valores são maiores que 20")
}else{
    console.log("Algum valor não é maior que 20")
}
*/

/* *** Objeto 12 every()  3 ***
* verifica se todos passa na condição com uso de condicional

    const notasAluno = [
        { nome: 'João', materia: 'ciências', notas: 9 },
        { nome: 'Maria', materia: 'matemática', notas: 10 },
        { nome: 'José', materia: 'portugues', notas: 8.5 }
    ]

    const notaAcima8 = notasAluno.every( n => n.notas > 8 )

    if(notaAcima8){
        console.log("Todos as materias tiveram notas acima de 8")
    }else{
        console.log("Algumas materia ou uma materia não foi maior que 8")
    }
*/

/* *** Objeto 13 some()   1 ***
    verificar se existe no minimo um verdadeiro dentro da condição 
    const notas = [9, 8, 10, 9, 8]
    const temNota9 = notas.some( item => item == 9)
    console.log(temNota9)
*/

/* *** Objeto 14 some()   2 ***
    verificar se existe no minimo um verdadeiro dentro da condição
    const notas = [9, 8, 10, 9, 8]
    const temNota9 = notas.some( item => item == 9)

    if(temNota9){
        console.log("valor encontrado dentro da lista")
    }else{
        console.log("Não existe nenhuma nota igual a 9")
    }
*/

/* *** Objeto 15 some()   3 ***
    verificar se existe no minimo um verdadeiro dentro da condição 

    const notas = [
        { nome: 'João', materia: 'ciências', notas: 8, idade: 9 },
        { nome: 'Maria', materia: 'matemática', notas: 10, idade: 15 },
        { nome: 'José', materia: 'portugues', notas: 8.5, idade: 12 }
    ]

    const temNome = notas.some( n => n.nome == "Maria" )

    console.log(temNome)
*/