// ===============================
// EXEMPLO DE VETOR (ARRAY) SIMPLES
// ===============================

// Criamos um vetor (array) com alguns números
let numeros = [10, 20, 30, 40, 50];

// Exibindo o vetor completo no console
console.log("Vetor inicial:", numeros);

// Acessando elementos do vetor
// Os índices em JavaScript começam do 0
console.log("Primeiro elemento:", numeros[0]); // índice 0 -> 10
console.log("Terceiro elemento:", numeros[2]); // índice 2 -> 30

// Adicionando um novo elemento no final do vetor
numeros.push(60);
console.log("Após adicionar 60:", numeros);

// Removendo o último elemento do vetor
numeros.pop();
console.log("Após remover o último elemento:", numeros);

// Adicionando um novo elemento no início do vetor
numeros.unshift(5);
console.log("Após adicionar 5 no início:", numeros);

// Removendo o primeiro elemento do vetor
numeros.shift();
console.log("Após remover o primeiro elemento:", numeros);

// Descobrindo o tamanho do vetor
console.log("Tamanho do vetor:", numeros.length);

// Percorrendo o vetor com um laço for
console.log("Percorrendo o vetor com for:");
for (let i = 0; i < numeros.length; i++) {
  console.log(`Índice ${i} -> Valor ${numeros[i]}`);
}

// Também podemos usar for...of (mais moderno)
console.log("Percorrendo com for...of:");
for (let valor of numeros) {
  console.log(valor);
}

// Exemplo: somando todos os valores do vetor
let soma = 0;
for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}
console.log("Soma dos elementos:", soma);

// Exemplo de média dos valores
let media = soma / numeros.length;
console.log("Média dos valores:", media);
