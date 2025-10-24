// 1. Dobrar todos os números de um array
const numeros = [1, 2, 3, 4, 5];
const dobrados = numeros.map(num => num * 2);
console.log(dobrados); // [2, 4, 6, 8, 10]
// Uso comum: Transformar valores numéricos.

// 2. Extrair uma propriedade de objetos em um array
const usuarios = [
  { nome: 'Ana', idade: 25 },
  { nome: 'Beto', idade: 30 },
  { nome: 'Carlos', idade: 22 }
]; 

const nomes = usuarios.map(usuario => usuario.nome);
console.log(nomes); // ['Ana', 'Beto', 'Carlos']
// Uso comum: Criar listas de nomes, IDs, emails, etc.

// 3. Converter strings para maiúsculas
const frutas = ['maçã', 'banana', 'laranja'];
const maiusculas = frutas.map(fruta => fruta.toUpperCase());
console.log(maiusculas); // ['MAÇÃ', 'BANANA', 'LARANJA']
// Uso comum: Normalizar ou formatar textos.

// 4. Adicionar um prefixo ou sufixo a cada item
const itens = ['camisa', 'calça', 'sapato'];
const comPreco = itens.map(item => `R$ 49,90 - ${item}`);
console.log(comPreco);
// ['R$ 49,90 - camisa', 'R$ 49,90 - calça', 'R$ 49,90 - sapato']
// Uso comum: Formatar itens para exibição (ex: carrinho de compras).

// 5. Criar elementos HTML a partir de um array (React ou DOM)
const tarefas = ['Estudar', 'Trabalhar', 'Dormir'];
const listaHTML = tarefas.map(tarefa => `<li>${tarefa}</li>`).join('');
console.log(listaHTML);
// <li>Estudar</li><li>Trabalhar</li><li>Dormir</li>
// Uso comum: Gerar marcação HTML dinamicamente (muito usado no React com JSX).
