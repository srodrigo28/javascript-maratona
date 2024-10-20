
const data = '2024-10-31';

function FormData(data) {
    const dataCriada = new Date(data);
    const dataFormatada = dataCriada.toLocaleDateString('pt-BR', {
        timeZone: 'UTC',
    });
    return console.log(dataFormatada);
}
FormData(data)
