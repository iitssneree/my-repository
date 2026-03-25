let contadorMultiplos = 0;


for (let i = 1; i <= 100; i++) {

    if (i % 7 === 0) {
        console.log(i + " es múltiplo de 7");
        contadorMultiplos++;
    }
}

console.log("-----------------------------------------");
console.log("Total de números múltiplos de 7: " + contadorMultiplos);