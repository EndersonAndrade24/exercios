class Produto {
    constructor(nome, preco, categoria) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
    }

    aplicarDesconto(percentual) {
        this.preco -= this.preco * (percentual / 100);
    }

    mostrarDetalhes() {
        return `Nome: ${this.nome}, Preço: R$ ${this.preco.toFixed(2)}, Categoria: ${this.categoria}`;
    }
}

class Eletronico extends Produto {
    constructor(nome, preco, categoria, garantia) {
        super(nome, preco, categoria);
        this.garantia = garantia; // Garantia em anos
    }

    mostrarDetalhes() {
        return `${super.mostrarDetalhes()}, Garantia: ${this.garantia} anos`;
    }
}

// Testando a classe Eletronico
const eletronico1 = new Eletronico("Smartphone", 1500, "Celulares", 2);

console.log(eletronico1.mostrarDetalhes()); // "Nome: Smartphone, Preço: R$ 1500.00, Categoria: Celulares, Garantia: 2 anos"

// Usando métodos da classe pai
eletronico1.aplicarDesconto(10);
console.log(eletronico1.mostrarDetalhes()); // "Nome: Smartphone, Preço: R$ 1350.00, Categoria: Celulares, Garantia: 2 anos"
