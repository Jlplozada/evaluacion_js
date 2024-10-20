import { ordenarNumeros } from '../ej3/numeros.js';

// solicitar numeros al usuario
function solicitarNumeros() {
    let cantidad = parseInt(prompt("¿Cuántos números deseas ingresar?"));
    //nos pregunta cuantos numeros usaremos
    let numerosIngresados = [];
    //el arreglo nos permite almacenar varios numeros

    for (let i = 0; i < cantidad; i++) {
        let numero = parseFloat(prompt(`Ingresa el número ${i + 1}:`));
        //nos empieza a preguntar cada numero
        numerosIngresados.push(numero);
    }

    // ordenar los numeros usando la funcion importada
    const numerosOrdenados = ordenarNumeros(...numerosIngresados);
    console.table(numerosOrdenados);
}

// ejecutar la función principal
solicitarNumeros();
