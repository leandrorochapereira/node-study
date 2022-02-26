/* Operadores e funções
Operador de atribuição: (=) 
Este operador é o mais comum no dia-a-dia da 
programação, ele serve para atribuir valor a 
uma variável/constante
Ex:
const valido = false;
let idade = 18;
const mensagem = "Favor informar dados válidos";
------------------------------------------------------------------------
Operador de comparação: (== ou ===)
Assim como a atribuição esse operador utiliza o =, porém nesse caso
podem ser dois ou três ==, === fazendo uma comparação e não uma atribuição
Ex:
if (1=="1") {
    console.log("São equivalentes"); 
    == usamos para uma comparação simples, um lado ao outro, 
    neste caso, o 1 typo number tem o mesmo VALOR do 1 string
}
if (1===1) {
    console.log("São idênticos");
    === usamos para comparar os TIPOS E O VALOR, estamos comparando
    1 numero com 1 numero, então são idênticos
}
Existe também um operador para verificar se os dados comparados são
diferentes, este operador pode ser o != ou !==
Ex:
if (1 != 2){
    console.log("1 é diferente de 2");
}
if (1 !== "1"){
    console.log("1 numérico é diferente de '1' como string");
}
Demais operadores de comparação
> Compara se o valor da esquerda é maior que o da direita retornando true/false
>= Compara se o valor da esquerda é maior ou igual ao da direita retornando true/false
< Compara se o valor da esquerda é menor que o da esquerda retornando true/false
<= Compara se o valor da esquerda é menor ou igual ao da esquerda retornando true/false
+ efetua adição entre dois valores
- efetua subtração entre dois valores
* efetua uma multiplicação entre dois valores
/ efetua uma divisão
% efetua um módulo entre dois valores
++ operador de incremento de 1 no valor passado
-- efetua uma subtração de 1 no valor passado
------------------------------------------------------------------------
Métodos & Funções
Assim como já falamos de variáveis e constantes, também já falamos dos nossos métodos e funções.
Basicamente são comportamentos que nossa classe deseja realizar separadamente
    Um nome que auxilia a identificar a função e chama-la
    A palavra reservada FUNCTION ou a sintaxe double arrow function
    Uma lista de variáveis e parâmetros de entrada que a função precisa para funcionar
    Um escopo onde será executada as instruções respectivas dessa função

A função inicia com a palavra reservada function, depois vem o nome e entre parênteses a 
lista de parâmetros de entrada para executar essa operação
Ex:
function validar(valido){
    if(valido == true) {
        return true;
    } else {
        return false;
    }
}
const teste = false;
console.log(validar(teste));
.........................................................................
A sintaxe double arrow, inicia com a declaração de uma variável, depois vem entre parênteses
a lista de parâmetros de entrada para executar essa operação e o operador =>
Ex:
const validar = (valido) => {
    if (valido == true){
        return false;
    } else {
        return false;
    }
}
const teste = false;
console.log(validar(teste));
.........................................................................
*/
/*1º exercício, criar um programa que recebe 2 números e um operador
matemático e com isso executa o cálculo corretamente */

const readLine = require('readline').createInterface ({
    input: process.stdin,
    output: process.stdout
})

const validarNumeroInformado = (numero) => {
    const resultado = Number.parseFloat(numero);
    if (!resultado) {
        console.log(`Número informado não é válido.`);
    }
    return resultado;
    
}

const validarOperador = (operador) => {
    switch (operador) {
        case '+':
        case '-':
        case '/':
        case '*':
        case '%':
            return operador;    
        default:
            console.log('operador informado é invalido');
            return null;
    }
}

readLine.question('Favor informar um número: ', (numero1) =>{
    const numeroValidado1 = validarNumeroInformado(numero1);

    if(numeroValidado1) {
        readLine.question('Favor informar outro número: ', (numero2) =>{
            const numeroValidado2 = validarNumeroInformado(numero2);

            if (numeroValidado2) {
                readLine.question('Favor informar o operador: ', (operador) =>{
                    const operadorValidado = validarOperador(operador);
                    if (operadorValidado) {
                        switch (operadorValidado) {
                            case '+': console.log(`Operador selecionado adição, resultado ${numeroValidado1} + ${numeroValidado2} = ${numeroValidado1 + numeroValidado2}`);
                                break;
                            case '-': console.log(`Operador selecionado subtração, resultado ${numeroValidado1} - ${numeroValidado2} = ${numeroValidado1 - numeroValidado2}`);
                                break;
                            case '*': console.log(`Operador selecionado multiplicação, resultado ${numeroValidado1} * ${numeroValidado2} = ${numeroValidado1 * numeroValidado2}`);
                                break;
                            case '/': console.log(`Operador selecionado divisão, resultado ${numeroValidado1} / ${numeroValidado2} = ${numeroValidado1 / numeroValidado2}`);
                                break;
                            case '%': console.log(`Operador selecionado modulo, resultado ${numeroValidado1} % ${numeroValidado2} = ${numeroValidado1 % numeroValidado2}`);
                                break;
                            default: break;
                        }
                    }
                })
            }
        })
    }
})