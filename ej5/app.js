import {calculadora } from "./calculadora.js";  
//importamos la funcion calculadora del archivo calculadora.js

let a = parseInt(prompt("Ingrese el primer número"));
//creamos la variable a como entero y la preguntamos
let b = parseInt(prompt("Ingrese el segundo número"));
//creamos la variable b como entero y la preguntamos

let opcion = parseInt(prompt(`
Elija la operación que desea realizar:
1 - Suma
2 - Resta
3 - Multiplicación
4 - División
`));
//creamos la variable opcion que nos dpermitira elegir entre que operacion quer3emos realizar

if (opcion = "1") {
    //nos permite comparar si el digito de la variable opcion es igual es valida para la condicional
    calculadora(a, b, "suma");
    //nos permite ver el rtesultado de la funcion calculadora la cual es importada 
} else if (opcion = "2") {
    calculadora(a, b, "resta");
} else if (opcion = "3") {
    calculadora(a, b, "multiplicacion");
} else if (opcion = "4") {
    calculadora(a, b, "division");
} else {
    alert("Opción no válida");
    //alerta de operacion no valida
}

