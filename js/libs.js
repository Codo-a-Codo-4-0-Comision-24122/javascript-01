function validacionDatos() {
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