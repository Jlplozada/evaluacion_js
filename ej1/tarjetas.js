export function america(numero) {
    let exp = /^3[4-7]\d{13}$/;
    return exp.test(numero);
}

export function diners(numero) {
    let exp = /^3[6-8]\d{12}$/;
    return exp.test(numero);
}

export function discover(numero) {
    let exp = /^6011\d{12}$/;
    return exp.test(numero);
}


export function mastercard(numero) {
    let exp = /^5[1-5]\d{14}$/;
    return exp.test(numero);
}

export function visa(numero) {
    let exp = /^4\d{12}(?:\d{3})?$/;
    return exp.test(numero); 
}
