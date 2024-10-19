let a = parseInt(prompt("ingrese el primer numero")),b=parseInt(prompt("ingrese el segundo numero"));
        
        function calculadora (a,b){
            let suma= a + b;
            let resta= a - b;
            let multiplicacion= a *b;
            let div;
            if (b==0) {
                alert=("No podemos dividir por 0")
                div=0;
            }else{
                div=a/b;
            }
            alert(`
            suma=${suma}
            resta=${resta}
            multiplicacion=${multiplicacion}
            divicion=${div}
            `);
        }
        calculadora(a,b);