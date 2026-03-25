/**
 * Imprime todos los numeros pares entre 0 y 10
 */
const MAX_LOOP = 10;

console.log("Solución 1:");
console.log("===========");
for (let iter = 0; iter <= MAX_LOOP; iter++ ) {
    // Comprobamos si iter es par (se divide en 2 si resta)
    if (iter % 2 === 0) {
        console.log('dentro del bucle: ' + iter);
    }
}

console.log("Solución 2:");
console.log("===========");
// En esta solución incrementamos `iter` en 2 cada iteración
for (let iter = 0; iter <= MAX_LOOP; iter = iter + 2) {
    console.log('dentro del bucle: ' + iter);
}

console.log("Solución 3:");
console.log("===========");
for (let iter = 0; iter <= (MAX_LOOP / 2); iter++) {
    // Creamos una variable que contiene el doble de `iter`
    // ¡Importante! Qué ocurre si no dividimos MAX_LOOP en 2 en exp2???
    let dobleIter = iter * 2;
    console.log('dentro del bucle: ' + dobleIter);
}
