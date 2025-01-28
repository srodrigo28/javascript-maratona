const contasApagar = [
    { nome: 'energia', preco: 180,     quantidade: 1 },
    { nome: 'agua',    preco: 150.59,  quantidade: 1 },
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

const contasAreceber = [
    { nome: 'emerson portugal',   preco: 600, quantidade: 1, cidadePais: 'portugal' },
    { nome: 'Phelipe',   preco: 250, quantidade: 1, cidadePais: 'rio de janeiro' },
    { nome: 'Giovanni',   preco: 1000, quantidade: 1, cidadePais: 'porto velho' },
    { nome: 'Ronaldo ',   preco: 300, quantidade: 1, cidadePais: 'Goiânia' },
    { nome: 'Construservice',   preco: 1500, quantidade: 1, cidadePais: 'Goiânia' },
]
