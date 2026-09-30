const CHAVE_CONTRASTE = "modoAltoContraste";

const botaoContraste = document.querySelector(".contraste-toggle");

function aplicarContraste(ativo) {
    document.body.classList.toggle("alto-contraste", ativo);

    if (!botaoContraste) {
        return;
    }

    botaoContraste.setAttribute("aria-pressed", String(ativo));
    botaoContraste.setAttribute(
        "aria-label",
        ativo ? "Desativar alto contraste" : "Ativar alto contraste"
    );
    botaoContraste.textContent = ativo ? "Contraste padrão" : "Alto contraste";
}

if (botaoContraste) {
    let contrasteAtivo = false;

    try {
        contrasteAtivo = localStorage.getItem(CHAVE_CONTRASTE) === "true";
    } catch (erro) {
        contrasteAtivo = false;
    }

    aplicarContraste(contrasteAtivo);

    botaoContraste.addEventListener("click", function () {
        const novoEstado = !document.body.classList.contains("alto-contraste");
        aplicarContraste(novoEstado);

        try {
            localStorage.setItem(CHAVE_CONTRASTE, String(novoEstado));
        } catch (erro) {
            // O modo continua funcional mesmo se o armazenamento estiver indisponível.
        }
    });
}
