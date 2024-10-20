export function calculadora(a, b, operacion) { 
    // Función que realiza una operación entre dos números, 'a' y 'b', según la operación seleccionada
    let resultado;
    
    if (operacion === "suma") {
        resultado = a + b;
        alert(`La suma de ${a} y ${b} es: ${resultado}`);
        // Si la operación es "suma", sumamos 'a' y 'b' y mostramos el resultado
    } else if (operacion === "resta") {
        resultado = a - b;
        alert(`La resta de ${a} y ${b} es: ${resultado}`);
        // Si la operación es "resta", restamos 'b' de 'a' y mostramos el resultado
    } else if (operacion === "multiplicacion") {
        resultado = a * b;
        alert(`La multiplicación de ${a} y ${b} es: ${resultado}`);
        // Si la operación es "multiplicación", multiplicamos 'a' y 'b' y mostramos el resultado
    } else if (operacion === "division") {
        if (b === 0) {
            alert("No podemos dividir por 0");
            resultado = 0;
            // Si 'b' es 0, no realizamos la división y mostramos un mensaje de error
        } else {
            resultado = a / b;
            alert(`La división de ${a} entre ${b} es: ${resultado}`);
            // Si 'b' no es 0, realizamos la división y mostramos el resultado
        }
    }
}
