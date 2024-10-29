class Quarto {
    constructor(numero, tipo) {
        this.numero = numero;
        this.tipo = tipo; // Tipo do quarto (ex: "simples", "luxo")
        this.reservado = false; // Indica se o quarto está reservado
    }

    // Método para verificar a disponibilidade do quarto
    estaDisponivel() {
        return !this.reservado;
    }

    // Método para reservar o quarto
    reservar() {
        if (this.estaDisponivel()) {
            this.reservado = true;
            return `Quarto ${this.numero} reservado com sucesso!`;
        } else {
            return `Quarto ${this.numero} já está reservado.`;
        }
    }

    // Método para cancelar a reserva
    cancelarReserva() {
        if (!this.estaDisponivel()) {
            this.reservado = false;
            return `Reserva do quarto ${this.numero} cancelada com sucesso!`;
        } else {
            return `Quarto ${this.numero} não está reservado.`;
        }
    }

    // Método que deve ser sobrescrito nas subclasses para calcular o preço
    calcularPreco() {
        throw new Error("Método 'calcularPreco' deve ser implementado na subclasse.");
    }
}

class QuartoSimples extends Quarto {
    constructor(numero) {
        super(numero, "simples");
        this.precoBase = 100; // Preço base para quarto simples
    }

    calcularPreco() {
        return this.precoBase;
    }
}

class SuiteLuxo extends Quarto {
    constructor(numero) {
        super(numero, "luxo");
        this.precoBase = 300; // Preço base para suíte de luxo
        this.servicosAdicionais = 50; // Custo de serviços adicionais
    }

    calcularPreco() {
        return this.precoBase + this.servicosAdicionais;
    }
}

class Hotel {
    constructor(nome, localizacao) {
        this.nome = nome;
        this.localizacao = localizacao;
        this.quartos = [];
    }

    // Método para adicionar quartos ao hotel
    adicionarQuarto(quarto) {
        this.quartos.push(quarto);
        console.log(`Quarto ${quarto.numero} do tipo ${quarto.tipo} adicionado ao hotel ${this.nome}.`);
    }

    // Método para verificar a disponibilidade de quartos
    verDisponibilidade() {
        return this.quartos.filter(quarto => quarto.estaDisponivel());
    }

    // Método para mostrar preços dos quartos disponíveis
    mostrarPrecosDisponiveis() {
        const disponiveis = this.verDisponibilidade();
        return disponiveis.map(quarto => `Quarto ${quarto.numero} (${quarto.tipo}): R$ ${quarto.calcularPreco().toFixed(2)}`).join("\n");
    }
}

// Testando as classes
const hotel = new Hotel("Hotel Maravilha", "Praia do Sol");

// Adicionando quartos ao hotel
hotel.adicionarQuarto(new QuartoSimples(101));
hotel.adicionarQuarto(new SuiteLuxo(102));
hotel.adicionarQuarto(new QuartoSimples(201));
hotel.adicionarQuarto(new SuiteLuxo(202));

// Verificando a disponibilidade de quartos
console.log(`Quartos disponíveis:\n${hotel.mostrarPrecosDisponiveis()}`);

// Reservando um quarto
const quartoDisponivel = hotel.verDisponibilidade()[0];
console.log(quartoDisponivel.reservar()); // "Quarto 101 reservado com sucesso!"

// Verificando a disponibilidade novamente
console.log(`Quartos disponíveis:\n${hotel.mostrarPrecosDisponiveis()}`);

// Cancelando a reserva
console.log(quartoDisponivel.cancelarReserva()); // "Reserva do quarto 101 cancelada com sucesso!"

// Verificando a disponibilidade após o cancelamento
console.log(`Quartos disponíveis:\n${hotel.mostrarPrecosDisponiveis()}`);
