/*
 1- Necesito que me cuente palabras... desde un string
 
 2- necesito una funcion que me diga si se repiten o no los elementos en un array..
 
 3- te paso una URL y me devuelve el nombre del dominio del sitio web...

 4- TE paso nombre, apellido y numero de comision y tiene que devolver un objeto..

 5- tengo que contar cuantos numeros tiene un dato y si es igual a 8 esta bien y sino esta mal...
 No puedo devolver verdadero o falso...

*/ 

export function principalForm ( texto ) {

    let cantidadPalabras = 0;

    let arrayDePalabras  = texto.split(" "); // Esto me devuelve un array...

    cantidadPalabras = arrayDePalabras.length;

    return cantidadPalabras;
}

export function tieneElementosRepetidos( arrayDeElementos ){

    let tieneElementosUnicos = false;
    let setDeElementos = new Set(arrayDeElementos);// Toma elementos UNICOS

    //Entonces seran iguales si y solo si son unicos
    tieneElementosUnicos = setDeElementos.size === arrayDeElementos.length; 

    return tieneElementosUnicos;
}


// Por ejemplo si recibo https://meet.google.com/tsn-qdgr-ynx?authuser=1
export function dameDominioDeURL( textoURL ) {
    let dominio = "";
    const separador = "//"
    let indexStartDomain = textoURL.indexOf(separador)+ separador.length;
    let indexEndDomain = indexStartDomain +  textoURL.substring(indexStartDomain).indexOf("/");

    dominio =  textoURL.substring(indexStartDomain,  indexEndDomain);

    return dominio;
}


export function crearObjetoAlumno( nombre, appellido, comision ){
    let objetoAlumno = {
        name: nombre,
        surname: appellido,
        classNumber: comision
    };

    /*
    // Create an object:
    const car = { 
                type:"Fiat", 
                model:"500", 
                color:"white"
                };
    */

    return objetoAlumno;
}


export function validacionDatoNumerico( numero, onSucces , onError  ) {
    let miNumero = new String(numero)

    let cantidadNumeros = miNumero.length;

    const numerosNecesarios = 8;// por ahora lo dejamos asi..

    if( cantidadNumeros !== numerosNecesarios) {
        //Si algo sale mal...
        onError();
    } else {
        //Sino...salio bien..
        onSucces();
    }

}