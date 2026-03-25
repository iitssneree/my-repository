/**
 * En este fichero veremos como hacer uso básico de variables:
 *  1. Crear (declarar) una variable
 *  2. Asignar valor a una variable (nueva o que ya existe)
 *  3. Usar la variable (por ejemplo para imprimir su valor o su tipo)
 */

// ------------------------------
// Variable declarado con `let`
// ------------------------------

// En esta línea hacemos DOS cosas:
// 1. Crear (declarar) una variable llamada 'myVar'
// 2. le asignar el valor 0
let myVar = 0;

// Imprimir el valor de la variable y su tipo
console.log('---------------------------------------');
console.log(myVar);
console.log(typeof myVar);

// En esta línea asignamos un valor a la variable que ya esiste
// (*) Intenta añadir la palabra `let` antes de `myVar` y observa qué pasa 
myVar = "Hola!";
console.log('---------------------------------------');
console.log(myVar);
console.log(typeof myVar);

// ¿Qué tipo tendrá la variable tras esta asignación?
myVar = "false";
console.log('---------------------------------------');
console.log(myVar);
console.log(typeof myVar);

// ¿Y ahora?
myVar = false;
console.log('---------------------------------------');
console.log(myVar);
console.log(typeof myVar);

// ------------------------------
// Constantes
// ------------------------------
// Aquí declaramos una CONSTANTE y asignamos su valor (que no se podrá cambiar)
const USERNAME = 'John Doe';
console.log(USERNAME);

// ¿Qué pasaría si intentas asignar un nuevo valor a la variable `USERNAME`?



// ------------------------------
// Nombres de variables
// ------------------------------
// Mala práctica - no se sabe qué hace esta variable
let x = false;

// Buena práctica - la variable indica para qué sirve
let isUserActive = true;
