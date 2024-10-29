class Livro {
    constructor(titulo, autor, genero) {
        this.titulo = titulo;
        this.autor = autor;
        this.genero = genero;
        this.disponivel = true; // Indica se o livro está disponível
    }

    // Método para emprestar o livro
    emprestar() {
        if (this.disponivel) {
            this.disponivel = false;
            return `O livro "${this.titulo}" foi emprestado com sucesso!`;
        } else {
            return `Desculpe, o livro "${this.titulo}" não está disponível.`;
        }
    }

    // Método para devolver o livro
    devolver() {
        this.disponivel = true;
        return `O livro "${this.titulo}" foi devolvido com sucesso!`;
    }
}

class Biblioteca {
    constructor(nome) {
        this.nome = nome;
        this.livros = []; // Lista de livros na biblioteca
    }

    // Método para adicionar um livro à biblioteca
    adicionarLivro(livro) {
        this.livros.push(livro);
        console.log(`O livro "${livro.titulo}" foi adicionado à biblioteca ${this.nome}.`);
    }

    // Método para retornar livros disponíveis, com opção de filtrar por gênero
    livrosDisponiveis(genero = null) {
        return this.livros.filter(livro => livro.disponivel && (!genero || livro.genero === genero));
    }
}

// Testando as classes
const biblioteca = new Biblioteca("Biblioteca Municipal");

// Adicionando livros à biblioteca
biblioteca.adicionarLivro(new Livro("O Senhor dos Anéis", "J.R.R. Tolkien", "Fantasia"));
biblioteca.adicionarLivro(new Livro("1984", "George Orwell", "Ficção"));
biblioteca.adicionarLivro(new Livro("A Culpa é das Estrelas", "John Green", "Romance"));

// Verificando livros disponíveis
console.log("Livros disponíveis:");
biblioteca.livrosDisponiveis().forEach(livro => console.log(`- "${livro.titulo}"`)); 

// Emprestando um livro
const livroParaEmprestar = biblioteca.livrosDisponiveis()[0];
console.log(livroParaEmprestar.emprestar()); // "O livro "O Senhor dos Anéis" foi emprestado com sucesso!"

// Verificando livros disponíveis novamente
console.log("Livros disponíveis após empréstimo:");
biblioteca.livrosDisponiveis().forEach(livro => console.log(`- "${livro.titulo}"`)); 

// Devolvendo um livro
console.log(livroParaEmprestar.devolver()); // "O livro "O Senhor dos Anéis" foi devolvido com sucesso!"

// Filtrando livros disponíveis por gênero
console.log("Livros disponíveis do gênero 'Romance':");
biblioteca.livrosDisponiveis("Romance").forEach(livro => console.log(`- "${livro.titulo}"`)); 
