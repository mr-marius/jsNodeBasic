// Funcções auxiliares para entrada e saída de dados

// Simulando entradas de dados
const entradas = [10, 20, 30, 40];
let indiceEntradaAtual = 0;

// Lê o próximo valor da lista de entradas
function gets() {
 const valor = entradas[indiceEntradaAtual];
 indiceEntradaAtual++;
 return valor;
}

// Imprime texto na tela
function print(texto) {
    console.log(texto);
}

// Exporta as funções para serem usadas em outros módulos
module.exports = {
    gets, 
    print
};
