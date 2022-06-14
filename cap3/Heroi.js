let DIRECAO_ESQUERDA = 1;
let DIRECAO_DIREITA = 2;

function Heroi(context, teclado, animacao) {
    this.context = context;
    this.teclado = teclado;
    this.animacao = animacao;
    this.x = 0;
    this.y = 0;
    
    this.direcao = DIRECAO_DIREITA;
}

Heroi.prototype = {

    atualizar: function() {
        if(this.teclado.pressionada(SETA_ESQUERDA) && this.x > 0) { 
            this.direcao = DIRECAO_ESQUERDA;
            this.x -= 10;
        } 

        else if(this.teclado.pressionada(SETA_DIREITA) && this.x < this.context.canvas.width - 20) {
            this.direcao = DIRECAO_DIREITA
            this.x += 10;

        }
    },

    desenhar: function() {
        this.context.fillRect(this.x, this.y, 20, 20);
    },

    atirar: function() {
        let tiro = new Bola(this.context);
        tiro.x = this.x + 10;
        tiro.y = this.y + 10;
        tiro.raio = 4;
        tiro.cor = 'green';

        if(this.direcao == DIRECAO_ESQUERDA) tiro.velocidadeY = -20;
        else tiro.velocidadeY = 20;

        this.animacao.novoSprite(tiro);
    }
}