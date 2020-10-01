var nombreApellido = `Vivian Garzón` 
var edad = 23

// Función tipo declarativa
function imprimirEdad(nombre, edad) {
    console.log( `${nombre} tiene la edad de ${edad}.` )
}

// Función tipo flecha
var imprimirEdad2 = (nombre, edad) => { 
    console.log( `${nombre} tiene la edad de ${edad}.` ) 
}

// Función tipo expresiva
var imprimirEdad3 = function(nombre, edad) {
    console.log( `${nombre} tiene la edad de ${edad}.` ) 
}

imprimirEdad( nombreApellido, edad )
imprimirEdad( `Jessbell Garzón`, 25 )
imprimirEdad2( nombreApellido, edad )
imprimirEdad3( `Jayden Garzón`, 2 )