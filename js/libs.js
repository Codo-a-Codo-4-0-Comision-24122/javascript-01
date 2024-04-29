export function validacionDatos() {
    // Voy a pedir del usuario... 
    // numero de documento...
    // SI el usuario NO ingresa un numero... 
    // Voy a volver a pedirle el ingreso de datos...
    // hasta que lo ingrese bien...

    let validated = false;
    do {
        let numberDNI = Number.parseInt(prompt("Ingrese numero de DNI:"));
        validated = !Number.isNaN(numberDNI);

        if (validated) {
            document.write("Tu DNI es: " + numberDNI);
        }
    }
    while (!validated)
}

// El parametro valido e invalido son FUNCIONES asignadas a una variable...
export function validarCorreo( email , valido, invalido ) {
    let isValid = false;
    let emailAddress = email.split("@"); // Deberia buscar el arroba y partir en dos el string..
    // ejemplo
    // alejandro@email.com
    // me daria....
    // [ 'alejandro' , 'email.com']
    isValid = (emailAddress.length === 2); // deberia ser.. 2 siempre...

    if(isValid){
        valido();
    } else {
        invalido();
    }
}