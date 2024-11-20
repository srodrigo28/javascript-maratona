let alunos = [
    {id: 1, nome: "Marcela Duarte Lemos", price: 300.00, cadastro: "30-09-2024" },
    {id: 2, nome: "Manuela Duarte Lemos", price: 300.00, cadastro: "30-09-2024" },
    {id: 3, nome: "Emerson Sabino",       price: 300.00, cadastro: "30-09-2024" },
    {id: 4, nome: "Nathan Sabino",        price: 300.00, cadastro: "30-09-2024" },
    {id: 5, nome: "Giovanni Miranda",     price: 1000.00, cadastro: "30-09-2024" },
    {id: 6, nome: "Luiz Fernando",        price: 400.00, cadastro: "30-09-2024" },
    {id: 7, nome: "Kauã",                 price: 400.00, cadastro: "30-09-2024" }
]

function listaDeAlunos(){
    alunos.forEach(item => {
        console.log(item.nome, item.price, item.cadastro)
    })
    console.log('\n')
}
//listaDeAlunos()

function calcularFaturamento(){
    const total = alunos.reduce((total, item) => {
        return total + item.price
    }, 0)
    
    console.log('Total faturamento: R$ ' + total)
}


function calcularFaturamento2(){
    const total = alunos.reduce((total, item) => {
        return total + item.price
    }, 0)
    
    console.log('Total faturamento: R$ ' + total)
}
//calcularFaturamento()
