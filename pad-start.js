// criar função para imprimir data com 3 parâmetros
// dia, mês e ano
// modelo 01/01/2022


function imprimirData(dia, mes, ano) {

    // Duas opções de transformar number em string 
    const diaFormatado = String(dia).padStart(2, "0");
    const mesFormatado = `${mes}`.padStart(2, "0");

    console.log(`${diaFormatado}/${mesFormatado}/${ano}`);
}

imprimirData(1, 1, 2022);