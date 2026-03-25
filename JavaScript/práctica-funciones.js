function sumarHasta(numero) {
    if (numero <= 0) {
        console.error("Error: El número debe ser mayor a cero.");
        return -1;
    }

    let suma = 0;
    for (let i = 1; i <= numero; i++) {
        suma += i;
    }

    return suma;
}

console.log(sumarHasta(5));
console.log(sumarHasta(-3)); 