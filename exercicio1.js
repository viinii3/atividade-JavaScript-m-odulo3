
/* 
    1 - crie uma classe para representar carros.
    Os carros possuem marcas, uma cor e um gasto médo de combustivel por kilometro rodado.
    Crie um método que dado a oportunidade de quilometros e o preço do combustivel nos de o valor 
    gasto em reais para realizar este percurso.
*/

class Carros {
    marca;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;
    }

    calcularGastoDeViagem (distancia, preçoCombustivel) {
        return distancia * this.gastoMedioPorKm * preçoCombustivel;
    }
}

const carro1 = new Carros('fiat', 'vermelho', 1 / 12);

console.log(carro1.calcularGastoDeViagem(70, 5));
