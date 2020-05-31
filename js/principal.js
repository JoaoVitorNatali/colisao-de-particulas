var player;
var imagem;
window.onload = ()=>
{
    var cenario = {};
    
    criaCenario(cenario);
    
    
    imagem = new Image();
    imagem.src = 'img/sabao.png';
    // imagem.onload = 
    player = new Player("black", cenario, imagem);
    
    


    document.addEventListener("keydown", (event)=>{ player.move(event, 1)} );
    
    document.addEventListener("keyup", (event)=>{ player.move(event, 0)} );

    var particulas = [];
    var quantParticulas = 15000;


    criaParticulas();
    update();
    
    function criaParticulas(){
        const vetColors = ["green", "blue", "pink", "yellow", "orange", "red", "lime", "lawnGreen"];
        for(let i = 0; i < quantParticulas; i++){
            const random = Math.floor(Math.random()*(vetColors.length +1));
            particulas[i] = new Particulas(vetColors[random], cenario);
        }
    }
    
    function update(){
        
        cenario.ctx.clearRect(0,0,cenario.canvas.width, cenario.canvas.height);

        for(let i in particulas){
            particulas[i].movimenta(player);
        }

        player.movimenta();

        window.requestAnimationFrame(update);
    }


}

