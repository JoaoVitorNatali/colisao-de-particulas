function criaCenario(cenario){

    let cnv = document.createElement("canvas");
    let ctx = cnv.getContext("2d");
    let ALTURA = window.innerHeight;
    let LARGURA = window.innerWidth;

    if(ALTURA >= 500){
        ALTURA = 600;
        LARGURA = 600;
    }
      
    cenario.altura = ALTURA;
    cenario.largura = LARGURA;
    
    this.desenha = function(){
        cnv.height = cenario.altura;
        cnv.width = cenario.largura;
        cenario.canvas = cnv;
        cenario.ctx = ctx;
        cenario.canvas.style.border = "solid 1px #000";
        document.body.appendChild(cenario.canvas);
    }

    this.desenha();
}
