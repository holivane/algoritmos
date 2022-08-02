const livros = require('./listaLivros')


function menorValor(arrayProduto, statingPosition) {
    let atual = statingPosition;
    let menorPreco = statingPosition;

    while (atual < arrayProduto.length) {
        if (arrayProduto[atual].preco < arrayProduto[menorPreco].preco) {
            menorPreco = atual
        }
        atual++;
    }
    return menorPreco;
}

module.exports = menorValor;