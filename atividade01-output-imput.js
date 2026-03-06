// ============================================================
//   ATIVIDADE 03 – Input e Output em JavaScript
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
// EXERCÍCIO 1 – Explorando os métodos do console
// ------------------------------------------------------------
// a) Use console.log() para exibir a mensagem: "Iniciando o programa..."
// b) Use console.info() para exibir uma mensagem informando sobre o que é a atividade atual.
// c) Use console.warn() para exibir um aviso de que o usuário sempre precisa iniciar o programa com node e o nome do arquivo.
// d) Use console.error() para exibir uma mensagem de erro aleatória de sua escolha.

// → Seu código aqui:


console.log("Iniciando o programa...");
console.info("Atividade sobre node.js e imput-output");
console.warn("Aviso: Sempre inicie o programa usando 'node nomeDoArquivo.js'.");
console.error("Error: Arquivo nao encontrado");

//.log: saída padrão para mensagens;
//.info: para informacoes;
//.warn: para avisos;
//.error: para mensagens de erro;



// ------------------------------------------------------------
// EXERCÍCIO 2 – Saudação personalizada
// ------------------------------------------------------------
// a) Peça ao usuário que digite seu nome usando question().
// b) Peça ao usuário que digite sua idade usando questionInt().
// c) Exiba no console uma saudação usando template literal, no formato:
//    "Olá, <nome>! Você tem <idade> anos."


const readline = require("readline-sync");
let nome = readline.question("Digite seu nome: ");
let idade = readline.questionInt("Digite sua idade: ");
console.log(`Olá, ${nome}! Você tem ${idade} anos.`);

//readline.question: para strings;
//readline.questionInt: para numeros (le o numero inteiro) obs:se o usuario digitar string,
//retorna para usuario digitar novamente;



// ------------------------------------------------------------
// EXERCÍCIO 3 – Ficha pessoal
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados: nome, idade e cidade.
// b) Crie um objeto chamado "ficha" com as propriedades: nome, idade e cidade.
// c) Exiba o objeto com console.table().

// → Seu código aqui:

let nomeDoUsuario = readline.question("Qual o seu nome: ");
let idadeDoUsuario = readline.questionInt("Qual sua idade?: ");
let cidadeDoUsuario = readline.question("Qual a sua cidade?: ");
let ficha = {
        nome: nomeDoUsuario,
        idade: idadeDoUsuario,
        cidade: cidadeDoUsuario
}
console.table(ficha);



// ------------------------------------------------------------
// EXERCÍCIO 4 – Perguntas de sim ou não
// ------------------------------------------------------------
// a) Faça duas perguntas de sim/não ao usuário usando keyInYN().
// b) Armazene as respostas em variáveis.
// c) Exiba as respostas no console usando template literal.

// → Seu código aqui:

let gostaDeEstudar = readline.keyInYN("Gosta de estudar?: ");
let gostaDeTrabalhar = readline.keyInYN("Gosta de trabalhar: ");
console.log(`Gosta de estudar: ${gostaDeEstudar}`);
console.log(`Gosta de trabalhar: ${gostaDeTrabalhar}`);

//KeyIn: string
//KeyInYN: Retorna sim ou nao (true ou false)


// ------------------------------------------------------------
// EXERCÍCIO 5 – Lista de favoritos
// ------------------------------------------------------------
// a) Peça ao usuário que informe 3 comidas favoritas, uma por vez.
// b) Armazene as 3 respostas em uma array chamada "comidasFavoritas".
// c) Exiba a array com console.table().

// → Seu código aqui:

let comida1 = readline.question("Qual sua primeira comida preferida? ");
let comida2 = readline.question("Qual sua segunda comida preferida? ");
let comida3 = readline.question("Qual sua terceira comida preferida? ");
let comidasFavoritas = [comida1, comida2, comida3];
console.table(comidasFavoritas);

//console.table: mostra os dados em forma de tabela;


// ------------------------------------------------------------
// EXERCÍCIO 6 – Apresentação completa
// ------------------------------------------------------------
// a) Peça ao usuário: nome, profissão e cidade.
// b) Armazene estes dados em um objeto 'cadastroPessoal'
// c) Exiba no console uma frase completa com os dados, usando template literal:
//    "Me chamo <nome>. Profissão: <profissão> e moro na cidade de: <cidade>."
// d) Exiba a mesma informação com console.table().

// → Seu código aqui:

let nome1 = readline.question("Qual o seu nome: ");
let profissao1 = readline.question("Qual a sua profissao?: ");
let cidade1 = readline.question("Qual a sua cidade?: ")
let cadastroPessoal = {
    nome1,
    profissao1,
    cidade1
};
console.log(`Me chamo ${nome1}. Profissao: ${profissao1} e moro na cidade de ${cidade1}.`);
console.table(cadastroPessoal);



// ------------------------------------------------------------
// EXERCÍCIO 7 – Lista de objetos
// ------------------------------------------------------------
// a) Através do terminal, capture o dado de 3 usuários fictícios, cada um com as seguintes propriedades:
//    nome(string), idade(number) e endereço(objeto).
//    objeto endereço deve conter as propriedades: cidade(string), rua(string) e numero(number)
// b) Armazene cada usuário em um objeto.
// c) Armazee os objetos em um array 'listaDeUsuarios'
// d) Exiba o array com console.table().
// e) Exiba somente o nome e a idade do 2º usuário.
// f) Exiba somente o endereço completo do 3º usuário.
// g) Exiba somente o nome e a rua do 1º usuário.

// → Seu código aqui:


let usuario1 = {
    nome: readline.question("Nome do usuario 1: "),
    idade: readline.questionInt("Idade do usuario 1: "),
    endereco: {
        cidade: readline.question("Cidade: "),
        rua: readline.question("Rua: "),
        numero: readline.questionInt("Numero: ")
    }
};
let usuario2 = {
    nome: readline.question("Nome do usuario 2: "),
    idade: readline.questionInt("Idade do usuario 2: "),
    endereco: {
        cidade: readline.question("Cidade: "),
        rua: readline.question("Rua: "),
        numero: readline.questionInt("Numero: ")
    }
};
let usuario3 = {
    nome: readline.question("Nome do usuario 3: "),
    idade: readline.questionInt("Idade do usuario 3: "),
    endereco: {
        cidade: readline.question("Cidade: "),
        rua: readline.question("Rua: "),
        numero: readline.questionInt("Numero: ")
    }
};

let listaDeUsuarios = [usuario1, usuario2, usuario3];
console.table(listaDeUsuarios);
console.log(`Nome: ${listaDeUsuarios[1].nome}, Idade: ${listaDeUsuarios[1].idade}`);
console.log(listaDeUsuarios[2].endereco);
console.log(`Nome: ${listaDeUsuarios[0].nome}, Rua: ${listaDeUsuarios[0].endereco.rua}`);


