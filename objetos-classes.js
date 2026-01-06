// Objeto literal simples
const carro = {
    marca: 'bmw',
    modelo: 'X6',
    valor: 800000
};

console.log('Carro literal:');
console.log('Marca:', carro.marca);
console.log('Modelo:', carro.modelo);
console.log('Valor:', carro.valor);

// Classe pessoa
class Pessoa {
    nome;
    idade;

    descrever () {
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }
}

// Instância de Pessoa
const matheus = new Pessoa();
matheus.nome = 'Matheus';
matheus.idade = 48

console.log('\nPessoa instanciada:');
console.log(matheus);
matheus.descrever();

// Classe carro com construtor e método
class Carro {
    marca;
    cor;
    gastoMedioKm;

    // Construtor(parâmetos obrigatórios)
    constructor (marca, cor, gastoMedioKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
    }

    // Método para calcular o valor médio da viagem
    calcularValorViagem(distancia, valorCombustivel) {
        const litrosGastos = distancia * this.gastoMedioKm;
        return litrosGastos * valorCombustivel;
    }
}
//Intanciação de um hb20 na classe Carro
console.log('\nCarro instanciado:');
const hb20 = new Carro('Hyundai', 'Preto', 1 / 10);
console.log(hb20);

//Invocando o método da classe Carro
console.log('\nCálculo do valor da viagem:');
const distancia = 70; //km
const valorCombustivel = 5.79;
const valorTotal = hb20.calcularValorViagem(distancia, valorCombustivel);

console.log(`Valor da viagem de ${distancia} km a R$ ${valorCombustivel} por litro: R$ ${valorTotal.toFixed(2)}`);
