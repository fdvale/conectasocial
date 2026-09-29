import { salvarCadastro, recuperarCadastro } from "./storage.js";

export function configurarFormulario() {
    const formulario = document.querySelector("#form-cadastro");
    const toast = document.querySelector("#toast");

    if (!formulario || !toast) {
        return;
    }

    // Recupera os dados salvos no localStorage
const dadosCadastro = recuperarCadastro();

if (dadosCadastro) {
    document.querySelector("#nome").value = dadosCadastro.nome || "";
    document.querySelector("#cpf").value = dadosCadastro.cpf || "";
    document.querySelector("#email").value = dadosCadastro.email || "";
    document.querySelector("#nascimento").value = dadosCadastro.nascimento || "";
    document.querySelector("#telefone").value = dadosCadastro.telefone || "";
    document.querySelector("#cep").value = dadosCadastro.cep || "";
    document.querySelector("#endereco").value = dadosCadastro.endereco || "";
    document.querySelector("#numero").value = dadosCadastro.numero || "";
    document.querySelector("#cidade").value = dadosCadastro.cidade || "";
    document.querySelector("#estado").value = dadosCadastro.estado || "";
    document.querySelector("#disponibilidade").value =
        dadosCadastro.disponibilidade || "";
}

    // Máscaras automáticas
    const cpf = document.querySelector("#cpf");
    const telefone = document.querySelector("#telefone");
    const cep = document.querySelector("#cep");

    if (cpf) {
        cpf.addEventListener("input", function () {
            let valor = cpf.value.replace(/\D/g, "").slice(0, 11);

            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            valor = valor.replace(/(\d{3})(\d)/, "$1.$2");
            valor = valor.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

            cpf.value = valor;
        });
    }

    if (telefone) {
        telefone.addEventListener("input", function () {
            let valor = telefone.value.replace(/\D/g, "").slice(0, 11);

            valor = valor.replace(/^(\d{2})(\d)/, "($1) $2");
            valor = valor.replace(/(\d{5})(\d{1,4})$/, "$1-$2");

            telefone.value = valor;
        });
    }

    if (cep) {
        cep.addEventListener("input", function () {
            let valor = cep.value.replace(/\D/g, "").slice(0, 8);

            valor = valor.replace(/(\d{5})(\d)/, "$1-$2");

            cep.value = valor;
        });
    }

// Validação visual dos campos
const camposObrigatorios = formulario.querySelectorAll(
    "input[required], select[required]"
);

function validarCampo(campo) {
    campo.classList.remove("campo-erro", "campo-sucesso");

    const mensagemAnterior =
        campo.parentElement.querySelector(".mensagem-erro");

    if (mensagemAnterior) {
        mensagemAnterior.remove();
    }

    if (!campo.checkValidity()) {
        campo.classList.add("campo-erro");

        const mensagem = document.createElement("small");
        mensagem.classList.add("mensagem-erro");
        mensagem.textContent = "Verifique o preenchimento deste campo.";

        campo.insertAdjacentElement("afterend", mensagem);

        return false;
    }

    campo.classList.add("campo-sucesso");
    return true;
}

camposObrigatorios.forEach(function (campo) {
    campo.addEventListener("blur", function () {
        validarCampo(campo);
    });
});

    // Envio do formulário e toast
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();

        let formularioValido = true;
        camposObrigatorios.forEach(function (campo) {
            if (!validarCampo(campo)) {
                formularioValido = false;
            }
        });

if (formularioValido && formulario.checkValidity()) {
const dadosCadastro = {
    nome: document.querySelector("#nome").value,
    cpf: document.querySelector("#cpf").value,
    email: document.querySelector("#email").value,
    nascimento: document.querySelector("#nascimento").value,
    telefone: document.querySelector("#telefone").value,
    cep: document.querySelector("#cep").value,
    endereco: document.querySelector("#endereco").value,
    numero: document.querySelector("#numero").value,
    cidade: document.querySelector("#cidade").value,
    estado: document.querySelector("#estado").value,
    disponibilidade: document.querySelector("#disponibilidade").value
};

// submit
salvarCadastro(dadosCadastro);

// Limpa o formulário após o envio
formulario.reset();

camposObrigatorios.forEach(function (campo) {
    campo.classList.remove("campo-erro", "campo-sucesso");
});

const mensagensErro = formulario.querySelectorAll(".mensagem-erro");

mensagensErro.forEach(function (mensagem) {
    mensagem.remove();
});
    toast.classList.add("ativo");

            setTimeout(function () {
                toast.classList.remove("ativo");
            }, 4000);
        }
    });
}