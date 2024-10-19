import { suma, contarPares, contarPrimos, promedioPrimos, promedioPares } from "./operaciones.js";

try {
    let numeros = [];
    let n = parseInt(prompt("¿Cuántos números deseas ingresar?"));
    
    if (isNaN(n) || n <= 0) {
        throw new Error("Debes ingresar un número válido mayor que 0.");
    }

    // Ingreso de los números
    for (let i = 0; i < n; i++) {
        let numero = parseInt(prompt(`Ingresa el número ${i + 1}:`));
        
        if (isNaN(numero) || numero < 0) {
            throw new Error("Solo se permiten números positivos.");
        }

        numeros.push(numero);
    }

    // Menú de operaciones basado en números
    let opcion = parseInt(prompt(`
        Selecciona la operación a realizar:
        1. Sumar los números
        2. Contar los números primos
        3. Contar los números pares
        4. Calcular el promedio de los números primos
        5. Calcular el promedio de los números pares
    `));

    if (opcion === 1) {
        alert(`La suma es: ${suma(numeros)}`);
    } else if (opcion === 2) {
        alert(`La cantidad de números primos es: ${contarPrimos(numeros)}`);
    } else if (opcion === 3) {
        alert(`La cantidad de números pares es: ${contarPares(numeros)}`);
    } else if (opcion === 4) {
        alert(`El promedio de los números primos es: ${promedioPrimos(numeros)}`);
    } else if (opcion === 5) {
        alert(`El promedio de los números pares es: ${promedioPares(numeros)}`);
    } else {
        alert("Opción no válida.");
    }
} catch (error) {
    alert(error.message);
}
