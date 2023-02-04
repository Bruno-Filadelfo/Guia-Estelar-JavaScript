/*Scope e var*/

/* 01

# Scope 

* Escopo determina a visibilidade de alguma variável no JS  

*/

/* 02

# Block statement

// vamos inicia um bloco 
{
    // aqui dentro é um bloco e posso colocar qualquer códio
    // aqui fechamos o bloco
} 

   o bloco, também criará um novo escopo. Chamamos de `block-scoped`

*/

/* 02 */

{
    let x = 0
    console.log(x)
}

/* 03

  // var é global e poderá funcionar fora de um escopo de bloco

*/

/* 03 */

console.log('> existe x antes do bloco?', x)

{
    var x = 0
}

console.log('> existe x depois do bloco?', x)


  