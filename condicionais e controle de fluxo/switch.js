// switch

/*let expression = 'a'

switch (expression) {
    case 'a':
        // codigo
        console.log('a')
        break
    case 'b':
        // codigo de expression b
        console.log('b')
        break
    default:
        console.log('default')
        break
}*/

function calcule(number1, operador, number2) {
    let resultado 

    switch (operador) {
        case '+':
            resultado = number1 + number2
        case '-':
            resultado = number1 - number2
            break
        case '*':
            resultado = number1 * number2
            break
        case '/':
            resultado = number1 / number2
            break
        default:
            console.log('não implementado')                
    }

    return resultado
}

console.log(calcule(10025, '-', 1195))

