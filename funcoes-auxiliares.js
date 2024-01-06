const entradas = [5, 10, 120, 98, 23];
let verificador = 0;


function gets() {
    const valor = entradas[verificador];
    verificador += 1;
    return valor;
}

function print(valor) {
    console.log(valor);
}


function verificaMaior(arrayNumerico) {
    let caixinha = 0;
    for (let i = 0; i < arrayNumerico.length; i++) {
        if (arrayNumerico[i] > caixinha) {
            caixinha = arrayNumerico[i];
        }
    }

    console.log(caixinha);
}

module.exports = { gets, print, verificaMaior };