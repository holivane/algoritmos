const listaLivros = require('./arrays');

function mergeSort(array) {
    if (array.length > 1) {
        const meio = Math.floor(array.length / 2);
        const parte1 = mergeSort(array.slice(0, meio));
        const parte2 = mergeSort(array.slice(meio, array.length));
        array = ordena(parte1, parte2)
    }
    return array;
}

function ordena(parte1, parte2) {
    let atualparte1 = 0;
    let atualparte2 = 0;
    const resultado = []

    while (atualparte1 < parte1.length && atualparte2 < parte2.length) {
        let produtoAtualParte1 = parte1[atualparte1];
        let produtoAtualParte2 = parte2[atualparte2];

        if (produtoAtualParte1.preco < produtoAtualParte2.preco) {
            resultado.push(produtoAtualParte1);
            atualparte1++;
        } else {
            resultado.push(produtoAtualParte2);
            atualparte2++;
        }
    }
    return resultado.concat(atualparte1 < parte1.length
        ? parte1.slice(atualparte1)
        : parte2.slice(atualparte2))
}

console.log(mergeSort(listaLivros));

