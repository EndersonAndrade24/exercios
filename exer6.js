class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    calcularSalario() {
        return this.salario;
    }
}

class Gerente extends Funcionario {
    constructor(nome, salario, bonus) {
        super(nome, salario);
        this.bonus = bonus;
    }

    calcularSalario() {
        return this.salario + this.bonus;
    }
}

// Testando as classes
const funcionario1 = new Funcionario("Maria", 3000);
const gerente1 = new Gerente("João", 5000, 1500);

console.log(`${funcionario1.nome}: R$ ${funcionario1.calcularSalario().toFixed(2)}`); // "Maria: R$ 3000.00"
console.log(`${gerente1.nome}: R$ ${gerente1.calcularSalario().toFixed(2)}`); // "João: R$ 6500.00"
