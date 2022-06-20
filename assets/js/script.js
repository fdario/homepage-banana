// Variáveis

// var -> variável global -> má prática

// let -> variável com escopo
// const -> constante, imutável

let numero = 0;
const nome = "Jeca";
const boleano = true;

// 'console.log' -> mostra, no console do navegador (DevTools), o que é passado;

// console.log(numero);
// console.log(nome);
// console.log(boleano);

/*
operadores básicos:
soma -> +
subtração -> -
multiplicação -> *
divisão -> /

operadores lógicos:
== -> comparação
=== -> comparação com tipo de dado
< e <= -> compara se um numero é menor e menor ou igual a outro
> e >= -> compara se um numero é maior e maior ou igual a outro
!= e !== -> diferente
! -> negação

funções -> bloco de código encapsulado (dentro do código) que cumpre uma série de instruções
*/

// declaração da função
function soma(num1, num2) {
    let total = num1 + num2;
    // console.log(total);
}

//chamada da função
soma(1,99);

/**
 * DOM -> Document Object Model
 * O JavaScript pode manipular os elemntos do documento HTML
*/

const cabecalho = document.querySelector('header');

/**
 * eventos -> ações que ocorrem no site
 * 
 * addEventListener -> Adiciona um "escutador" de evento
 * 
 * elemento.addEventListener('evento', função)
 *  
 */

// const tweetar = document.querySelector('button');
// function imprimir() {
//     console.log("Click");
// }
// tweetar.addEventListener('click', imprimir);

/**
 * plano
 * 
 * 1 - capturar o valor da textarea;
 * 2 - construir a bostejada
 * 3 - imprimir a bostejada
 * 
 */

// passo 1
const conteudo = document.querySelector('textarea');
const bostejar = document.querySelector('button');
const feed = document.querySelector(".conteudoPrincipal__listaBostejadas")

/**
 * o parâmetro 'event' (vem do eventListener) vem com alguns comportamentos padrões que servem pra auxiliar na manipulação
 * 
 * o event.preventDefault(), nesse caso, faz com quie o formulario do HTML (form) não fique recarregando a página sempre que o button for utilizado
 */
    

function imprimir(event) {
    event.preventDefault();
    const valorBostejada = conteudo.value;
    criarBostejada(valorBostejada);
}
bostejar.addEventListener('click', imprimir);

function criarBostejada (valorBostejada){
    let data = new Date()
    let hora = data.getHours();
    let minutos = data.getMinutes();

    const bostejo = {
        nome: "Macaquil",
        foto: "assets/img/perfil.svg",
        usuario: "@macacoMankey",
        texto: valorBostejada,
        tempo: `${hora}:${minutos}`
    }
    listarBostejos(bostejo);
}
function listarBostejos (bostejo) {

    const {nome, foto, usuario, texto, tempo} = bostejo


    let li   =  document.createElement("li");
    li.classList.add("conteudoPrincipal__bostejada")
    let img  =  document.createElement("img");
    img.src = foto;
    img.classList.add("bostejada__fotoPerfil")
    let div  =  document.createElement("div");
    div.classList.add("bostejada__conteudo")
    let h2   =  document.createElement("h2");
    h2.innerText = nome;
    let span =  document.createElement("span");
    let p   =  document.createElement("p");
    span.innerText = `  ${usuario} - ${tempo}`
    p.innerText = texto

    div.appendChild(h2);
    div.appendChild(span);
    div.appendChild(p);
    li.appendChild(img);
    li.appendChild(div);
    feed.classList.add("conteudoPrincipal__listaBostejadas")
    feed.appendChild(li);
    conteudo.value = "";
}
