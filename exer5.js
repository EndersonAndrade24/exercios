class ContaBancaria {
    #saldo; // Propriedade privada
    #titular; // Propriedade privada

    constructor(titular, saldoInicial = 0) {
        this.#titular = titular;
        this.#saldo = saldoInicial;
    }

    depositar(valor) {
        if (valor <= 0) {
            console.log("O valor do depósito deve ser positivo.");
            return;
        }
        this.#saldo += valor;
        console.log(`Depósito de R$ ${valor.toFixed(2)} realizado com sucesso!`);
    }

    sacar(valor) {
        if (valor <= 0) {
            console.log("O valor do saque deve ser positivo.");
            return;
        }
        if (valor > this.#saldo) {
            console.log("Saldo insuficiente para saque.");
            return;
        }
        this.#saldo -= valor;
        console.log(`Saque de R$ ${valor.toFixed(2)} realizado com sucesso!`);
    }

    verSaldo() {
        return `Saldo atual: R$ ${this.#saldo.toFixed(2)}`;
    }
}

// Testando a classe ContaBancaria
const conta1 = new ContaBancaria("João", 1000);

console.log(conta1.verSaldo()); // "Saldo atual: R$ 1000.00"
conta1.depositar(500); // "Depósito de R$ 500.00 realizado com sucesso!"
console.log(conta1.verSaldo()); // "Saldo atual: R$ 1500.00"
conta1.sacar(200); // "Saque de R$ 200.00 realizado com sucesso!"
console.log(conta1.verSaldo()); // "Saldo atual: R$ 1300.00"
conta1.sacar(1500); // "Saldo insuficiente para saque."
