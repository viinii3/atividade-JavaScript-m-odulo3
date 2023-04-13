
class pessoa {
    nome;
    idade;
    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`)
    }
}

const vini = new pessoa();
vini.nome = 'Vini';
vini.idade = 20;

const raphael = new pessoa();
raphael.nome = 'Raphael';
raphael.idade = 18;

vini.descrever();
raphael.descrever();



const vini = {
    nome: 'vini',
    idade: 20,
    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}, tenho ${this.altura} de altura`)
    }
};
vini.altura = 1.71;

vini.descrever()


/*
console.log(vini.nome)
console.log(vini.idade)
console.log(vini)
*/







