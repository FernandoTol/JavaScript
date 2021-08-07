let cantidadOperaciones = prompt('cantidad')


const suma = () => parseInt(numero1) + parseInt(numero2);
const resta = () => parseInt(numero1) - parseInt(numero2);
const dividir = () => parseInt(numero1) / parseInt(numero2);
const multiplicar = () => parseInt(numero1) * parseInt(numero2);


for (i = 0; i <= cantidadOperaciones; i++) {
    let numero1 = prompt('Primer digito')
    let numero2 = prompt('sugundo digito')
    let operacion = prompt('Que operacion va a realizar')
    if (operacion == 'suma' || operacion == '+') {
        alert(suma())
    } else if (operacion == 'resta' || operacion == '-') {
        alert(resta());
    } else if (operacion == 'dividir' || operacion == 'divicion' || operacion == '/') {
        alert(dividir());
    } else if (operacion == 'multiplicar' || operacion == '*') {
        alert(multiplicar());
    }
}

