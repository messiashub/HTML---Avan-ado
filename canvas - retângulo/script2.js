let tela = document.getElementById("tela2");

let ctx = tela.getContext("2d");
ctx.rect(10, 10, 100, 200)
ctx.fillStyle = "blue";      // estilo de cor
ctx.lineWidth = 5            // largura da linha

//criando o retângulo
/* ctx.fillRect(10,10, 100, 200) */   // começa com 10 horizontal , 10 vertical, 100 largura, 200 altura
ctx.strokeStyle = "red"     // strokeStyle define ou retorna a cor, gradiente ou padrão usado para traços.

ctx.fill();   // preenche o desenho atual (caminho). A cor padrão é preto.
ctx.stroke();//O método stroke (), na verdade, desenha o caminho que você definiu com todos os métodos moveTo () e lineTo (). A cor padrão é preto.

ctx.clearRect(20,20,30,30)      // caixinha oca dentro do retângulo