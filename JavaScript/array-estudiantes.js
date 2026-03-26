let estudiantes = [
    { nombre: "Lucía", edad: 20, notas: [8, 9, 10] },
    { nombre: "Marcos", edad: 22, notas: [7, 6, 8] }
];

function agregarEstudiante(nombre, edad, notas) {
    const nuevoEstudiante = {
        nombre: nombre,
        edad: edad,
        notas: notas
    };

    estudiantes.push(nuevoEstudiante);
    console.log(`Estudiante ${nombre} agregado con éxito.`);
}

agregarEstudiante("Elena", 21, [9, 8, 9]);

console.log(estudiantes);

function calcularPromedio(estudiante) {
    const suma = estudiante.notas.reduce((acumulador, nota) => acumulador + nota, 0);
    const promedio = suma / estudiante.notas.length;

    return promedio;
}

agregarEstudiante("Elena", 21, [9, 8, 9]);

const promedioLucia = calcularPromedio(estudiantes[0]);
console.log(`El promedio de ${estudiantes[0].nombre} es: ${promedioLucia}`);

estudiantes.forEach(est => {
    console.log(`${est.nombre} tiene un promedio de: ${calcularPromedio(est).toFixed(2)}`);
});