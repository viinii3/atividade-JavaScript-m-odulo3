
// exercicio rapido: fazer uma função que compara pessoas e diz quem é mais velho:

class pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
}

function comparadorDePessoas(pessoa1, pessoa2) {
    if (pessoa1.idade > pessoa2.idade) {
        console.log(`${pessoa1.nome} é mais velho que ${pessoa2.nome}`);
    } else if (pessoa2.idade > pessoa1.idade) {
        console.log(`${pessoa2.nome} é mais velha que ${pessoa1.nome}`);
    } else {
        console.log(`${pessoa1.nome} e ${pessoa2.nome} tem a mesma idade`)
    }
}

const vini = new pessoa('vini', 20);
const rapha = new pessoa('raphael', 18);

comparadorDePessoas(vini, rapha)