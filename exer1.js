const livro = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    anoPublicacao: 1899,
    
    getInfo: function() {
        return `${this.titulo} - ${this.autor} (${this.anoPublicacao})`;
    },
    
    isClassico: function() {
        return this.anoPublicacao < 1990;
    }
};

// Exemplos de uso:
console.log(livro.getInfo()); // "Dom Casmurro - Machado de Assis (1899)"
console.log(livro.isClassico()); // true
