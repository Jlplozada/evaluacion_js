export function suma(numeros) {
    // creamos y exportamos la funcion suma la cual recibe un arreglo de numeros
    let total = 0; 
    // variable que almacenara la suma total
    for (let i = 0; i < numeros.length; i++) {
        // Recorremos el arrreglo utilizando un bucle  
        total += numeros[i]; 
        // sumamos cada numero al total
    }
    return total; 
    // retornamos el valor total de la suma
}

export function contarPares(numeros) {
    let count = 0; 
    // contador para los números pares
    for (let i = 0; i < numeros.length; i++) {
        // recorremos el array de numeros
        if (numeros[i] % 2 === 0) {
            // Verificamos si el numero es par
            count++; 
            // Aumentamos el contador si es par
        }
    }
    return count; 
    // retornamos el numero de pares encontrados
}

export function contarPrimos(numeros) {
    let count = 0; 
    // contador para los numeros primos
    for (let i = 0; i < numeros.length; i++) {
        // recorremos el array de numeros
        if (esPrimo(numeros[i])) {
            // si el número es primo aumentamos el contador
            count++;
        }
    }
    return count; 
    // retornamos la cantidad de numeros primos
}

export function promedioPrimos(numeros) {
    let primos = []; 
    // array para almacenar los numeros primos
    for (let i = 0; i < numeros.length; i++) {
        // Recorremos el array de números
        if (esPrimo(numeros[i])) {
            // si el nmero es primo lo agregamos al array
            primos.push(numeros[i]);
        }
    }
    // si hay numeros primos, calculamos el promedio y si no retornamos 0
    return primos.length ? suma(primos) / primos.length : 0;
}

export function promedioPares(numeros) {
    let pares = []; 
    // array para almacenar los numeros pares
    for (let i = 0; i < numeros.length; i++) {
        // recorremos el array de numeros
        if (numeros[i] % 2 === 0) {
            // si el numero es par    lo agregamos al array
            pares.push(numeros[i]);
        }
    }
    // si hay numeros pares calculamos el promedio y si no. retornamos 0
    return pares.length ? suma(pares) / pares.length : 0;
}

function esPrimo(num) {
    if (num < 2) return false;
     // los numeros menores que 2 no son primos
    for (let i = 2; i <= Math.sqrt(num); i++) {
        // verificamos si tiene divisores entre 2 y la raiz cuadrada del numero
        if (num % i === 0) return false; 
        // si encontramos un divisor, no es primo
    }
    return true; 
    //si no encontramos divisores es primo
}
