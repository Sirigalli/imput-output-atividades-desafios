// ============================================================
//   DESAFIOS (para quem já terminou a atividade 03) – Input e Output em JavaScript
// ============================================================
// Instruções: resolva cada exercício no espaço indicado.
// Lembre-se de instalar o pacote antes de executar:
//     npm install readline-sync
// Lembre-se de criar uma variável para utilizar o readline-sync
//     let lerTeclado = require('readline-sync');
// Para executar:
//     node <nomeDoArquivo>.js
// ============================================================


// ------------------------------------------------------------
// DESAFIO 1 – Cadastro completo
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados:
//    nome, idade, profissão, cidade, se gosta de JavaScript, lista de comida favoritos e lista de pessoa(s) com que mora (nome e idade).
//    pense em qual tipo de dado cada resposta representa para armazena-los corretamente.
// b) Crie um objeto "cadastro" com todas essas propriedades.
// c) Exiba o objeto com console.table().
// d) Exiba também uma mensagem usando template literal com todos os dados, ex:
//    "Nome: <nome>. Idade: <idade> anos. Profissão: <profissão> em <cidade>. Gosta de JS: <sim/não> ...."

// → Seu código aqui:

let readline = require('readline-sync');


// let usuario = {
//     nome: readline.question("Nome do usuario: "),
//     idade: readline.questionInt("Idade do usuario: "),
//     profissao: readline.question("Profissao do usuario: "),
//     cidade: readline.question("Cidade do usuario: "),
//     GostaDeJavaScript: readline.keyInYN("Gosta de javaScript?: "),
//     };

// const pessoa1 = {
//     nome: readline.question("Nome da primeira pessoa que você mora: "),
//     idade: readline.questionInt("Idade da primeira pessoa: ")
// };

// const pessoa2 = {
//     nome: readline.question("Nome da segunda pessoa que você mora: "),
//     idade: readline.questionInt("Idade da segunda pessoa: ")
// };

// const pessoasQueMora = [pessoa1, pessoa2];

// let comida1 = readline.question("Qual a primeira comida favorita?: ");
// let comida2 = readline.question("Qual a segunda comida favorita?: ");
// let comida3 = readline.question("Qual a terceira comida favorita?: ");
// const comidasFavoritas1 = [comida1, comida2, comida3];

// const cadastro = {
//     nome: usuario.nome,
//     idade: usuario.idade,
//     profissao: usuario.profissao,
//     cidade: usuario.cidade,
//     gostaJS: usuario.GostaDeJavaScript,
//     comidasFavoritas: comidasFavoritas1,
//     pessoasQueMora: pessoasQueMora
// };
// console.table(cadastro);

// console.log(`
// Nome: ${cadastro.nome}.
// Idade: ${cadastro.idade} anos.
// Profissão: ${cadastro.profissao} em ${cadastro.cidade}.
// Gosta de JavaScript: ${cadastro.gostaJS ? "Sim" : "Não"}.
// Comidas favoritas: ${cadastro.comidasFavoritas.join(", ")}.
// Pessoas com quem mora: ${cadastro.pessoasQueMora[0].nome} (${cadastro.pessoasQueMora[0].idade} anos), ${cadastro.pessoasQueMora[1].nome} (${cadastro.pessoasQueMora[1].idade} anos).
// `);



// ------------------------------------------------------------
// DESAFIO 2 – Dois amigos
// ------------------------------------------------------------
// a) Peça os dados de 2 pessoas diferentes (nome, idade e enderecoCompleto de cada uma).
//    enderecoCompleto deve ser um objeto contendo rua, cidade e estado
// b) Crie um objeto para cada pessoa com essas propriedades.
// c) Crie uma array chamada "amigos" contendo os dois objetos.
// d) Exiba a array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 2º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:

const amigo1 = {
    nome: readline.question("Nome do primeiro amigo: "),
    idade: readline.questionInt("Idade do primeiro amigo: "),
    enderecoCompleto: {
        cidade: readline.question("Digite a cidade do primeiro amigo: "),
        bairro: readline.question("Digite o bairro do primeiro amigo: "),
        rua: readline.question("Digite a rua do primeiro amigo: "),
        numero: readline.questionInt("Digite o numero da casa do primeiro amigo: ")
    }
};
const amigo2 = {
    nome: readline.question("Nome do segundo amigo: "),
    idade: readline.questionInt("Idade do segundo amigo: "),
    enderecoCompleto: {
        cidade: readline.question("Digite a cidade do segundo amigo: "),
        bairro: readline.question("Digite o bairro do segundo amigo: "),
        rua: readline.question("Digite a rua do segundo amigo: "),
        numero: readline.questionInt("Digite o numero da casa do segundo amigo: ")
    }
};   
const amigos = [amigo1, amigo2];
console.table(amigos);
console.log(`Nome: ${amigos[1].nome}, Idade: ${amigos[1].idade}`);
console.log(`Endereco do segundo usuario: ${amigos[1].enderecoCompleto}.`);
console.log(`${amigos[0].nome}, ${amigos[0].enderecoCompleto.rua}`)




// ------------------------------------------------------------
// DESAFIO 3 – Pedido de restaurante
// ------------------------------------------------------------
// a) Informe ao usuário (com console.info) que ele vai montar um pedido.
// b) Exiba um menu (quanto mais estilizado melhor!) com as opções de entrada, prato principal, sobremesa e bebidas.
// b) Peça ao usuário que escolha:
//    - Uma entrada
//    - Um prato principal
//    - Uma sobremesa
//    - Duas bebidas (uma de cada vez)
// c) Crie um objeto "pedido" com as propriedades: entrada, pratoPrincipal, sobremesa e listaBebidas.
// d) Exiba o pedido com console.table().
// e) Exiba também no console a mensagem:
//    "Seu pedido: Entrada: <entrada>, Prato Principal: <pratoPrincipal>, Sobremesa: <sobremesa>, Bebida 1: <bebida1>, Bebida 2: <bebida2>. Bom apetite!"

// → Seu código aqui:


// console.info("Faça seu pedido: ")
// let pedido = {
//     entrada: readline.question("Digite seu prato de entrada: "), 
//     pratoPrincipal: readline.question("Digite seu prato principal: "),
//     sobremesa: readline.question("Digite sua sobremesa: "),
//     bebida1: readline.question("Digite sua primeira bebida: "),
//     bebida2: readline.question("Digite sua segunda bebida: ")
// }
// console.table(pedido);
// console.log(`Seu pedido: ${pedido.entrada}, Prato Principal: ${pedido.pratoPrincipal}, Sobremesa: ${pedido.sobremesa}, Bebida 1: ${pedido.bebida1}, Bebida 2: ${pedido.bebida2}. Bom apetite!`);


// ------------------------------------------------------------
// DESAFIO 4 – Perfil de jogador
// ------------------------------------------------------------
// a) Peça ao usuário: apelido, jogo favorito e horas totais jogadas (aproximadas)
// b) Pergunte se ele joga em time (sim/não).
// c) Crie um objeto "perfil" com todas as propriedades:
//    apelido, jogoFavorito, horasTotaisJogadas, jogaEmTime.
// d) Exiba o perfil com console.table().
// e) Use console.warn() para exibir: "Lembre-se que jogar não é problema, o problema é colocar o jogo como prioridade."

// → Seu código aqui:

// let perfil = {
//     apelido: readline.question("Digite seu apelido: "),
//     jogoFavorito: readline.question("Digite seu jogo favorito: "),
//     horasTotaisJogadas: readline.questionInt("Digite o tempo de jogo: "),
//     jogaEmTime: readline.keyInYN("Joga em algum time? ")
// };
// console.table(perfil);
// console.warn("Lembre-se que jogar não é problema, o problema é colocar o jogo como prioridade.");


// ------------------------------------------------------------
// DESAFIO 5 – Comparador de dados
// ------------------------------------------------------------
// a) Peça o nome e a cidade favorita de 3 pessoas diferentes.
// b) Crie um objeto para cada pessoa com as propriedades: nome e cidadeFavorita.
// c) Exiba um dos objetos com console.table().
// d) Crie uma array "viajantes" com os 3 objetos.
// e) Exiba a array com console.table().
// f) Exiba com console.info() quantos viajantes estão na lista (use .length).
// g) Exiba com console.log() a cidade favorita do 2º viajante.
// h) Exiba com console.log() o nome do 1º viajante.

// → Seu código aqui:


// let pessoa1 = {
//     nome: readline.question("Digite o nome do primeiro viajante:  "),
//     cidadeFavorita: readline.question("Digite a cidade favorita do primeiro viajante: ")
// };
// let pessoa2 = {
//     nome: readline.question("Digite o nome do segundo viajante: "),
//     cidadeFavorita: readline.question("Digite a cidade favorita do segundo viajante: ")
// };
// let pessoa3 = {
//     nome: readline.question("Digite o nome do terceiro viajante: "),
//     cidadeFavorita: readline.question("Digite a cidade favorita do terceiro viajante: ")
// };
// console.table(pessoa1);
// let viajantes = [pessoa1, pessoa2, pessoa3];
// console.table(viajantes);
// console.info(`Um total de ${viajantes.length} estao na viagem`)
// console.log(`A cidade favotira do viajante 2 é: ${viajantes[1].cidadeFavorita}.`);
// console.log(`O nome do primeiro viajante é: ${viajantes[0].nome}.`);