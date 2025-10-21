// Exibe uma mensagem de alerta ao carregar o script (pode ser removida em produção)
alert('hello');

// Lista de clientes agendados com seus dados (id, nome, telefone, valor a pagar e data do agendamento)
let agendados = [
    { id: 1, nome: "alex", telefone: "", valor: 25, data: "2024-10-31" },
    { id: 2, nome: "marcio", telefone: "", valor: 80, data: "2024-10-28" },
    { id: 3, nome: "rodrigo", telefone: "", valor: 45, data: "2024-10-28" }
];

// Conta quantos agendamentos existem
let contadorAgendado = agendados.length;

// Função que formata uma data no padrão brasileiro (dd/mm/aaaa)
function FormData(data) {
    const dataCriada = new Date(data); // Cria um objeto Date
    const dataFormatada = dataCriada.toLocaleDateString('pt-BR', {
        timeZone: 'UTC' // Garante que não haja variação de fuso horário
    });
    return dataFormatada;
}

// Função que formata um número para o formato monetário brasileiro (R$)
function moeda(valor) {
    return valor.toLocaleString('pt-br', {
        style: 'currency',
        currency: 'BRL'
    });
}

// Calcula o total a ser faturado com os agendamentos
const totalAgendado = agendados.reduce((total, item) => total + item.valor, 0);

// Função que lista todos os agendamentos no console
function listar() {
    console.log("Total agendados: " + agendados.length); // Mostra quantidade de agendamentos
    console.log("Total a faturar: " + moeda(totalAgendado)); // Mostra o total em formato monetário

    // Itera sobre todos os agendamentos e exibe os dados formatados
    agendados.forEach(item => {
        console.log(
            "Cliente: " + item.nome,
            "Telefone: " + item.telefone || "Não informado",
            "Valor: " + moeda(item.valor),
            "Data: " + FormData(item.data)
        );
    });
}

// Executa a listagem ao carregar o script
listar();

// Função para cadastrar um novo agendamento
function cadastrar({ id, nome, telefone, valor, data }) {
    // Cria um novo objeto agendamento
    const novoAgendamento = {
        id,
        nome,
        telefone,
        valor,
        data
    };

    // Adiciona ao array de agendados
    agendados.push(novoAgendamento);

    console.log("Novo agendamento cadastrado com sucesso!");
    listar(); // Exibe a lista atualizada
}

// Exemplo de uso da função cadastrar (remover comentário para testar):
/*
cadastrar({
    id: 4,
    nome: "joana",
    telefone: "62 9999-8888",
    valor: 100,
    data: "2024-11-01"
});
*/

// Função que exibe apenas as datas dos agendamentos
function datas() {
    console.log("Datas dos agendamentos:");
    agendados.forEach(item => {
        console.log(FormData(item.data));
    });
}

// Variável reservada para possíveis datas disponíveis (não usada ainda)
let disponivel = [];
