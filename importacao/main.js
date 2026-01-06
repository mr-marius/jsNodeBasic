// Arquivo principal: exemplo de uso de funções auxiliares
const {gets, print} = require('./funcoes-auxiliares.js');

// Lê valores simulados e calcula a soma
const valor1 = gets();
const valor2 = gets();
const valor3 = gets();

const soma = valor1 + valor2 + valor3;

print('Valores lidos: ' + valor1 + ', ' + valor2 + ', ' + valor3);
print('Soma dos valores: ' + soma);

console.log(gets());
