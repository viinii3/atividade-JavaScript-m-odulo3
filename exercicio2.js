
/*
    - 2 Crie uma classe para representar pessoas.
    Para cada pessoa teremos os atributos nome, peso e altura.
    As pessoas devem ter a capacidade de dizer o valor do seu IMC (IMC = peso / (altura * altura));
    Instancie uma pessoa chamda José que tenha 70kg de peso e 1,75 de altura, e peça a José para dizer o valor do seu IMC;

    adicional: dizer onde ela se enquadra no IMC;
*/

class pessoa {
    nome;
    peso;
    altura;

    constructor (nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularImc () {
        return this.peso / (this.altura * this.altura);
    }

//informação adicionalr
    classificarImc() {
        const imc = this.calcularImc()
        if (imc < 18.5) {
            return 'Abaixo do peso'
        } else if (imc >= 18.5 && imc <= 25) {
            return 'Peso normal'
        } else if (imc >= 25 && imc <= 30) {
            return 'Acima do peso'
        } else if (imc >= 30 && imc <= 40) {
            return 'Obeso'
        } else if (imc > 40) {
            return 'Obesidade grave'
        }
    }
}

const jose = new pessoa('José', 70, 1.75);
const vini = new pessoa('vini', 65, 1.72)

console.log(vini.calcularImc())
console.log(vini.classificarImc())

