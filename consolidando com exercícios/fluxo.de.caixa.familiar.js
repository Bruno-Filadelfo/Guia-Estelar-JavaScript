/*  ### Sistema de gastos familiar 

Crie um objetivo que possuirá 2 
propriedades, ambas do tipo array:
    * receitas []
    * despesas

agora crie uma função que irá calcular 
o total de rendimento e despesas e irá mostrar
uma mensagm se a familia está com saldo positivo
ou negativo, seguindo do valor do saldo

*/

let familia = {
    rendimento: [3500, 3500],
    despesas: [200, 250, 180, 900, 54777777],
}

function soma(array) {
    let total = 0;
    for(let value of array) {
        total += value
    }
    return total 
}

function calculodaBalança() {
    const calculodoRendimento = soma(familia.rendimento)
    const calculodeDespesas = soma(familia.despesas)
    const total = calculodoRendimento - calculodeDespesas

    const saldo = total >=0

    let mensagem = "Negativo"

    if(saldo <=0 ){
        mensagem = "positivo"
    }

    console.log(`seu saldo é ${mensagem}: R$${total.toFixed(2)}`)
}

calculodaBalança()


