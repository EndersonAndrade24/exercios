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

// Testando a classe
const produto1 = new Produto("Camiseta", 50, "Vestuário");
const produto2 = new Produto("Tênis", 200, "Calçados");

console.log(produto1.mostrarDetalhes()); // "Nome: Camiseta, Preço: R$ 50.00, Categoria: Vestuário"
produto1.aplicarDesconto(10);
console.log(produto1.mostrarDetalhes()); // "Nome: Camiseta, Preço: R$ 45.00, Categoria: Vestuário"

console.log(produto2.mostrarDetalhes()); // "Nome: Tênis, Preço: R$ 200.00, Categoria: Calçados"
produto2.aplicarDesconto(15);
console.log(produto2.mostrarDetalhes()); // "Nome: Tênis, Preço: R$ 170.00, Categoria: Calçados"
