/**
 * Uso de funciones con valor de retorno (return)
 */

// La función genera el saludo y lo devuelve, no lo imprime directamente
function sayHello(userName) {
    return `Hola ${userName}`;
}

// Para ver el resultado en consola, debemos imprimir la llamada a la función
console.log(sayHello('John'));

let name1 = 'Alejandro';
let mensaje = sayHello(name1);

// Imprimimos la variable que contiene el resultado del return
console.log(mensaje);