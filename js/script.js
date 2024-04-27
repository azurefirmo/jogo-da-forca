// Iniciando as variáveis globais utilizadas no jogo
let listaPalavras = ["ALURA", "CSS", "DESAFIO", "FORCA", "JAVASCRIPT", "HTML"];
let canvas = document.querySelector("canvas");
let pincel = canvas.getContext("2d");
let alfabeto = "A B C D E F G H I J K L M N O P Q R S T U V W X Y Z";
let posicao;
let secreta;
let secretaAux;
let quantErros = 0;
let palavraTracadas;
let palavraBranco;
let listaErradas = [];
let listaCertas = [];
let isJogando = false;
