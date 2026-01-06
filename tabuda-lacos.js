// Tabuada com laços de repetição
console.log('Calculando a tabuada!\n');

const prompt = require('prompt-sync')();

// Lê o número para o qual a tabuada será calculada
const entrada = prompt('Digite um número para ver a tabuada: ');
const numero = Number(entrada);

if (Number.isNaN(numero)) {
    console.log('Valor inválido! Por favor, insira um número.');
    process.exit(1);
}

console.log(`\nTabuada do ${numero}:\n`);

for (let i = 1; i <= 10; i++) {
    const resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}

console.log('\nFim da tabuada!\n');