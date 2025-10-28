// Função que gera a sequência de Fibonacci até o n-ésimo termo
function fibonacci(n) {
  // Verifica se o valor de n é válido (n precisa ser >= 1)
  if (n <= 0) {
    return []; // retorna um array vazio se o número for inválido
  }

  // Caso especial: se n = 1, retorna apenas o primeiro número da sequência
  if (n === 1) {
    return [0];
  }

  // Começamos com os dois primeiros números da sequência
  const sequencia = [0, 1];

  // Loop para gerar os próximos números
  // Começa do índice 2 porque já temos os dois primeiros números
  for (let i = 2; i < n; i++) {
    // Cada novo número é a soma dos dois anteriores
    const proximoNumero = sequencia[i - 1] + sequencia[i - 2];
    sequencia.push(proximoNumero); // adiciona o novo número ao array
  }

  // Retorna a sequência completa
  return sequencia;
}

// Exemplo de uso:
const quantidade = 10; // queremos os 10 primeiros números
const resultado = fibonacci(quantidade);

console.log(`Os ${quantidade} primeiros números de Fibonacci são:`);
console.log(resultado);
