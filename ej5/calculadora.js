export function calculadora(a, b, operacion) { 
    let resultado;
    
    if (operacion === "suma") {
        resultado = a + b;
        alert(`La suma de ${a} y ${b} es: ${resultado}`);
    } else if (operacion === "resta") {
        resultado = a - b;
        alert(`La resta de ${a} y ${b} es: ${resultado}`);
    } else if (operacion === "multiplicacion") {
        resultado = a * b;
        alert(`La multiplicación de ${a} y ${b} es: ${resultado}`);
    } else if (operacion === "division") {
        if (b === 0) {
            alert("No podemos dividir por 0");
            resultado = 0;
        } else {
            resultado = a / b;
            alert(`La división de ${a} entre ${b} es: ${resultado}`);
        }
    }
}
