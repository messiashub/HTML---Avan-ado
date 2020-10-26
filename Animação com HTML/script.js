let jogador = document.getElementById('jogador');


let xInicio = 0;
let yInicio = 0;


function moverJog(x,y){
    let posicaoX = x + "px";
    let posicaoY = y + "px";


    jogador.style.top = posicaoX;
    jogador.style.left = posicaoY;
}

setInterval(function(){
    moverJog(xInicio++, yInicio++);
},20);
