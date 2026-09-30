import { gerarCardsProjetos } from "./projetos.js";
import { configurarFormulario } from "./formulario.js";

const botaoMenu = document.querySelector(".menu-toggle");
const menuPrincipal = document.querySelector(".menu-principal");

if (botaoMenu && menuPrincipal) {
    botaoMenu.addEventListener("click", function () {
        const aberto = menuPrincipal.classList.toggle("ativo");

        botaoMenu.setAttribute("aria-expanded", aberto);

        botaoMenu.setAttribute(
            "aria-label",
            aberto ? "Fechar menu" : "Abrir menu"
        );
    });
}

// ========================================
// ROTEAMENTO SPA
// ========================================

const conteudoPrincipal = document.querySelector("#conteudo-principal");

const paginas = {
    inicio: `
        <section class="hero">
            <div class="container">
                <h1>ConectaSocial</h1>
                <p class="destaque">
                    Transformando comunidades por meio da colaboração.
                </p>

                <picture>
    <source
        type="image/webp"
        srcset="
            imagens/banner-conectasocial-600.webp 600w,
            imagens/banner-conectasocial-1200.webp 1200w
        "
        sizes="(max-width: 767px) 92vw, 1200px"
    >

    <img
        src="imagens/banner-conectasocial.png"
        alt="Voluntários participando de uma ação comunitária da ConectaSocial"
        width="1200"
        height="600"
    >
</picture>

                <p>
                    A ConectaSocial é uma organização fictícia sem fins lucrativos
                    criada para aproximar pessoas interessadas em trabalho voluntário
                    de iniciativas de transformação social.
                </p>
            </div>
        </section>

        <section class="container">
            <h2>Nossa missão</h2>
            <p>
                Fortalecer comunidades por meio de projetos de educação,
                inclusão digital, assistência social e bem-estar comunitário.
            </p>
        </section>

        <section class="container">
            <h2>Como participar</h2>
            <p>
                Conheça nossas iniciativas e escolha como colaborar com seu tempo,
                conhecimento ou contribuição financeira.
            </p>
            <a class="botao" href="#projetos">Conhecer projetos</a>
        </section>

        <section id="contato" class="container">
            <h2>Entre em contato</h2>
            <address>
                <p>
                    E-mail:
                    <a href="mailto:contato@conectasocial.org">
                        contato@conectasocial.org
                    </a>
                </p>
                <p>
                    Telefone:
                    <a href="tel:+5511999999999">(11) 99999-9999</a>
                </p>
                <p>São Paulo - SP</p>
            </address>
        </section>
    `,

    projetos: `    
    <section class="container">
        <h1>Projetos e iniciativas sociais</h1>
        <p>Conheça algumas frentes de atuação da ConectaSocial.</p>

        <div class="grade grid">
            ${gerarCardsProjetos()}
        </div>
    </section>

    <section id="voluntariado" class="container">
        <h2>Seja voluntário</h2>

        <p>
            Voluntários podem colaborar em oficinas, ações educativas,
            organização de campanhas e apoio às atividades comunitárias.
        </p>

        <ul>
            <li>Escolha uma área de interesse.</li>
            <li>Informe sua disponibilidade.</li>
            <li>Preencha o cadastro para participar.</li>
        </ul>

        <a class="botao" href="#cadastro">
            Quero ser voluntário
        </a>
    </section>

    <section id="doacoes" class="container">
        <h2>Doações</h2>

        <p>
            As contribuições ajudam a manter materiais, oficinas e ações sociais.
            Por se tratar de um projeto acadêmico fictício, não são disponibilizados
            dados bancários reais para doação.
        </p>

        <p>
            Para saber mais, entre em contato pelo e-mail
            <a href="mailto:contato@conectasocial.org">
                contato@conectasocial.org
            </a>.
        </p>
    </section>
`,

    cadastro: `
    <section class="container">
        <h1>Cadastro de colaboradores</h1>

        <p>
            Preencha os dados abaixo para demonstrar interesse em participar
            das ações da ConectaSocial.
        </p>

        <form id="form-cadastro" action="#" method="post">

            <fieldset>
                <legend>Dados pessoais</legend>

                <label for="nome">Nome completo</label>
                <input type="text" id="nome" name="nome"
                    autocomplete="name" minlength="3" required>

                <label for="cpf">CPF</label>
                <input type="text" id="cpf" name="cpf"
                    inputmode="numeric"
                    placeholder="000.000.000-00"
                    pattern="[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}"
                    maxlength="14"
                    title="Digite o CPF no formato 000.000.000-00"
                    required>

                <label for="email">E-mail</label>
                <input type="email" id="email" name="email"
                    autocomplete="email" required>

                <label for="nascimento">Data de nascimento</label>
                <input type="date" id="nascimento"
                    name="nascimento" required>

                <label for="telefone">Telefone</label>
                <input type="tel" id="telefone" name="telefone"
                    autocomplete="tel"
                    inputmode="numeric"
                    placeholder="(00) 00000-0000"
                    pattern="\\([0-9]{2}\\) [0-9]{5}-[0-9]{4}"
                    maxlength="15"
                    title="Digite o telefone no formato (00) 00000-0000"
                    required>
            </fieldset>

            <fieldset>
                <legend>Endereço</legend>

                <label for="cep">CEP</label>
                <input type="text" id="cep" name="cep"
                    autocomplete="postal-code"
                    inputmode="numeric"
                    placeholder="00000-000"
                    pattern="[0-9]{5}-[0-9]{3}"
                    maxlength="9"
                    title="Digite o CEP no formato 00000-000"
                    required>

                <label for="endereco">Endereço</label>
                <input type="text" id="endereco"
                    name="endereco" required>

                <label for="numero">Número</label>
                <input type="text" id="numero"
                    name="numero" required>

                <label for="cidade">Cidade</label>
                <input type="text" id="cidade"
                    name="cidade"
                    autocomplete="address-level2"
                    required>

                <label for="estado">Estado</label>
                <select id="estado" name="estado"
                    autocomplete="address-level1" required>
                    <option value="">Selecione</option>
                    <option value="SP">São Paulo</option>
                    <option value="RJ">Rio de Janeiro</option>
                    <option value="MG">Minas Gerais</option>
                    <option value="PR">Paraná</option>
                    <option value="outro">Outro</option>
                </select>
            </fieldset>

            <fieldset>
                <legend>Interesse em voluntariado</legend>

                <p>Áreas de interesse:</p>

                <label>
                    <input type="checkbox" name="interesse" value="educacao">
                    Educação
                </label>

                <label>
                    <input type="checkbox" name="interesse" value="inclusao-digital">
                    Inclusão digital
                </label>

                <label>
                    <input type="checkbox" name="interesse" value="assistencia-social">
                    Assistência social
                </label>

                <label>
                    <input type="checkbox" name="interesse" value="bem-estar">
                    Bem-estar comunitário
                </label>

                <label for="disponibilidade">
                    Disponibilidade principal
                </label>

                <select id="disponibilidade"
                    name="disponibilidade" required>
                    <option value="">Selecione</option>
                    <option value="manha">Manhã</option>
                    <option value="tarde">Tarde</option>
                    <option value="noite">Noite</option>
                    <option value="fim-de-semana">Fim de semana</option>
                </select>

                <label for="mensagem">Informações adicionais</label>
                <textarea id="mensagem" name="mensagem"
                    rows="5" maxlength="500"></textarea>

                <label class="linha-check">
                    <input type="checkbox" name="termos" required>
                    Confirmo que as informações fornecidas são verdadeiras.
                </label>
            </fieldset>

            <button type="submit">Enviar cadastro</button>
        </form>

        <div id="toast"
            class="toast"
            role="status"
            aria-live="polite">

            <strong>Cadastro enviado com sucesso!</strong>
            <span>Obrigado por fazer parte da ConectaSocial.</span>

        </div>
    </section>
`
};


function renderizarPagina() {
    if (!conteudoPrincipal) {
        return;
    }

    const rota = window.location.hash.replace("#", "") || "inicio";

    let pagina = rota;

    if (rota === "voluntariado" || rota === "doacoes") {
        pagina = "projetos";
    }

    const conteudo = paginas[pagina] || paginas.inicio;

    conteudoPrincipal.innerHTML = "";
    conteudoPrincipal.innerHTML = conteudo;

if (pagina === "cadastro") {
    configurarFormulario();
}

    if (rota === "voluntariado" || rota === "doacoes") {
        const secao = document.querySelector(`#${rota}`);

        if (secao) {
            secao.scrollIntoView({
                behavior: "smooth"
            });
        }
    } else {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}


window.addEventListener("hashchange", renderizarPagina);

window.addEventListener("DOMContentLoaded", renderizarPagina);

