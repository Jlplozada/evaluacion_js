export function america(numero) {
    //export nos permite extraer la funcion declarada la cual usara los datos de  de la variable numeros 
    let exp = /^3[4-7]\d{13}$/;
    // ^inicio de string  3 como iniciador [un rango entre 4 y 7]  \d  exige caracter numeruco {el numero de digitos maximo}  $ cierra el string
    return exp.test(numero);
    // nos permite retornarn la variable exp y el test es un objeto que nos permite si la cadena concide con la variable numeros
}

export function diners(numero) {
    let exp = /^3[6-8]\d{12}$/;
    // ^inicio de string  3 como primeros digitos  [un rango entre 6 y 8]  \d  exige caracter numerico {el numero de digitos maximo}  $ cierra el string

    return exp.test(numero);
}

export function discover(numero) {
    let exp = /^6011\d{12}$/;
    // ^inicio de string  6011 como primeros digitos  \d  exige caracter numeruco {el numero de digitos maximo}$ cierra el string

    return exp.test(numero);
}


export function mastercard(numero) {
    let exp = /^5[1-5]\d{14}$/;
    // ^inicio de string 5 como primer digito   [un rango entre 1 y 5]   \d  exige caracter numeruco {el numero de digitos maximo} $ cierra el string

    return exp.test(numero);
}

export function visa(numero) {
    let exp = /^4\d{12}(?:\d{3})?$/;
    // ^inicio de string   4 primer digito {el numero de digitos maximo}  ?: else \d  exige caracter numeruco {3 caracteras}   + permite varios caracteres $ cierra el string

    return exp.test(numero); 

}
