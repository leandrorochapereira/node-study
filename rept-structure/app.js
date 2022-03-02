const listaArgumento = process.argv.slice(2);

console.log('---------------------- Executando um for ----------------------');
for (let controladorFor = 0; controladorFor < listaArgumento.length; controladorFor++) {
    console.log(`Posicao ${controladorFor} valor lido = ${listaArgumento[controladorFor]}`);
}

console.log('---------------------- Executando um WHILE ----------------------');

let controladorWhile = 0;
while (controladorWhile < listaArgumento.length) {
    console.log(`Posicao ${controladorWhile} valor lido = ${listaArgumento[controladorWhile]}`);
    controladorWhile++;
}

