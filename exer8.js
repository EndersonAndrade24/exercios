class Funcionario {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }

    calcularSalario() {
        return this.salario;
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome, salario, projetoAtual) {
        super(nome, salario);
        this.projetoAtual = projetoAtual;
    }

    mostrarProjeto() {
        return `Projeto atual: ${this.projetoAtual}`;
    }
}

class Designer extends Funcionario {
    constructor(nome, salario, portfolio) {
        super(nome, salario);
        this.portfolio = portfolio;
    }

    mostrarPortfolio() {
        return `Portfolio: ${this.portfolio}`;
    }
}

class Departamento {
    constructor(nome) {
        this.nome = nome;
        this.funcionarios = [];
    }

    adicionarFuncionario(funcionario) {
        this.funcionarios.push(funcionario);
        console.log(`${funcionario.nome} adicionado ao departamento ${this.nome}.`);
    }

    removerFuncionario(nome) {
        this.funcionarios = this.funcionarios.filter(f => f.nome !== nome);
        console.log(`${nome} removido do departamento ${this.nome}.`);
    }

    listarFuncionarios() {
        return this.funcionarios.map(f => f.nome).join(", ");
    }
}

// Testando as classes
const departamentoTI = new Departamento("TI");

const dev1 = new Desenvolvedor("Alice", 7000, "Sistema de Gestão");
const designer1 = new Designer("Bob", 6000, "Design de Interface");

departamentoTI.adicionarFuncionario(dev1);
departamentoTI.adicionarFuncionario(designer1);

console.log(`Funcionários no departamento: ${departamentoTI.listarFuncionarios()}`); // "Funcionários no departamento: Alice, Bob"

console.log(dev1.mostrarProjeto()); // "Projeto atual: Sistema de Gestão"
console.log(designer1.mostrarPortfolio()); // "Portfolio: Design de Interface"

departamentoTI.removerFuncionario("Alice");
console.log(`Funcionários no departamento: ${departamentoTI.listarFuncionarios()}`); // "Funcionários no departamento: Bob"
