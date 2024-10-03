// ---------------------   Menu  ---------------------
function mostarGalo() {
    document.getElementById("galo").style.display = "block";
    document.getElementById("dados").style.display = "none";
    document.getElementById("memoria").style.display = "none";
}

function mostarDados() {
    document.getElementById("dados").style.display = "block";
    document.getElementById("galo").style.display = "none";
    document.getElementById("memoria").style.display = "none";
}

function mostarMemoria() {
    document.getElementById("dados").style.display = "none";
    document.getElementById("galo").style.display = "none";
    document.getElementById("memoria").style.display = "block";

}

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})


// ---------------------   Jogo do Galo  ---------------------

var jogador = 2;
count = 0;
acabarJogo = false;
function jogar(numero) {
    var celula = document.getElementById(numero);
    if (acabarJogo === false) {
        if (celula.innerHTML === '') {
            jogador = (jogador === 2) ? 1 : 2;
            if (jogador === 1) {
                celula.innerHTML = "X";
                count++;
            }
            else if (jogador === 2) {
                celula.innerHTML = "O";
                count++;
            }
            var paragrafo1 = document.getElementById("jogadorJogar");
            if (jogador === 1) {
                paragrafo1.innerHTML = "Jogador a jogar: O";
            }
            else {
                paragrafo1.innerHTML = "Jogador a jogar: X";
            }
        }
        else {
            alert("Celula já preeenchida!");
        }
        var jogadorvencedor = verificarVencedor();
        var vencedorParag = document.getElementById("vencedor");
        if (jogadorvencedor === 1) {
            vencedorParag.innerHTML = "Vencedor é: X";
            acabarJogo = true;
        }
        else if (jogadorvencedor === 2) {
            vencedorParag.innerHTML = "Vencedor é: O";
            acabarJogo = true;
        }
        else if (jogadorvencedor === 0) {
            vencedorParag.innerHTML = "Empate";
            acabarJogo = true;
        }
    }
    else {
        alert("O jogo ja acabou");
    }
}

function verificarVencedor() {
    posicao1 = document.getElementById(1).innerHTML;
    posicao2 = document.getElementById(2).innerHTML;
    posicao3 = document.getElementById(3).innerHTML;
    posicao4 = document.getElementById(4).innerHTML;
    posicao5 = document.getElementById(5).innerHTML;
    posicao6 = document.getElementById(6).innerHTML;
    posicao7 = document.getElementById(7).innerHTML;
    posicao8 = document.getElementById(8).innerHTML;
    posicao9 = document.getElementById(9).innerHTML;


    if (posicao1 === posicao2 && posicao2 === posicao3 && (posicao3 === "X" || posicao3 === "O")) {
        document.getElementById(1).style.backgroundColor = "#4ECCA3";
        document.getElementById(2).style.backgroundColor = "#4ECCA3";
        document.getElementById(3).style.backgroundColor = "#4ECCA3";
        if (posicao1 === "X") {
            return 1;
        }
        else {
            return 2;
        }
    }
    if (posicao4 === posicao5 && posicao5 === posicao6 && (posicao6 === "X" || posicao6 === "O")) {
        document.getElementById(4).style.backgroundColor = "#4ECCA3";
        document.getElementById(5).style.backgroundColor = "#4ECCA3";
        document.getElementById(6).style.backgroundColor = "#4ECCA3";
        if (posicao4 === "X") {
            return 1;
        }
        else {
            return 2;
        }
    }
    if (posicao7 === posicao8 && posicao8 === posicao9 && (posicao9 === "X" || posicao9 === "O")) {
        document.getElementById(7).style.backgroundColor = "#4ECCA3";
        document.getElementById(8).style.backgroundColor = "#4ECCA3";
        document.getElementById(9).style.backgroundColor = "#4ECCA3";
        if (posicao7 === "X") {
            return 1;
        }
        else {
            return 2;
        }
    }
    if (posicao1 === posicao4 && posicao4 === posicao7 && (posicao7 === "X" || posicao7 === "O")) {
        document.getElementById(1).style.backgroundColor = "#4ECCA3";
        document.getElementById(4).style.backgroundColor = "#4ECCA3";
        document.getElementById(7).style.backgroundColor = "#4ECCA3";
        if (posicao1 === "X") {
            return 1;
        }
        else {
            return 2;
        }
    }
    if (posicao2 === posicao5 && posicao5 === posicao8 && (posicao8 === "X" || posicao8 === "O")) {
        document.getElementById(5).style.backgroundColor = "#4ECCA3";
        document.getElementById(2).style.backgroundColor = "#4ECCA3";
        document.getElementById(8).style.backgroundColor = "#4ECCA3";
        if (posicao2 === "X") {
            return 1;
        }
        else {
            return 2;
        }
    }
    if (posicao3 === posicao6 && posicao6 === posicao9 && (posicao9 === "X" || posicao9 === "O")) {
        document.getElementById(6).style.backgroundColor = "#4ECCA3";
        document.getElementById(9).style.backgroundColor = "#4ECCA3";
        document.getElementById(3).style.backgroundColor = "#4ECCA3";
        if (posicao3 === "X") {
            return 1;
        }
        else {
            return 2;
        }
    }
    if (posicao1 === posicao5 && posicao5 === posicao9 && (posicao9 === "X" || posicao9 === "O")) {
        document.getElementById(1).style.backgroundColor = "#4ECCA3";
        document.getElementById(5).style.backgroundColor = "#4ECCA3";
        document.getElementById(9).style.backgroundColor = "#4ECCA3";
        if (posicao1 === "X") {
            return 1;
        }
        else {
            return 2;
        }
    }
    if (posicao3 === posicao5 && posicao5 === posicao7 && (posicao3 === "X" || posicao3 === "O")) {
        document.getElementById(5).style.backgroundColor = "#4ECCA3";
        document.getElementById(7).style.backgroundColor = "#4ECCA3";
        document.getElementById(3).style.backgroundColor = "#4ECCA3";
        if (posicao3 === "X") {
            return 1;
        }
        else {
            return 2;
        }
    }
    if (count === 9) {
        return 0;
    }

}



function reset() {
    var celulas = document.querySelectorAll("td");
    for (var i = 0; i < celulas.length; i++) {
        celulas[i].innerHTML = '';
    }
    count = 0;
    jogador = 2;
    acabarJogo = false;
    document.getElementById("vencedor").innerHTML = "Jogo do Galo";
    document.getElementById("jogadorJogar").innerHTML = "Jogador a jogar: X";
    for(var i = 0; i < celulas.length; i++){
        var celula = (i+1);
        var cor = document.body.style.backgroundColor;
        document.getElementById(celula).style.backgroundColor = cor;
    }
   
}


// ---------------------   Jogo dos Dados  ---------------------


function vitoria() {
    var player1 = Math.floor(Math.random() * 6) + 1;
    var imgPlayer1 = "./images/dice" + player1 + ".png";
    document.querySelector(".img1").setAttribute("src", imgPlayer1);


    var player2 = Math.floor(Math.random() * 6) + 1;
    var imgPlayer2 = "./images/dice" + player2 + ".png";
    document.querySelector(".img2").setAttribute("src", imgPlayer2);

    if (player1 === player2) {
        document.getElementById("vencerDados").innerHTML = "Empate";
    }
    else if (player1 > player2) {
        document.getElementById("vencerDados").innerHTML = "Player 1 ganhou";
    }
    else {
        document.getElementById("vencerDados").innerHTML = "Player 2 ganhou";

    }
}

function resetDados() {
    var imgPlayer1 = "";
    document.querySelector(".img1").setAttribute("src", imgPlayer1);
    document.querySelector(".img2").setAttribute("src", imgPlayer1);
    document.getElementById("vencerDados").innerHTML = "Jogo dos Dados";
}


// ---------------------   Jogo da Memoria  ---------------------


var countJogadasTotal = 0;
var tentativas = 0;
var countJogadas = 1;
var idPrimeiraJogada = 0;
var idSegundaJogada = 0;
var verificar1;
var verificar2;

function baralharCartas() {
    var imagens = ["./images/azul.png", "./images/branco.png", "./images/preto.png", "./images/tuga.png",
        "./images/verde.png", "./images/vermelho.png", "./images/azul.png", "./images/branco.png", "./images/preto.png",
        "./images/tuga.png", "./images/verde.png", "./images/vermelho.png"];

    for (var i = 0; i <= imagens.length; i++) {
        var troca1 = Math.floor(Math.random() * imagens.length);
        var troca2 = Math.floor(Math.random() * imagens.length);
        [imagens[troca1], imagens[troca2]] = [imagens[troca2], imagens[troca1]];
    }
    for (var i = 0; i < imagens.length; i++) {
        var casa = "casa" + (i + 1);
        var imagem = imagens[i];
        document.getElementById(casa).setAttribute("src", imagem);
    }
    var cartas = document.getElementsByClassName("carta");
    for (var i = 0; i < cartas.length; i++) {
        var carta = cartas[i];
        var frente = carta.querySelector(".frente");
        var verso = carta.querySelector(".verso");
        frente.style.display = "block";
        verso.style.display = "none";
    }
    countJogadas = 1;
    idPrimeiraJogada = 0;
    idSegundaJogada = 0;
    tentativas = 0;
    countJogadasTotal = 0;
    document.getElementById("vencerMemoria").innerHTML = "Jogo da Memoria"
}

function virarCarta(id) {
    var carta = document.getElementById(id);
    if (idPrimeiraJogada === id) {
        alert("celula ja clicada!")
    }
    else {
        if (countJogadas === 1) {
            var frente = carta.querySelector(".frente");
            var verso = carta.querySelector(".verso");
            if (frente.style.display !== "none") {
                frente.style.display = "none";
                verso.style.display = "block";
                verificar1 = verso.id
                countJogadas++;
                idPrimeiraJogada = id;
            }

        }
        else if (countJogadas === 2) {
            var frente1 = carta.querySelector(".frente");
            var verso1 = carta.querySelector(".verso");
            if (frente1.style.display !== "none") {
                frente1.style.display = "none";
                verso1.style.display = "block";
                verificar2 = verso1.id
                countJogadas++;
                idSegundaJogada = id;
                tentativas++;
            }
            elemento1 = document.getElementById(verificar1);
            var elementoSrc1 = elemento1.getAttribute("src");
            elemento2 = document.getElementById(verificar2);
            var elementoSrc2 = elemento2.getAttribute("src");
            if (elementoSrc1 === elementoSrc2) {
                countJogadas = 1;
                idPrimeiraJogada = 0;
                idSegundaJogada = 0;
                countJogadasTotal++;
                if (countJogadasTotal === 6) {
                    document.getElementById("vencerMemoria").innerHTML = "Ganhou! " + tentativas + " tentativas";
                    tentativas = 0;
                }
            }

            else {
                var elemento1 = document.getElementById(idPrimeiraJogada);
                var frenteq = elemento1.querySelector(".frente");
                var versoq = elemento1.querySelector(".verso");
                if (versoq.style.display === "block") {
                    setTimeout(function () {
                        versoq.style.display = "none";
                        frenteq.style.display = "block";
                    }, 2000);

                }
                var elemento2 = document.getElementById(idSegundaJogada);
                var verso2 = elemento2.querySelector(".verso");
                var frente2 = elemento2.querySelector(".frente");
                if (verso2.style.display === "block") {
                    setTimeout(function () {
                        verso2.style.display = "none";
                        frente2.style.display = "block";
                        countJogadas = 1;
                        idPrimeiraJogada = 0;
                        idSegundaJogada = 0;
                    }, 2000);
                }
            }

        }
    }
}










