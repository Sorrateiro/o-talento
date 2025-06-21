
function clicou() {
    var noticia = document.getElementById("noticia");
    var botao= document.getElementById("botao");
    if (noticia.style.display === "none") {
        noticia.style.display = "block";
        botao.innerHTML = "Esconder Notícia";
    } else {
        noticia.style.display = "none";
        botao.innerHTML = "Mostrar Notícia";
    }
    
}

function carregar() {
    var noticia = document.getElementById("noticia");
    var botao = document.getElementById("botao");
    noticia.style.display = "none";
    botao.innerHTML = "Mostrar Notícia";
}
window.onload = carregar;   

function mostrar() {
    var noticia = document.getElementById("noticia");
    var botao = document.getElementById("botao");
    noticia.style.display = "block";
    botao.innerHTML = "Esconder Notícia";
}
function esconder() {
    var noticia = document.getElementById("noticia");
    var botao = document.getElementById("botao");
    noticia.style.display = "none";
    botao.innerHTML = "Mostrar Notícia";
}
function mudar() {
    var noticia = document.getElementById("noticia");
    var botao = document.getElementById("botao");
    if (noticia.style.display === "none") {
        mostrar();
    } else {
        esconder();
    }
}
function mudarTexto() {
    var botao = document.getElementById("botao");
    if (botao.innerHTML === "Mostrar Notícia") {
        botao.innerHTML = "Esconder Notícia";
    } else {
        botao.innerHTML = "Mostrar Notícia";
    }
}
function mudarCor() {
    var noticia = document.getElementById("noticia");
    if (noticia.style.backgroundColor === "lightblue") {
        noticia.style.backgroundColor = "lightgreen";
    } else {
        noticia.style.backgroundColor = "lightblue";
    }
}
function mudarFonte() {
    var noticia = document.getElementById("noticia");
    if (noticia.style.fontSize === "16px") {
        noticia.style.fontSize = "20px";
    } else {
        noticia.style.fontSize = "16px";
    }
}
function mudarEstilo() {
    var noticia = document.getElementById("noticia");
    if (noticia.style.fontStyle === "normal") {
        noticia.style.fontStyle = "italic";
    } else {
        noticia.style.fontStyle = "normal";
    }
}
function mudarAlinhamento() {
    var noticia = document.getElementById("noticia");
    if (noticia.style.textAlign === "left") {
        noticia.style.textAlign = "center";
    } else {
        noticia.style.textAlign = "left";
    }
}
function mudarMargem() {
    var noticia = document.getElementById("noticia");
    if (noticia.style.margin === "10px") {
        noticia.style.margin = "20px";
    } else {
        noticia.style.margin = "10px";
    }
}
function mudarBorda() {
    var noticia = document.getElementById("noticia");
    if (noticia.style.border === "1px solid black") {
        noticia.style.border = "2px dashed red";
    } else {
        noticia.style.border = "1px solid black";
    }
}
function mudarSombra() {
    var noticia = document.getElementById("noticia");
    if (noticia.style.boxShadow === "none") {
        noticia.style.boxShadow = "5px 5px 10px rgba(0,0,0,0.5)";
    } else {
        noticia.style.boxShadow = "none";
    }
}
function mudarTransparencia() {
    var noticia = document.getElementById("noticia");
    if (noticia.style.opacity === "1") {
        noticia.style.opacity = "0.5";
    } else {
        noticia.style.opacity = "1";
    }
}
function mudarTamanho() {
    var noticia = document.getElementById("noticia");
    if (noticia.style.width === "300px") {
        noticia.style.width = "500px";
    } else {
        noticia.style.width = "300px";
    }
}
function mudarAltura() {
    var noticia = document.getElementById("noticia");
    if (noticia.style.height === "200px") {
        noticia.style.height = "400px";
    } else {
        noticia.style.height = "200px";
    }
}
function mudarVisibilidade() {
    var noticia = document.getElementById("noticia");
    if (noticia.style.visibility === "visible") {
        noticia.style.visibility = "hidden";
    } else {
        noticia.style.visibility = "visible";
    }
}
function mudarDisplay() {
    var noticia = document.getElementById("noticia");
    if (noticia.style.display === "block") {
        noticia.style.display = "none";
    } else {
        noticia.style.display = "block";
    }
}
function mudarCursor() {
    var noticia = document.getElementById("noticia");
    if (noticia.style.cursor === "pointer") {
        noticia.style.cursor = "default";
    } else {
        noticia.style.cursor = "pointer";
    }
}
function mudarFundo() {
    var noticia = document.getElementById("noticia");
    if (noticia.style.backgroundColor === "lightblue") {
        noticia.style.backgroundColor = "lightcoral";
    } else {
        noticia.style.backgroundColor = "lightblue";
    }
}
function mudarTextoNoticia() {
    var noticia = document.getElementById("noticia");
    if (noticia.innerHTML === "Notícia Original") {
        noticia.innerHTML = "Notícia Alterada";
    } else {
        noticia.innerHTML = "Notícia Original";
    }
}
function mudarFonteNoticia() {
    var noticia = document.getElementById("noticia");
    if (noticia.style.fontFamily === "Arial") {
        noticia.style.fontFamily = "Courier New";
    } else {
        noticia.style.fontFamily = "Arial";
    }
}
function mudarCorTexto() {
    var noticia = document.getElementById("noticia");
    if (noticia.style.color === "black") {
        noticia.style.color = "blue";
    } else {
        noticia.style.color = "black";
    }
}
function mudarEstiloFonte() {
    var noticia = document.getElementById("noticia");
    if (noticia.style.fontWeight === "normal") {
        noticia.style.fontWeight = "bold";
    } else {
        noticia.style.fontWeight = "normal";
    }
}
