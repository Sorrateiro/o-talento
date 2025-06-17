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