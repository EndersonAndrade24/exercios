class ItemInventario {
    constructor(nome, quantidade, preco) {
        this.nome = nome;
        this.quantidade = quantidade;
        this.preco = preco;
    }

    calcularValorTotal() {
        return this.quantidade * this.preco;
    }
}

// Objeto literal inventario
const inventario = {
    itens: [
        new ItemInventario("Camiseta", 10, 25.00),
        new ItemInventario("Calça", 5, 50.00),
        new ItemInventario("Tênis", 2, 150.00),
    ],

    calcularValorTotalInventario: function() {
        let valorTotal = 0;
        for (const item of this.itens) {
            valorTotal += item.calcularValorTotal();
        }
        return valorTotal;
    }
};

// Testando a classe e o objeto inventario
console.log(`Valor total do inventário: R$ ${inventario.calcularValorTotalInventario().toFixed(2)}`); // "Valor total do inventário: R$ 500.00"
