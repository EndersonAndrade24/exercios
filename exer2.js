function criarPessoa(nome, idade, profissao) {
    return {
        nome: nome,
        idade: idade,
        profissao: profissao,
        
        saudar: function() {
            return `Olá, meu nome é ${this.nome}!`;
        },
        
        mostrarInfo: function() {
            return `Nome: ${this.nome}, Idade: ${this.idade}, Profissão: ${this.profissao}`;
        }
    };
}

// Testando a função
const pessoa1 = criarPessoa("Alice", 30, "Engenheira");
const pessoa2 = criarPessoa("Bruno", 25, "Designer");
const pessoa3 = criarPessoa("Carla", 40, "Professora");

console.log(pessoa1.saudar()); // "Olá, meu nome é Alice!"
console.log(pessoa1.mostrarInfo()); // "Nome: Alice, Idade: 30, Profissão: Engenheira"

console.log(pessoa2.saudar()); // "Olá, meu nome é Bruno!"
console.log(pessoa2.mostrarInfo()); // "Nome: Bruno, Idade: 25, Profissão: Designer"

console.log(pessoa3.saudar()); // "Olá, meu nome é Carla!"
console.log(pessoa3.mostrarInfo()); // "Nome: Carla, Idade: 40, Profissão: Professora"
