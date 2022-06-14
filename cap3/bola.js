function Bola(context) {
    this.context = context;
    this.x = 0;
    this.y = 0;
    this.velocidadeX = 0;
    this.velocidadeY = 0;

    this.cor = 'green';
    this.raio = 10;
}

Bola.prototype = {
    atualizar: function() {
        let ctx = this.context;

        this.x += this.velocidadeX;
        this.y += this.velocidadeY;
    },

    desenhar: function() {
        let ctx = this.context;

        ctx.save();

        ctx.fillStyle = this.cor;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.raio, 0, 2 * Math.PI, false);
        ctx.fill()

        ctx.restore();
    }
}