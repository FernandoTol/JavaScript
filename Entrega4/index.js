


while (true) {
    let continuacion = prompt('Desea continuar si/no')
    let numero1 = prompt('Primer digito')
    let numero2 = prompt('sugundo digito')
    let operacion = prompt('Que operacion va a realizar')

    const suma = () => parseInt(numero1) + parseInt(numero2);
    const resta = () => parseInt(numero1) - parseInt(numero2);
    const dividir = () => parseInt(numero1) / parseInt(numero2);
    const multiplicar = () => parseInt(numero1) * parseInt(numero2);

    if(continuacion == 'no'){
        break;
    }else if (operacion == 'suma' || operacion == '+') {
        alert(suma());
    } else if (operacion == 'resta' || operacion == '-') {
        alert(resta());
    } else if (operacion == 'dividir' || operacion == 'divicion' || operacion == '/') {
        alert(dividir());
    } else if (operacion == 'multiplicar' || operacion == '*') {
        alert(multiplicar());
    }
}