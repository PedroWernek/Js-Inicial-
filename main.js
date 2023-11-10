console.log('Arquivo main.js vinculado com sucesso!');


//var btnTerceiro = document.getElementsByClassName('btnTerceiro');
var btnTerceiro = document.querySelector('.btnTerceiro');
console.log(btnTerceiro); 

btnTerceiro.addEventListener('click', () => {  
    var red = Math.floor(Math.random() * 255);
    var green = Math.floor(Math.random() * 255);
    var blue = Math.floor(Math.random() * 255);
    var corAleatoria = 'rgb(' + red + ','+ green +','+ blue + ')';

    console.log(corAleatoria);

    document.body.style.backgroundColor = corAleatoria;
});







/*************************************************************************
    AULA: Introdução ao Javascript

    1. Variáveis var, let, const, string, number e boolean;
    2. Operadores de atribuição, aritméticos, relacionais, lógicos e unários;
    3. Estruturas de decisão if/else, ternárias e switch;
    4. Estruturas de repetição while, do/while, for, for/in e for/of;
    5. Arrays e funções.

 *************************************************************************/

// 1. Variáveis var, let, const, string, number, boolean,
// 2. Operadores de atribuição, aritméticos, relacionais, lógicos e unários;
// 3. Estruturas de decisão if/else, ternárias e switch;
// 4. Estruturas de repetição while, do/while, for, for/in e for/of;
// 5. Arrays e funções.
