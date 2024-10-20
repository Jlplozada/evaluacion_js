// Función expresada que recibe un parámetro rest (...palabras)
const encontrarPalabraMayor = (...palabras) => {
    // Inicializamos la variable palabraMayor con la primera palabra del array
    let palabraMayor = palabras[0];

    // Recorremos cada palabra del array 'palabras'
    for (let palabra of palabras) {
        // Si la longitud de la palabra actual es mayor que la de palabraMayor
        if (palabra.length > palabraMayor.length) {
            // Actualizamos palabraMayor con la palabra actual
            palabraMayor = palabra;
        }
    }
    // Retornamos la palabra que tenga la mayor longitud
    return palabraMayor;
};

// Función para ingresar palabras desde el teclado (usando prompt)
const ingresarPalabras = () => {
    // Solicitamos al usuario que ingrese cuántas palabras quiere ingresar
    let n = parseInt(prompt("¿Cuántas palabras deseas ingresar?"));

    // Declaramos un array vacío para almacenar las palabras
    let palabras = [];

    // Iniciamos un bucle que se ejecuta 'n' veces (según el número ingresado)
    for (let i = 0; i < n; i++) {
        // Pedimos al usuario que ingrese la palabra correspondiente en cada iteración
        let palabra = prompt(`Ingresa la palabra ${i + 1}:`);
        // Agregamos la palabra al array 'palabras'
        palabras.push(palabra);
    }

    // Llamamos a la función 'encontrarPalabraMayor' pasando el array 'palabras'
    // Usamos el operador spread (...) para enviar las palabras como argumentos individuales
    let palabraMayor = encontrarPalabraMayor(...palabras);

    // Mostramos en la consola cuál es la palabra más larga
    console.log(`La palabra mayor es: ${palabraMayor}`);
};

// Llamamos a la función 'ingresarPalabras' para iniciar el proceso
ingresarPalabras();
