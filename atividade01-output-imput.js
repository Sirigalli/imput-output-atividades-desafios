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
// let nome = readline.question("Digite seu nome: ");
// let idade = readline.questionInt("Digite sua idade: ");
// console.log(`Olá, ${nome}! Você tem ${idade} anos.`);

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

// let nomeDoUsuario = readline.question("Qual o seu nome: ");
// let idadeDoUsuario = readline.questionInt("Qual sua idade?: ");
// let cidadeDoUsuario = readline.question("Qual a sua cidade?: ");
// let ficha = {
//         nome: nomeDoUsuario,
//         idade: idadeDoUsuario,
//         cidade: cidadeDoUsuario
// }
// console.table(ficha);



// ------------------------------------------------------------
// EXERCÍCIO 4 – Perguntas de sim ou não
// ------------------------------------------------------------
// a) Faça duas perguntas de sim/não ao usuário usando keyInYN().
// b) Armazene as respostas em variáveis.
// c) Exiba as respostas no console usando template literal.

// → Seu código aqui:

// let gostaDeEstudar = readline.keyInYN("Gosta de estudar?: ");
// let gostaDeTrabalhar = readline.keyInYN("Gosta de trabalhar: ");
// console.log(`Gosta de estudar: ${gostaDeEstudar}`);
// console.log(`Gosta de trabalhar: ${gostaDeTrabalhar}`);

//KeyIn: string
//KeyInYN: Retorna sim ou nao (true ou false)


// ------------------------------------------------------------
// EXERCÍCIO 5 – Lista de favoritos
// ------------------------------------------------------------
// a) Peça ao usuário que informe 3 comidas favoritas, uma por vez.
// b) Armazene as 3 respostas em uma array chamada "comidasFavoritas".
// c) Exiba a array com console.table().

// → Seu código aqui:

// let comida1 = readline.question("Qual sua primeira comida preferida? ");
// let comida2 = readline.question("Qual sua segunda comida preferida? ");
// let comida3 = readline.question("Qual sua terceira comida preferida? ");
// let comidasFavoritas = [comida1, comida2, comida3];
// console.table(comidasFavoritas);

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

// let nome1 = readline.question("Qual o seu nome: ");
// let profissao1 = readline.question("Qual a sua profissao?: ");
// let cidade1 = readline.question("Qual a sua cidade?: ")
// let cadastroPessoal = {
//     nome1,
//     profissao1,
//     cidade1
// };
// console.log(`Me chamo ${nome1}. Profissao: ${profissao1} e moro na cidade de ${cidade1}.`);
// console.table(cadastroPessoal);



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


// let usuario1 = {
//     nome: readline.question("Nome do usuario 1: "),
//     idade: readline.questionInt("Idade do usuario 1: "),
//     endereco: {
//         cidade: readline.question("Cidade: "),
//         rua: readline.question("Rua: "),
//         numero: readline.questionInt("Numero: ")
//     }
// };
// let usuario2 = {
//     nome: readline.question("Nome do usuario 2: "),
//     idade: readline.questionInt("Idade do usuario 2: "),
//     endereco: {
//         cidade: readline.question("Cidade: "),
//         rua: readline.question("Rua: "),
//         numero: readline.questionInt("Numero: ")
//     }
// };
// let usuario3 = {
//     nome: readline.question("Nome do usuario 3: "),
//     idade: readline.questionInt("Idade do usuario 3: "),
//     endereco: {
//         cidade: readline.question("Cidade: "),
//         rua: readline.question("Rua: "),
//         numero: readline.questionInt("Numero: ")
//     }
// };

// let listaDeUsuarios = [usuario1, usuario2, usuario3];
// console.table(listaDeUsuarios);
// console.log(`Nome: ${listaDeUsuarios[1].nome}, Idade: ${listaDeUsuarios[1].idade}`);
// console.log(listaDeUsuarios[2].endereco);
// console.log(`Nome: ${listaDeUsuarios[0].nome}, Rua: ${listaDeUsuarios[0].endereco.rua}`);


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


// let paciente1 = {
//     nome: readline.question("Nome do paciente 1: "),
//     idade: readline.questionInt("Idade do paciente 1: "),
//     endereco: {
//         cidade: readline.question("Cidade: "),
//         rua: readline.question("Rua: "),
//         numero: readline.questionInt("Numero: ")
//     }
// };
// let paciente2 = {
//     nome: readline.question("Nome do paciente 2: "),
//     idade: readline.questionInt("Idade do paciente 2: "),
//     endereco: {
//         cidade: readline.question("Cidade: "),
//         rua: readline.question("Rua: "),
//         numero: readline.questionInt("Numero: ")
//     }
// };
// let paciente3 = {
//     nome: readline.question("Nome do paciente 3: "),
//     idade: readline.questionInt("Idade do paciente 3: "),
//     endereco: {
//         cidade: readline.question("Cidade: "),
//         rua: readline.question("Rua: "),
//         numero: readline.questionInt("Numero: ")
//     }
// };
// let listaDePacientes = [paciente1, paciente2, paciente3];
// console.table(listaDePacientes);
// console.log(`Nome: ${listaDePacientes[1].nome}, Idade: ${listaDePacientes[1].idade}`);
// console.log(listaDePacientes[2].endereco);
// console.log(`Nome: ${listaDePacientes[0].nome}, Rua: ${listaDePacientes[0].endereco.rua}`);





// ------------------------------------------------------------
// EXERCÍCIO 8 – Ranking de notas
// ------------------------------------------------------------
// a) Peça ao usuário o nome de 3 alunos e suas três notas, um por vez.
// b) Armazene cada aluno como um objeto com as propriedades 'nome' e 'notas'.
// c) Guarde os 3 objetos em um array chamado 'turma'.
// d) Exiba o array 'turma' com console.table().
// e) Exiba o nome e a 1ª nota do 2º aluno.
// f) Exiba o nome e a 2ª nota do 3º aluno.
// g) Exiba o nome e a 3ª nota do 1º aluno.

// → Seu código aqui:


// let aluno1 = {
//     nome: readline.question("Qual o nome do primeiro aluno: "),
//     notas: [
//         readline.questionInt("Digita a primeira nota: "),
//         readline.questionInt("Digite a segunda nota: "),
//         readline.questionInt("Digite a terceira nota: ")
//     ] };
// let aluno2 = {
//     nome: readline.question("Qual o nome do segundo aluno: "),
//     notas: [
//         readline.questionInt("Digita a primeira nota: "),
//         readline.questionInt("Digite a segunda nota: "),
//         readline.questionInt("Digite a terceira nota: "),
//     ] };
// let aluno3 = {
//     nome: readline.question("Qual o nome do terceiro aluno: "),
//     notas: [
//         readline.questionInt("Digita a primeira nota: "),
//         readline.questionInt("Digite a segunda nota: "),
//         readline.questionInt("Digite a terceira nota: ")
//      ] };

// let turma = [aluno1, aluno2, aluno3]
// console.table(turma)
// console.log(`nome: ${turma[1].nome}, nota: ${turma[1].notas[0]}.`);
// console.log(`nome: ${turma[2].nome}, nota: ${turma[2].notas[1]}.`);
// console.log(`nome: ${turma[0].nome}, nota: ${turma[0].notas[2]}.`);





// ------------------------------------------------------------
// EXERCÍCIO 9 – Cadastro de produto
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de um produto:
//    - nome (string)
//    - categoria (string)
//    - preço (float)
//    - quantidade em estoque (inteiro)
//    - está disponível para venda? (sim/não, usando keyInYN())
// b) Crie um objeto 'produto' com todas essas propriedades.
//    A propriedade de disponibilidade deve se chamar 'disponivel' e ser boolean (true/false).
// c) Exiba o objeto completo com console.table().
// d) Exiba no console uma frase resumo usando template literal:
//    "Produto: <nome> | Categoria: <categoria> | Estoque: <quantidade> un".

// → Seu código aqui:

// let produto1 = {
//     nome: readline.question("Digite o nome do produto: "),
//     categoria: readline.question("Digite a categoria do produto: "),
//     preço: readline.questionFloat("Digite o preço do produto: "),
//     quantidadeEmEstoque: readline.questionInt("Digite a quantidade no estoque: "),
//     Disponivel: readline.keyInYN("Esta disponivel para a venda?: ")
// };
// console.table(produto1);
// console.log(`Produto: ${produto1.nome} | Categoria: ${produto1.categoria} | Estoque: ${produto1.quantidadeEmEstoque}.`);



// ------------------------------------------------------------
// EXERCÍCIO 10 – Farmacia
// ------------------------------------------------------------
// a) Peça ao usuário os seguintes dados de dois medicamento com as seguintes propriedades:
//    - nome (string)
//    - preco (float)
//    - emEstoque (boolean) - (sim/não, usando keyInYN())
// b) Crie uma lista "estoqueFarmacia" e insira os objetos criados com push().
// c) Exiba a lista com console.table().
// d) Exiba somente o nome e preço do 2 medicamento.
// e) Exiba somente o nome e se está em estoque o 1 medicamento.

let estoqueFarmacia = [];
let medicamento1 = {
    nome: readline.question("Digite o nome do medicamento: "),
    preco: readline.questionFloat("Digite o preço do medicamento: "),
    emEstoque: readline.keyInYN("Disponivel no estoque: ")
}
let medicamento2 = {
    nome: readline.question("Digite o nome do medicamento: "),
    preco: readline.questionFloat("Digite o preço do medicamento: "),
    emEstoque: readline.keyInYN("Disponivel no estoque: ")
}
estoqueFarmacia.push(medicamento1);
estoqueFarmacia.push(medicamento2);
console.table(estoqueFarmacia);
console.log(`Nome: ${estoqueFarmacia[1].nome}, preco: ${estoqueFarmacia[1].preco}.`);
console.log(`Nome: ${estoqueFarmacia[0].nome}, em estoque: ${estoqueFarmacia[0].emEstoque}.`);








// ctrl + k + c : transforma o texto em comentario
//ctrl + k + u : transfroma o texto em codigo ativo