const livros = require('./listaLivros')

let atual = 0;
let menorPreco = 0;

while (atual < livros.length) {
    if (livros[atual].preco < livros[menorPreco].preco) {
        menorPreco = atual
    }
    atual ++;
}
console.log (`O livro mais barato custa R$${livros[menorPreco].preco},00 e o título é ${livros[menorPreco].titulo}`)
