/*
Tratamento de exceção
Um dos principais pontos de desenvolvimento e que fazemos desde o nosso
primeiro programa, é evitar que nosso usuário tenha mensagens e
retornos muito técnicos que ele não faz a menor ideia do que esta sendo
dito, além disso nosso programas são vivos e dinâmicos, o que acaba tornando muito
difícil mapear todos os possíveis erros que nosso programa poderá ocorrer.
Quando começarmos a desenvolver um sistema mesmo será muito trabalhoso prever todas as 
nuances que o sistema poderá se comportar e seria inevitável que algum comportamento
desse um erro muito técnico para nosso usuário ex "Cannot connect to a database"
Para esses casos temos uma abordagem muito elegante e pratica que são os tratamentos
de exceção
----- try // catch // finally -----

//try/catch
essa abordagem abre um escopo onde, tudo que for executado dentro daquele escopo
caso gere um erro, o escopo catch será iniciado e o escopo do try para de executar
Ex:
let usuarios;
try {
    usuarios = buscarTodosUsuarios();
} catch (e) {
    console.log("Ocorreu um erro ao buscar os usuários");
}

//finally
este utilizamos pouco, mas ele serve para que alguma instrução ocorra tanto quando o try
não der exceção quanto quando cai no catch
Ex:
let notificacao ="";
try {
    processarPagamentosPendentes();
    notificacao = "Pagamentos processados com sucesso!";
} catch (e) {
    notificacao = "Erro ao processar pagamentos";
} finally {
    notificarAdministradorSistema(notificacao);
}

//Arrays
como já vimos, listas/arrays/coleções são variáveis que ao invés de guardar um
ÚNICO dado, guardam UMA SÉRIE DE DADOS do mesmo tipo
São muito úteis, pois guardam todas as linhas de uma tabela, ou uma lista de nomes 
credenciados, ou uma lista de dígitos válidos para validar uma informação.

const notas =[9, 8, 7, 93 7, 8];
const funcionarios = ["Emerson", "Zacarias", "Morgana"];

métodos de seleção
.filter() -> executa linha a linha uma checagem, se as condições passadas são atendidas, 
retorna uma lista somente dos itens que o resultado de toda condição for true;

.map() -> faz a transformação da linha para o formato que você desejar;

.find() -> encontra o primeiro registro da lista que atende as condições fornecidas
e retorna o mesmo;

.sort() -> ordena a lista de acordo com a condição/atributo passado;

.push() -> adiciona um ou mais itens na lista;

//funções anônimas (callbacks)
uma função anônima é uma instrução ou expressão "embutida" que pode ser usada em qualquer
outro método que um dos seus parâmetros de entrada seja um CALLBACK
são muito úteis quando vamos trabalhar com listas ou processamento assíncrono, pois
você passa o comportamento para aquele método e no momento exato que aquele método precisar
do comportamento ele o executará, tornando nosso código mais legível e menos acoplado
ex:

const notas =[90, 71, 87, 93, 75, 82];

const qtdNotasAcima80 = notas.filter(n => n > 80).length;
console.log(qtdNotasAcima80, "notas acima de 80");

Escrever um programa que recebe alguns produtos como argumento, validar se esses produtos
estão na lista de itens disponíveis do mercado, caso esteja, avisar o usuário quais 
produtos tem e quais não tem e por último exibir a lista de produtos disponíveis ordenados
por ordem alfabética do mercado para que o usuário possa pedir na próxima vez.
*/
