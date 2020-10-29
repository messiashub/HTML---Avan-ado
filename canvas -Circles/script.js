let tela3 = document.getElementById("tela3");

let ctx = tela3.getContext("2d");

let x = 250;  // no meio da tela
let y =250;
let raio = 100;

let inicio = 0
let fim = 2 * Math.PI;

ctx.beginPath(); // começando o caminho
ctx.strokeStyle = "red"   // cor da borda
ctx.fillStyle = "blue"    // preenchimento do circulo

ctx.arc(x,y, raio,inicio,fim);   // arc circulo

ctx.fill();   //Chamando a função fillStyle
ctx.stroke();  // Chamando a função strokeStyle