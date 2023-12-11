// Saber se um email é válido
// tem que ter pelo menos um @
// tem que ter pelo menos um ponto depois do @

const possivelEMail = "jessica@cubos.academy";

const indexArroba = possivelEMail.indexOf("@"); // 7

const indexPontoAposArroba = possivelEMail.indexOf(".", indexArroba);

if (indexPontoAposArroba > indexArroba) {
    console.log("Email atende as requisições.")
} else {
    console.log("Não há nenhum ponto após o arroba.");
}