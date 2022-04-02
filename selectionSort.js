const livros = require('./listaLivros');
const menorValor = require('./menorValor');

let atual = 0;
while (atual < livros.length) {

    let menor = menorValor(livros, atual)
    let livroAtual = livros[atual]
    let livroMenorPreco = livros[menor]
    console.log (livros)

    livros[atual] = livroMenorPreco
    livros[menor] = livroAtual
    atual++;
}

console.log (`Ordenado `, {livros})