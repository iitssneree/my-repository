function esMultiploDeTres(num) {
    return num % 3 === 0;
}

function contarMultiplosDeTres(n) {
    let contador = 0;

    for (let i = 1; i <= n; i++) {
        if (esMultiploDeTres(i)) {
            contador++;
        }
    }

    return contador;
}


function mostrarInforme(n) {
    const total = contarMultiplosDeTres(n);

    console.log("Cantidad de múltiplos de 3 entre 1 y " + n + ": " + total);
}

mostrarInforme(10); 