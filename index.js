const precosLivros = [25, 30, 15, 50, 45, 20];

let atual = 0;
let menorPreco = 0;

while (atual < precosLivros.length) {
    if (precosLivros[atual] < precosLivros[menorPreco]) {
        menorPreco = atual
    }
    atual ++;
}
console.log (`O livro mais barato custa R$${precosLivros[menorPreco]},00`)
