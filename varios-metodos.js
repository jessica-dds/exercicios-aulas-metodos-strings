// trasnsforme "jéssica andrade gleizer"
// em Jéssica Andrade Gleizer

const nome = "jéssica andrade gleizer";
const arrayDeNomes = nome.split(" ");
// percorre o string buscando o que tem no argumento,
// quando encontra corta e separa a linha em dois itens de um array


let nomeFormatado = "";
for (let item of arrayDeNomes) {
    //transformar a incial de cada item em maiúscula
    let primeiraLetra = item.slice(0, 1);
    let restanteDoNome = item.slice(1);

    nomeFormatado += primeiraLetra.toLocaleUpperCase() + restanteDoNome + " ";
}

console.log(nomeFormatado);