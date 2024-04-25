const testEdad = false;
const testNotas = false;
const testNotasLetras = testNotas;
const testMeses = false;
const testRepeticion = false;
const testValidacionDatos = true;

if (testEdad) {
    let edad = prompt("Que edad tenes?");

    // que pasa si tiene menos de 18 años?
    //    generar una alerta que NO puede comprar...
    if (edad < 18) {
        document.write("<h1>No podes comprar... sos menor..</h1>");
    }
    else {
        // y si tiene 18 o mas?
        // mostrar la listra de productos...
        const myHTML = "<ul><li>Cerveza</li><li>Vino</li></ul>"
        document.write(myHTML);
    }
}

if (testNotas) {
    let nota = Number.parseInt(prompt("Que nota te sacaste?"));

    /*
    Si te sacaste entre 0 y 4 reprobado   - F
    Si te sacaste entre 5 y 7 aprobado    - C
    Si te sacaste entre 8 y 9 es muy bien - B
    (nota < 10) y ademas (&&) (nota > 7)

    Si te sacaste 10 es sobresaliente  - Tambien un A
    */

    /* if(nota === 10 ) {
         document.write("Crack!");
     } else if ( (nota < 10) && (nota > 7 )  ) {
         document.write("Muy bien!");
     } else if (  (nota < 8) && (nota > 4 ) ) {
         document.write("aprobado");
     } else if (  (nota < 5) && (nota >= 0  ) ){
         document.write("reprobado");
     } else {
         document.write("Dato invalido...")
     }*/

    switch (nota) {
        case 10:
            document.write("Crack!");
            break;
        case 9:
        case 8:
            document.write("Muy bien!");
            break;
        case 7:
        case 6:
        case 5:
            document.write("aprobado");
            break;
        case 4:
        case 3:
        case 2:
        case 1:
        case 0:
            document.write("reprobado");
            break;
        default:
            document.write("Dato invalido...");
            break;
    }
}


if (testNotasLetras) {
    document.write("<br> <br><h4>nota con letras</h4><br>");
    let nota = prompt("Que nota te sacaste? (letra)");

    switch (nota) {
        case 'A':
            document.write("Crack!");
            break;
        case 'B':
            document.write("Muy bien!");
            break;
        case 'C':
            document.write("aprobado");
            break;
        case 'F':
            document.write("reprobado");
            break;
        default:
            document.write("Dato invalido...");
            break;
    }
}


if (testMeses) {
    let month_number = Number.parseInt(prompt("Ingrese el numero del mes.."));
    //Debo mostrar en pantalla... el nombre dle mes en funcion del numero...
    /*if (month_number === 12) {
        document.write("Diciembre")
    } else if (month_number === 11) {

    } else if (month_number === 10) {

    }*/

    // Escribir el codigo de seleccion de mese en switch case...
    switch (month_number) {
        case 12:
            document.write("Diciembre")
            break;
        case 11:
            document.write("Noviembre")
            break;
        case 10:
            document.write("octubre")
            break;
        case 9:
            document.write("Septiembre")
            break;
        case 8:
            document.write("Agosto")
            break;
        case 7:
            document.write("Julio")
            break;
        case 6:
            document.write("Junio")
            break;
        case 5:
            document.write("Mayo")
            break;
        case 4:
            document.write("Abril")
            break;
        case 3:
            document.write("Marzo")
            break;
        case 2:
            document.write("Febrero")
            break;
        case 1:
            document.write("Enero")
            break;
        default:
            document.write("Valor incorrecto")
            break;
    }
}

if (testRepeticion) {
    let repeticion_number = Number.parseInt(prompt("Ingrese el numero para contar hasta.."));
    let contador = 0;
    document.write("Se va a contar hasta: " + repeticion_number);
    document.write("<br>");
    /*
    for (let i = 1; i <= repeticion_number ; i++ ) {
        // tengo que incrementar el contador...
        document.write(i + "...<br>");
    }*/
    /*let i = 1;
    while ( i <= repeticion_number ) {
            // tengo que incrementar el contador...
            document.write(i + "...<br>");
            i++;
    }*/
    let i = 1;
    do {
        // tengo que incrementar el contador...
        document.write(i + "...<br>");
        i++;
    } while (i <= repeticion_number);

    if (contador >= repeticion_number) {
        document.write("Termino de contar...");
    }

}

if (testValidacionDatos) {
    validacionDatos();
}


/// Pasar todos los algoritmos dentro de las sentencias IF
// a una funcion dentro de libs...