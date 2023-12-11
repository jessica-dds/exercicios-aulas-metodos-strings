// quero obter apenas os dois dígitos do estado de uma cidade

const cidade = "Salvador-BA";

const penultimoIndex = cidade.length - 2;
let estado = cidade.slice(penultimoIndex);
console.log(estado);