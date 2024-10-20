import { calculadora } from "./calculadora.js";  
// importamos la función calculadora desde el archivo calculadora.js

let a = parseInt(prompt("Ingrese el primer número"));
// Preguntamos al usuario el primer número y lo convertimos a entero

let b = parseInt(prompt("Ingrese el segundo número"));
// Preguntamos al usuario el segundo número y lo convertimos a entero

let opcion = parseInt(prompt(`
Elija la operación que desea realizar:
1 - Suma
2 - Resta
3 - Multiplicación
4 - División
`));
// Preguntamos al usuario qué operación desea realizar y lo guardamos en la variable opcion

// Verificamos qué operación se seleccionó utilizando comparaciones estrictas (===)
if (opcion === 1) {
    calculadora(a, b, "suma");
    // Si la opción es 1, llamamos la función calculadora con la operación "suma"
} else if (opcion === 2) {
    calculadora(a, b, "resta");
    // Si la opción es 2, llamamos la función calculadora con la operación "resta"
} else if (opcion === 3) {
    calculadora(a, b, "multiplicacion");
    // Si la opción es 3, llamamos la función calculadora con la operación "multiplicacion"
} else if (opcion === 4) {
    calculadora(a, b, "division");
    // Si la opción es 4, llamamos la función calculadora con la operación "division"
} else {
    alert("Opción no válida");
    // Si la opción no es ninguna de las anteriores, mostramos una alerta de opción no válida
}
