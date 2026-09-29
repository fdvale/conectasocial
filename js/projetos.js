const projetos = [
    {
        titulo: "Inclusão Digital",
        descricao: "Oficinas de tecnologia e competências digitais para ampliar oportunidades e autonomia."
    },
    {
        titulo: "Educação para Todos",
        descricao: "Ações de apoio educacional e incentivo à aprendizagem em comunidades atendidas."
    },
    {
        titulo: "Apoio à Pessoa Idosa",
        descricao: "Atividades de convivência, inclusão e fortalecimento de vínculos sociais."
    },
    {
        titulo: "Bem-Estar Comunitário",
        descricao: "Iniciativas voltadas à qualidade de vida, informação e fortalecimento comunitário."
    }
];

export function gerarCardsProjetos() {
    return projetos.map(function (projeto) {
        return `
            <article class="col-3">
                <h2>${projeto.titulo}</h2>
                <p>${projeto.descricao}</p>
            </article>
        `;
    }).join("");
}