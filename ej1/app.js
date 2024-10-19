import { america, diners, discover, mastercard, visa } from "./tarjetas.js";
//importar los elementos tipo funcion del archivo tarjet.js 
while (true) {
    //el bucle nos permite mantenernos en el principio del codigo hasta que se cumpla la solicitud
    let numero = prompt("Ingrese el número de su tarjeta (solo números, máximo 16 dígitos):");
    //realizara una pregunta para el usuario en este caso sera la tarjeta

    try {
        // Verificar si el número contiene caracteres no permitidos o su longitud no es válida
        if (!/^\d+$/.test(numero)) {
            // ^inicio de string    \d  exige caracter numeruco   + permite varios caracteres $ cierra el string
            throw new Error("Solo se permiten números.");

        }

        if (numero.length > 16) {
            //length nos permite contar la cantidad de caracteres ingresados en numero en este caso debe ser mayor a 16
            throw new Error("Longitud no válida. El número debe tener máximo 16 dígitos.");
            //nos permite generar una alerta personalizada con el texto del error
        }

        if (parseInt(numero) <= 0) {
            //declaramos numero como entero y la condicion se cumple si es menos ra cero
            throw new Error("El número de tarjeta no puede ser negativo.");
            //alerta personalizada
        }

        // Verificar el tipo de tarjeta
        let tipoTarjeta = verificarTarjeta(numero);
        //usamos la funcion importada para identificar la tarjeta y con la funcion verificartarjetas asignamos el nombre
        alert(`La tarjeta es: ${tipoTarjeta}`);
        //nos permite ver la tarjeta
        break; // salimos del bucle si todo es correcto

    } catch (error) {
        alert(error.message); // Muestra el error y vuelve a pedir la tarjeta
    }
}

// Función que verifica el tipo de tarjeta
function verificarTarjeta(numero) {
    if (america(numero)) return "American Express";
    if (diners(numero)) return "Diners Club";
    if (discover(numero)) return "Discover";
    if (mastercard(numero)) return "Mastercard";
    if (visa(numero)) return "Visa";
    //nos permite comparar el numero con cada funcion 
    return "Tarjeta no encontrada o no válida.";
    //si el numero no cumple nminguna funcion declarada anterior
}
