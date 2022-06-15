class Animacao {
    constructor() {
        this.context = context;
        this.sprites = [];
        this.ligado = false;
    }

    novoSprite(sprite) {
        this.sprites.push(sprite);
    }

    ligar() {
        this.ligado = true;
        this.proximoFrame();
    }

    desligar() {
        this.ligado = false;
    }

    proximoFrame() {

        if (!this.ligado)
            return;

        this.limparTela();
        
        for (let i in this.sprites)
            this.sprites[i].atualizar();

        for (let i in this.sprites)
            this.sprites[i].desenhar();

        let animacao = this;
        requestAnimationFrame(function () {
            animacao.proximoFrame();
        });
    }

    limparTela() {
        let ctx = this.context;
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    }
}
