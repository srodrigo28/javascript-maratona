const contasAreceber = [
    { nome: 'lucas',             preco: 500,  quantidade: 1, cidadePais: 'portugal' },
    { nome: 'emerson portugal',  preco: 600,  quantidade: 1, cidadePais: 'portugal' },
    { nome: 'Luiz fernando',     preco: 400,  quantidade: 1, cidadePais: 'senador canedo' },
    { nome: 'Giovanni',          preco: 1000, quantidade: 1, cidadePais: 'porto velho' },
    { nome: 'Kauan',             preco: 400,  quantidade: 1, cidadePais: 'Goiânia' },
    { nome: 'Phelipe',           preco: 350,  quantidade: 1, cidadePais: 'Goiânia' },
    { nome: 'Construservice',    preco: 1500, quantidade: 1, cidadePais: 'Goiânia' },
    { nome: 'Mazza',             preco: 600,  quantidade: 1, cidadePais: 'Goiânia' },
]

const totalReceber = contasAreceber.reduce(
    (total, item) => total + (item.preco * item.quantidade) , 0)

console.log('Quantidade de Alunos ' + contasAreceber.length)
console.log('Total a receber R$ ' + totalReceber.toFixed(2))
