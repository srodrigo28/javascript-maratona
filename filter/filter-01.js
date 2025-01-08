

const contasAreceber = [
    { nome: 'phelipe'         , preco: 500,  quantidade: 1, cidadePais: 'portugal'       , statusMes : "false"},
    { nome: 'emerson portugal', preco: 600,  quantidade: 1, cidadePais: 'portugal'       , statusMes : "true"},
    { nome: 'Luiz fernando'   , preco: 400,  quantidade: 1, cidadePais: 'senador canedo' , statusMes : "false"},
    { nome: 'Giovanni'        , preco: 1000, quantidade: 1, cidadePais: 'porto velho'    , statusMes : "false"},
    { nome: 'Kauan'           , preco: 200,  quantidade: 1, cidadePais: 'Goiânia'        , statusMes : "false"},
    { nome: 'Construservice'  , preco: 1500, quantidade: 1, cidadePais: 'Goiânia'        , statusMes : "true"},
]

var total = contasAreceber.length

var listaAreceber = contasAreceber.filter((item) => statusMes.length == "false");

var lista = listaAreceber.forEach( item => console.log(item))

console.log(lista)