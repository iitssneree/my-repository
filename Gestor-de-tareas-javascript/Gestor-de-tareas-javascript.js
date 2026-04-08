// 2. Lista de tareas: Inicializada como un array vacío [cite: 15, 16]
let tareas = [];

/**
 * 4. Función opcional: getMaxId()
 * Devuelve el id más alto o 0 si está vacío[cite: 42, 43, 44].
 */
function getMaxId() {
    if (tareas.length === 0) {
        return 0; // 
    }
    
    let max = 0;
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].id > max) {
            max = tareas[i].id;
        }
    }
    return max; // [cite: 43]
}

/**
 * 3. a) createTask(title, priority)
 * Crea y añade una tarea cumpliendo todas las reglas[cite: 19, 20, 21].
 */
function createTask(title, priority) {
    // Verificación de prioridad entre 1 y 5 [cite: 8, 24]
    if (priority < 1 || priority > 5) {
        console.error("La prioridad debe estar entre 1 y 5");
        return;
    }

    // El nuevo id será: getMaxId() + 1 [cite: 28, 30, 48]
    const nuevoId = getMaxId() + 1;

    // Estructura del objeto [cite: 4, 5]
    const nuevaTarea = {
        id: nuevoId,           // [cite: 13, 26]
        title: title,          // [cite: 6, 23]
        priority: priority,    // [cite: 8, 24]
        done: false            // Siempre false al iniciar [cite: 10, 25]
    };

    tareas.push(nuevaTarea); // [cite: 21]
}

/**
 * 3. b) showTasks(priority)
 * Muestra las tareas según el parámetro recibido[cite: 33, 34].
 */
function showTasks(priority) {
    if (priority === undefined) {
        // Si no recibe parámetro, muestra todas [cite: 36, 39]
        console.log("Todas las tareas:", tareas);
    } else {
        // Si recibe un número, filtra por esa prioridad [cite: 37, 40]
        const filtradas = tareas.filter(t => t.priority === priority);
        console.log(`Tareas con prioridad ${priority}:`, filtradas);
    }
}

// --- Pruebas de funcionamiento ---
createTask("Estudiar JavaScript", 4); // [cite: 32]
createTask("Hacer ejercicio", 3);
createTask("Comprar pan", 1);

showTasks();    // Debería mostrar las 3 tareas [cite: 39]
showTasks(3);   // Debería mostrar solo "Hacer ejercicio" [cite: 40]