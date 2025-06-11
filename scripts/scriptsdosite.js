const traducoes = {
        "pt": {
            "textextodocorpoto":getElementById("noticia1").textContent,
        },
        "en": {
            "textodocorpo": getElementById("noticia1").textContent,
        },
        "es": {
            "textodocorpo": getElementById("noticia1").textContent,
        }
    };

    document.getElementById("language-select").addEventListener("change", function() {
        const idiomaSelecionado = this.value;
        document.getElementById("textodocorpo").textContent = traducoes[idiomaSelecionado]["textodocorpo"];
    });

    