class Colisor {
    constructor() {
        this.sprites = [];
    }

    novoSprite(sprite) {
        this.sprites.push(sprites);
    }

    processar() {
        for (let i in this.sprites) {
            for (let j in this.sprites) {
                if (i == j) continue;

                this.testarColisao(this.sprites[i], this.sprites[j]);
            }
        }
    }

    testarColisao(sprite1, sprite2) {
        let rets1 = sprite1.retangulosColisao();
        let rets2 = sprite2.retangulosColisao();

        for (let i in rets1) {
            for (let j in rets2) {
                if (this.retangulosColidem(rets1[i], rets2[j])) {
                    sprite1.colidiuCom(sprite2);
                    sprite2.colidiuCom(sprite1);

                    // break colisoes;
                }
            }
        }
    }

    retangulosColidem(ret1, ret2) {
        return (ret1.x + ret1.largura) > ret2.x && ret1.x < (ret2.x + ret2.largura) && (ret1.y + ret1.altura) > ret2.y && ret1.y < (ret2.y + ret2.altura);
    }

    stringUnica(sprite) {
        let str = '';
        let retangulos = sprites.retangulosColisao();

        for (let i in retangulos) {
            str += 'x:' + retangulos[i].x + ',' + 'y:' + retangulos[i].y + ',' + 'l:' + retangulos[i].largura + ',' + 'a:' + retangulos[i].altura + '\n';
        }

        return str;
    }
}