let numero1 = prompt('Primer digito')
let numero2 = prompt('sugundo digito')
let operacion = prompt('Que operacion va a realizar')


const suma = () => parseInt(numero1) + parseInt(numero2);
const resta = () => parseInt(numero1) - parseInt(numero2);
const dividir = () => parseInt(numero1) / parseInt(numero2);
const multiplicar = () => parseInt(numero1) * parseInt(numero2);


if (operacion == 'suma' || operacion == '+' || operacion == 'SUMA' || operacion == 'Suma') {
    alert(suma())
} else if (operacion == 'resta' || operacion == '-' || operacion == 'RESTA' || operacion == 'Resta') {
    alert(resta());
} else if (operacion == 'dividir' || operacion == 'divicion' || operacion == '/' || operacion == 'Divicion' || operacion == 'DIVICION') {
    alert(dividir());
} else if (operacion == 'multiplicar' || operacion == '*' || operacion == 'multiplica' || operacion == 'Multiplicacion') {
    alert(multiplicar());
}

