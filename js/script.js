let pontos = document.getElementById('pontos').innerHTML = localStorage.pontuacao;
let pontuacao = 0;
function carregou() {//ao carregar a pagina
    let rodape = document.getElementById('rodape');
    setTimeout(rodape.setAttribute("style", "bottom: 0%;"), 1000);
    ;
    let nome;
    if (typeof localStorage.seuNome == "undefined" || typeof localStorage.seuNome == "null") {
        localStorage.seuNome = prompt("Qual seu nome:");
} 
nome = localStorage.seuNome;

    if (typeof localStorage.seuNome !== "undefined" || typeof localStorage.seuNome !== "null") {
        let seuNome = document.getElementById('seuNome').innerHTML = nome;
}
}




/* Mudar operações
*********************************/
function somar() {
    document.getElementById('text').innerHTML = 'Somar';
    let soma = document.getElementById("operacao").innerHTML = '+';
    operacao = null;
    operacao = 'soma';
    resetar()  
}
function subtrair() {
    document.getElementById('text').innerHTML = 'Subtrair';
    let subtracao = document.getElementById("operacao").innerHTML = '-';
    operacao = null;
    operacao = 'subtracao';
    resetar()
}
function multiplicar() {
    document.getElementById('text').innerHTML = 'Múltiplicar';
    let multiplicacao = document.getElementById("operacao").innerHTML = '*';
    operacao = null;
    operacao = 'multiplicacao';
    resetar()
}
function dividir() {
    document.getElementById('text').innerHTML = 'Dividir';
    let divisao = document.getElementById("operacao").innerHTML = '/';
    operacao = null;
    operacao = 'divisao';
    resetar()
}

/* Verificar número
*********************************/
function verificarNumero() {
    let valor1 = parseInt(document.getElementById('valor1').innerHTML); //Pega o conteúdo que esta dentro da div
    let valor2 = parseInt(document.getElementById('valor2').innerHTML); //Pega o conteúdo que esta dentro da div
    let n2 = document.getElementById('n2').value; //Pega o valor digitado
   
    if(operacao == 'soma'){
        resultado = valor1 + valor2;
        } else if(operacao == 'subtracao'){
            resultado = valor1 - valor2;
        } else if(operacao == 'multiplicacao'){
                resultado = valor1 * valor2;
        } else if(operacao == 'divisao'){
                resultado = valor1 / valor2;
        }

    if (resultado == n2) {
        alert('VOCÊ ACERTOU O NÚMERO!!!');
        parseInt(document.getElementById('pontos').innerHTML = ++pontuacao);
        resetar()
    } else {
        alert('VOCÊ ERROU,TENTE NOVAMENTE');
        parseInt(document.getElementById('pontos').innerHTML = --pontuacao);
    }
    ponto(pontuacao);
    return pontuacao;
}

function ponto(pontuacao) {
    localStorage.pontuacao = pontuacao;
}
function reiniciar() {
    let pontos = document.getElementById('pontos').innerHTML = 0;
    pontuacao = 0;
    localStorage.pontuacao = pontuacao;
}

// onkeypress | Apertou alguma Tecla completa
function ApertouBotao(event) { 
    if(event.keyCode == 13) {
        verificarNumero();
    }
}

function resetar() {
    document.getElementById('n2').value = "";
    // random() gera um Numero aleatorio
    var numeroAleatorio = Math.floor(Math.random() * 20);
    var numeroAleatorio2 = Math.floor(Math.random() * 9);
    document.getElementById('valor1').innerHTML = numeroAleatorio;
    document.getElementById('valor2').innerHTML = numeroAleatorio2;
}