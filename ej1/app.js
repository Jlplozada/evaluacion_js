import { america, diners,discover,mastercard, visa } from "./tarjetas.js";


// console.log(america("341234567890123"));

// console.log(diners("36123456789012"));

// console.log(discover("6011345678901211"));

// console.log(mastercard("5123456789012345"));

// console.log(visa("4123456789012"));

while (true) {

let numero = prompt("Ingrese el numero de su tarjeta");


try{
    if(isNaN(numero)){
        throw new Error("Caracter no permitido");       
    }
    if (numero.length >16) {
        throw new Error("Longuitud no valida")        
    }
    if (parceInt(numero)>0) {
        throw new Error("No se permiten numeros negativos");        
    }
    alert(Saliendo)
    break;
}

catch (error){
    alert(error.message)

}

}


function VerificatePE(numero) {
    if (america(numero)) return "american Express";
    if (diners(numero)) return "Dinners Club";
    if (discover(numero)) return "Discover";
    if (mastercard(numero)) return "Master card";
    if (visa(numero)) return "Visa";
    return "Tarjeta no encontrada o no valida";
}

while (erro) {

    
    
}

// try {
//     if (isNaN(numero)) {
//         throw new Error("Caracter no valido");
//     }
//     if (numero.length>16) {
//         throw new Error("Logitud no valida");
//     }
//     if (parseInt(numero)<0) {
//         throw new Error("No se permiten numeros negativos");
//     }
// } catch (error) {
//     brake;
//     alert(error.message)
// }