let tela = document.getElementById("tela");

let ctx = tela.getContext("2d");

let img = new Image();
img.src = "/canvas - imagens/angribirds.png"

img.onload = desenharImg;

function desenharImg(){
    ctx.drawImage(this, 10, 10);
}
