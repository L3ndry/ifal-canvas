class Spritesheet {
    constructor(context, imagem, linhas, colunas) {
        this.context = context;
        this.imagem = imagem;
        this.numLinhas = linhas;
        this.numColunas = colunas;
        this.intervalo = 0;
        this.linha = 0;
        this.coluna = 0;
    }
    proximoQuadro() {
        // if (this.coluna < this.numColunas - 1) this.coluna++
        // else this.coluna = 0
        let agora = new Date().getTime();
        if (!this.ultimoTempo)
            this.ultimoTempo = agora;

        if (agora - this.ultimoTempo < this.intervalo)
            return;

        if (this.coluna < this.numColunas - 1)
            this.coluna++;
        else
            this.coluna = 0;

        this.ultimoTempo = agora;
    }
    desenhar(x, y) {
        let larguraQuadro = this.imagem.width / this.numColunas;
        let alturaQuadro = this.imagem.height / this.numLinhas;

        this.context.drawImage(
            this.imagem,
            larguraQuadro * this.coluna,
            alturaQuadro * this.linha,
            larguraQuadro,
            alturaQuadro,
            x,
            y,
            larguraQuadro,
            alturaQuadro
        );
    }
}