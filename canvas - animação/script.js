let tela = document.getElementById("tela");

let contexto = tela.getContext("2d");
contexto.moveTo(0, 0);       // linha no começo da  tela
contexto.lineTo(250, 250);  // linha em direção ao centro  da  tela
contexto.lineTo(500, 0);
contexto.strokeStyle = "#ff0000"  // cor da linha
contexto.lineWidth = 3;             // largura da linha


contexto.stroke();           // Grossura da  linha