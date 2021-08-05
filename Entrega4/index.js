//let numero1 = prompt('Primer digito')
//let numero2 = prompt('sugundo digito')
//let operacion = prompt('Que operacion va a realizar')
let cantidadOperaciones = prompt('cantidad')

function suma() {
    return parseInt(numero1) + parseInt(numero2)
}
function resta() {
    return parseInt(numero1) - parseInt(numero2)
}
function dividir() {
    return parseInt(numero1) / parseInt(numero2)
}
function multiplicar() {
    return parseInt(numero1) * parseInt(numero2)
}

for(i=0; i<=cantidadOperaciones; i++){let numero1 = prompt('Primer digito')
let numero2 = prompt('sugundo digito')
let operacion = prompt('Que operacion va a realizar')
if (operacion == 'suma' || operacion == '+') {
    alert(suma())
}else if (operacion == 'resta' || operacion == '-'){
    alert(resta());
}else if (operacion == 'dividir' || operacion == 'divicion'|| operacion == '/'){
    alert(dividir());
}else if (operacion == 'multiplicar' || operacion == '*'){
    alert(multiplicar());
}
}