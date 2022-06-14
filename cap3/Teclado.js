let SETA_ESQUERDA = 37;
let SETA_DIREITA = 39;
let ESPACO = 32;

function Teclado(elemento) {
    this.elemento = elemento;

    // Array de teclas pressionadas
    this.pressionadas = [];

    // Teclas disparadas
    this.disparadas = [];

    // Funções de disparo
    this.funcoesDisparo = [];

    let teclado = this;

    elemento.addEventListener('keydown', function(evento) {
        let tecla = evento.keyCode;
        teclado.pressionadas[tecla] = true;

        // Disparar somente se for o primeiro keydown da tecla
        if (teclado.funcoesDisparo[tecla] && ! teclado.disparadas[tecla]) {
            teclado.disparadas[tecla] = true;
            teclado.funcoesDisparo[tecla] ();
        }
    });

    elemento.addEventListener('keyup', function(evento) {
        teclado.pressionadas[evento.keyCode] = false
        teclado.disparadas[evento.keyCode] = false;
    });
}

Teclado.prototype = {
    pressionada: function(tecla) {
        return this.pressionadas[tecla];
    },

    disparou: function(tecla, callback) {
        this.funcoesDisparo[tecla] = callback
    }
}