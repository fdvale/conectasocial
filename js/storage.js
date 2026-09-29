export function salvarCadastro(dadosCadastro) {
    localStorage.setItem(
        "cadastroConectaSocial",
        JSON.stringify(dadosCadastro)
    );
}

export function recuperarCadastro() {
    const dadosSalvos = localStorage.getItem("cadastroConectaSocial");

    if (dadosSalvos) {
        return JSON.parse(dadosSalvos);
    }

    return null;
}