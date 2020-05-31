function Player(color, cenario){
    
    //atributos
    this.cor = color;
    this.largura = 30;
    this.altura = 30;
    this.dx = this.dy = 0;
    this.px = this.py = 0;
    this.vel = 3;
    
    //métodos
    this.drawObject = ()=>{
        cenario.ctx.fillStyle = this.cor;
        cenario.ctx.fillRect(this.px, this.py, this.largura, this.altura);
    }

    this.movimenta = ()=>{
        if( (this.px > 0 && this.dx == -1) || ( (this.px + this.largura) < cenario.largura) && this.dx ==1 ) this.px += (this.dx * this.vel);
        if ( (this.py > 0 && this.dy == -1) || ( (this.py+this.altura) < cenario.altura ) && this.dy == 1 ) this.py += (this.dy * this.vel);
        this.drawObject();
    }

    this.move = (event, bool)=>{
        
        switch(event.key){
            case "ArrowUp":
                this.dy = parseInt(-(bool));
                break;

            case "ArrowDown":
                this.dy = parseInt(bool);
                break;

            case "ArrowLeft":
                this.dx = parseInt(-(bool));
                break;

            case "ArrowRight": 
                this.dx = parseInt(bool);
                break;
        }
    }

}



function Particulas(color, cenario){

    this.cor = color;
    this.largura = 3;
    this.altura = 3;
    this.dx = this.dy = 0;
    this.inicioX = Math.floor( Math.random()* (cenario.canvas.width - this.largura) );
    this.inicioY = Math.floor( Math.random()* (cenario.canvas.height - this.altura) );
    this.px = this.inicioX;
    this.py = this.inicioY;
    this.vel = 0.5;

    this.drawObject = ()=>{
        cenario.ctx.fillStyle = this.cor;
        cenario.ctx.fillRect(this.px, this.py, this.largura, this.altura);
    }

    this.movimenta = (player)=>{
    	this.dy = Math.floor(Math.random()*2);
    	this.dx = Math.floor(Math.random()*2);
        //direção
        // this.signal = -1;
        // this.direct = Math.floor(Math.random()*2);
        // if(this.direct == 1) this.signal = +1;
        // else this.signal = -1;
        if(this.px > this.inicioX) this.dx = -1;
        else if(this.px < this.inicioX) this.dx = +1;

        if(this.py > this.inicioY) this.dy = -1;
        else if(this.py < this.inicioY) this.dy = +1;
        //movimento
        // this.dy =  this.signal;
        // this.dx =  this.signal;
        //append movimento e impede sair da tela
        if( (this.px > 0 && this.dx == -1) || ( (this.px + this.largura) < cenario.largura) && this.dx ==1 ) this.px += (this.dx * this.vel) ;
        if ( (this.py > 0 && this.dy == -1) || ( (this.py+this.altura) < cenario.altura ) && this.dy == 1 ) this.py += (this.dy * this.vel);

        //afasta as particulas
        this.afasta(player);

        this.drawObject();
    }

    this.afasta = (player)=>{
        const dist = 15;
        const LFP = player.px - dist;
        const RGP = player.px + player.largura + dist;
        const UPP = player.py - dist;
        const DWP = player.py + player.altura + dist;

        const RG = this.px + this.largura;
        const LF = this.px;
        const UP = this.py;
        const DW = this.py + this.altura;

        
        
        if( (RG > LFP && (LF-dist) < LFP) || (LF < RGP && (RG+dist) > RGP) ) {// MEU X EM RELAÇÃO AO PLAYER 
            if (UP >= UPP && DW <= DWP) { // MEU Y EM RELAÇÃO AO PLAYER
                //AFASTAR EM RELAÇÃO À DIREITA DO PLAYER
                if(LF < RGP && (RG + dist) > RGP) {if(RG < cenario.largura) this.px += 4;};
                //À ESQUERDA DO PLAYER 
                if(RG > LFP && (LF - dist) < LFP) {if(LF > 0) this.px -= 4;};
            }
        }

        if( (DW > UPP && (UP-dist) < UPP) || (UP < DWP && (DW+dist) > DWP) ){ //MEU Y EM RELAÇÃO AO PLAYER
            if(LF >= LFP && RG <= RGP){
                //AFASTAR PARA BAIXO EM RELAÇÃO AO PLAYER
                if(UP < DWP && (DW+dist) > DWP) { if(DW < cenario.altura) this.py += dist/4;};
                if (DW > UPP && (UP-dist) < UPP) { if(UP > 0) this.py -= dist/4;};
            }
        }
        
    }
}