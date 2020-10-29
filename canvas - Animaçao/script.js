let tela4 = document.getElementById("tela4");

let ctx = tela4.getContext("2d");



let circle = {   //objeto
    x : 250,
    y : 250,
    raio : 100,

    inicio : 0,
    fim : 0 * Math.PI,

}

function animaCirculo(circle){ //criando uma função  para animar
    ctx.beginPath(); //Criando o background
    ctx.rect(0,0, 500, 500);  // Dimensões do retângulo
    ctx.fillStyle = "beige";  // Criando a cor
    ctx.fill();                  // Preenchendo com a cor




    ctx.beginPath(); // começando o caminho
    ctx.strokeStyle = "red"   // cor da borda
    ctx.fillStyle = "blue"    // preenchimento do circulo

    ctx.arc(circle.x, circle.y, circle.raio, circle.inicio, circle.fim);   // arc circulo

    ctx.fill();   //Chamando a função fillStyle
    ctx.stroke();  // Chamando a função strokeStyle
}


/*  */ //chamando a função
setInterval(function(){
    if(circle.fim < 2 *Math.PI){
        circle.fim +=0.3;
        circle.x += 3;
    }
    animaCirculo(circle);


},60)