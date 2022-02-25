/*Operadores lógicos
O primeiro operador que utilizamos muito é operador unário ! 
O operador unário serve para inverter o valor de um booleana a fim de facilitar
a verificação
Ex:
const valido = false;
console.log(!valido); resultado true
console.log(!true); resultado false
console.log(!!valido); resultado true
---------------------------------------------------------------------------------
O próximo operador que utilizamos muito é o operador &&(AND).
O resultado de x && y será true se ambos x e y forem avaliados como true.
Caso contrário, o resultado será false. Se x for avaliado como false, y não será avaliado.

Ele checka a primeira condição e se ela for false, nem avalia a segunda
só será true se ambas forem true
Ex:
function segundoOperador(){
    console.log("avaliando segundo operador = ");
    return true;
}

const a = false && segundoOperador();
console.log(a); resultado False
const b = true && segundoOperador();
console.log(b); resultado: avaliando segundo operador = True
---------------------------------------------------------------------------------
O próximo operador que utilizamos muito é o operador || (OR). O resultado de
x && y será true se um dos dois x ou y  forem avaliados como true. 
Se x for avaliado como true, y não será avaliado.
Ex:
function segundoOperador(){
    console.log("avaliando segundo operador = ");
    return true;
}

const a = false || segundoOperador();
console.log(a); resultado True
const b = true || segundoOperador();
console.log(b); resultado: avaliando segundo operador = True
const c = !b || !a;
console.log(c); resultado: avaliando a negação de a e b. False
---------------------------------------------------------------------------------
Nosso próximo termo do JS vamos conhecer as Estruturas de seleção.
Estes são responsáveis por separarem no código algumas seleções de instruções que só
serão executadas quando a condição que os envolver for alcançada
     - IF verificador de condição
     - SWITCH verificador de casos

IF - verifica se a condição INTEIRA passada entre parênteses é verdadeira
se sim, executa o trecho, se não verifica se foi definido uma clausula else
e a executa
Ex:
const valido = false;
if (valido) {
    console.log(valido); resultado true
} else {
    console.log(valido); resultado false
}
---------------------------------------------------------------------------------
ELSEIF - executado se o if falha, verifica se a condição inteira passada
entre parênteses é verdadeira. se sim, executa o trecho
Ex:
const valido = true;
const invalido = false;

if (valido) {
    console.log("Valido");
} else if (invalido) {
    console.log("Invalido");
}
---------------------------------------------------------------------------------
SWITCH - verifica se algum dos casos informados é verdadeiro, caso seja
executa o trecho de código isolado, caso nenhum caso seja atendido
executa o trecho default
Ex:
const nome = "Douglas";
switch (nome) {
    case "João":
        console.log("João encontrado");
        break;
    case "Douglas":
        console.log("Douglas encontrado");
        break;
    default:
        console.log("Nenhum encontrado");
}
---------------------------------------------------------------------------------
*/

