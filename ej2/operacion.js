// Función para sumar todos los números
export function suma(numeros) {
    let total = 0;
    for (let num of numeros) {
        total += num;
    }
    return total;
}

// Función para contar números pares
export function contarPares(numeros) {
    let count = 0;
    for (let num of numeros) {
        if (num % 2 === 0) {
            count++;
        }
    }
    return count;
}

// Función para contar números primos
export function contarPrimos(numeros) {
    let count = 0;
    for (let num of numeros) {
        if (esPrimo(num)) {
            count++;
        }
    }
    return count;
}

// Función para calcular el promedio de números primos
export function promedioPrimos(numeros) {
    let primos = [];
    for (let num of numeros) {
        if (esPrimo(num)) {
            primos.push(num);
        }
    }
    return primos.length ? suma(primos) / primos.length : 0;
}

// Función para calcular el promedio de números pares
export function promedioPares(numeros) {
    let pares = [];
    for (let num of numeros) {
        if (num % 2 === 0) {
            pares.push(num);
        }
    }
    return pares.length ? suma(pares) / pares.length : 0;
}

// Función auxiliar para verificar si un número es primo
function esPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
