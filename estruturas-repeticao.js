// Estrutura de repetição para calcular a média das notas
console.log('Calculando a média das notas!\n');

const prompt = require('prompt-sync')();

// Lê a quantidade de notas
const quantidadeNotas = prompt('Quantas notas deseja inserir? ');

// Lista de notas
const notas = [ ];

// Laço de repetição para percorrer e somar os valores da lista notas
for (let i = 0; i < quantidadeNotas; i++) {
    const entrada = prompt(`Digite a nota ${i + 1}: `);
    const nota = Number(entrada);

    if (Number.isNaN(nota)) {
        console.log('Valor inválido! Por favor, insira um número.');
        i--; // Decrementa i para repetir a iteração atual
        continue
    }

    notas.push(nota);
}

console.log('\nNotas informadas:', notas, '\n');

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    soma += notas[i];
}
const media = soma / notas.length;
console.log('Soma das notas:', soma, '\n');
console.log('Media das notas:', media.toFixed(2), '\n');



