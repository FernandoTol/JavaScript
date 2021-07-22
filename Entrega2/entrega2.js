let clave = prompt('Hola Compañero');

if (clave == 'Hola' || clave == 'hola' || clave == 'HOLA') {
    alert('Muchas gracias por saludar');
};

let  numero = prompt('Dime tu numero favorito este no puede ser mayor a 1000');

if (numero > 1000) {
    alert('Este numero es demaciado grande');
} else if (numero < 10 || numero > 50) {

}else if (numero >= 10) {
    alert('WOW es numero espectacular');
}