// ===============================
// EXEMPLO DE VETOR MULTIDIMENSIONAL (MATRIZ)
// ===============================

// Criamos uma matriz 3x3 (3 linhas e 3 colunas)
let matriz = [
  [1, 2, 3],   // Linha 0
  [4, 5, 6],   // Linha 1
  [7, 8, 9]    // Linha 2
];

// Exibindo a matriz completa
console.log("Matriz completa:");
console.log(matriz);

// Acessando elementos específicos
console.log("Elemento da linha 0, coluna 1:", matriz[0][1]); // 2
console.log("Elemento da linha 2, coluna 0:", matriz[2][0]); // 7
console.log("Elemento da linha 1, coluna 2:", matriz[1][2]); // 6

// Alterando um valor da matriz
matriz[1][1] = 99; // muda o valor 5 (linha 1, coluna 1) para 99
console.log("Após alterar o elemento [1][1]:", matriz);

// Descobrindo o tamanho da matriz
console.log("Quantidade de linhas:", matriz.length);
console.log("Quantidade de colunas (na primeira linha):", matriz[0].length);

// Percorrendo a matriz com dois laços for (um dentro do outro)
console.log("Percorrendo toda a matriz:");
for (let i = 0; i < matriz.length; i++) {          // percorre as linhas
  for (let j = 0; j < matriz[i].length; j++) {     // percorre as colunas
    console.log(`Elemento [${i}][${j}] = ${matriz[i][j]}`);
  }
}

// Exemplo: somar todos os elementos da matriz
let soma = 0;
for (let i = 0; i < matriz.length; i++) {
  for (let j = 0; j < matriz[i].length; j++) {
    soma += matriz[i][j];
  }
}
console.log("Soma de todos os elementos:", soma);

// Exemplo: exibir a matriz de forma organizada
console.log("Matriz formatada:");
for (let i = 0; i < matriz.length; i++) {
  console.log(matriz[i].join(" ")); // junta os valores da linha com espaço entre eles
}
