var card = document.querySelectorAll('.cartao');
var cards = [...card];
var cartasSelecionadas = [];

var temCartaVirada = false;
var tabuleiroBloqueado = false;
var primeiraCarta, segundaCarta;

function virarCarta() {
  if (tabuleiroBloqueado) {
    return;
  }

  if (this === primeiraCarta) {
    return;
  }

  this.classList.add('flip');

  if (!temCartaVirada) {
    temCartaVirada = true;
    primeiraCarta = this;
    return;
  } else {
    segundaCarta = this;
    this.classList.add('segunda-carta');
    tabuleiroBloqueado = true;
    
    comparaCarta();
  }
  
} 


cards.forEach(item => {  
  var posAleatoria = Math.floor(Math.random() * 6);
  item.style.order = posAleatoria;
}); //para cada carta gerar um numero aleatorio para trocar a ordem das cartas

for (var i = 0; i < 6;) {
  var aux = cards[Math.floor(Math.random() * 10)];
  if (cartasSelecionadas.indexOf(aux) < 0) {
    cartasSelecionadas.push(aux);
    i++;
  }
}


cartasSelecionadas.forEach(item => {
  item.classList.remove('hide');
  var clone = item.cloneNode(true);
  clone.style.order =  Math.floor(Math.random() * 6);
  document.getElementById('jogo').appendChild(clone);
});

document.getElementById('jogo').childNodes.forEach(item => {
  item.addEventListener('click', virarCarta);
});


function comparaCarta() {
  if (primeiraCarta.dataset.valor == segundaCarta.dataset.valor) {
    desabilitarCartas(); 
    return;
  } else {
    desvirarCartas();
    return;
  }
}

function desabilitarCartas() {
  primeiraCarta.removeEventListener('click', virarCarta);
  segundaCarta.removeEventListener('click', virarCarta);
  limparValores();
  return;
}

function desvirarCartas() {
  setTimeout(() => {
    primeiraCarta.classList.remove('flip');
    segundaCarta.classList.remove('flip');
    segundaCarta.classList.remove('segunda-carta');
   limparValores();
  }, 1000);
  return;
}

function limparValores() {
  temCartaVirada = false;
  tabuleiroBloqueado = false;
  primeiraCarta = null;
  segundaCarta = null;
}

function iniciarJogo() {
  var jogo = document.getElementById('jogo-container');
  var texto = document.getElementById('textoInicial');

  jogo.classList.remove('hide');
  texto.classList.add('hide');
  texto.style.display = "none";
  setTimeout(() => {
    
  }, 500);
}




