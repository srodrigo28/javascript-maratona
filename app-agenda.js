let agendados =  [
    { "id": 1, "nome": "alex", "telefone": "", "valor": 25, "data": "2024-10-31" },
    { "id": 2, "nome": "marcio", "telefone": "", "valor": 80, "data": "2024-10-28" },
    { "id": 3, "nome": "rodrigo", "telefone": "", "valor": 45, "data": "2024-10-28" }
];
let contadorAgendado = agendados.length

function FormData(data) {
    const dataCriada = new Date(data);
    const dataFormatada = dataCriada.toLocaleDateString('pt-BR', {
        timeZone: 'UTC',
    });
    return dataFormatada;
}

function moeda(valor){
    return valor.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
}
const totalAgendado = agendados.reduce( (total, item) => total + (item.valor) , 0)

function listar(){
    console.log("Total agendados: " + agendados.length)
    console.log('Total a faturar ' + moeda(totalAgendado))
    agendados.forEach( item => {
        // console.log(item.id, item.nome, item.telefone, item.valor, item.data)
        console.log( "Cliente: " + item.nome,  "telefone: " + item.telefone, "valor: " + moeda(item.valor), "data: " + FormData(item.data))
    })
}
listar()

function cadastrar( { id, nome, telefone, valor, data } ){
    agendados.push( id, nome, telefone, valor, data )
    return console.log(agendados)
    // return listar()
}
// cadastrar( {"id": 3, "nome": "rodrigo", "telefone": "62 9999-8888", "valor": 80, "data": "2024-10-28" } )

function datas(){
    agendados.forEach( item => {
        console.log(item.data)
    })
}
let disponivel = [];
