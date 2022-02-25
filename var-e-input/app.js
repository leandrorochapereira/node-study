//a 1a palavra chave que precisamos para criar uma variável é sempre CONST
//se precisarmos mudar o valor desta const podemos mudar pra LET
//e usamos VAR se for realmente necessário
//requisitando ao usuário digitar alguma coisa, o programa ler o que foi digitado
//e mostrar pro usuário o que foi digitado
const readLine = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
//requisitamos ao node o uso do módulo básico read line, que faz isso, lê um input e 
//responde com alguma coisa
//createInterface é o que faz ler isso do console
//e precisamos de um input e um output

const minhaPrimeiraConstanteString = 'Minha primeira constante';
console.log(minhaPrimeiraConstanteString);
//criamos a variável e atribuímos um valor a ela, e depois executamos a variável
let leituraDeCampo;
//criamos uma variável de escopo sem valor, 
//fazendo uma pergunta ao usuário usando o módulo que requisitamos anteriormente
//usamos o readline para fazer uma question 
readLine.question('Informe sua idade:', input => {
    //quando ele digitar a idade ele cai no input
    //o input manda ele ler dizendo que é o leituraDeCampo e o preenche
    leituraDeCampo = input;
    console.log(`O usuário informou: ${leituraDeCampo}`);
});
//com o leituraDeCampo preenchido, ele informa o que valor
//Quando ele digitar algo, é enviado a nós por meio de uma variável
//essa variável é a input e => que é uma arrow function/função anonima 
//que é uma função que vai rodar dentro do callback readLine
//um callback é uma função rodar logo após outra função