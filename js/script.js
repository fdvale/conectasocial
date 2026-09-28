function somenteDigitos(valor) {
    return valor.replace(/\D/g, "");
}

function mascaraCPF(valor) {
    return somenteDigitos(valor)
        .slice(0, 11)
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
}

function mascaraTelefone(valor) {
    return somenteDigitos(valor)
        .slice(0, 11)
        .replace(/^(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d{1,4})$/, "$1-$2");
}

function mascaraCEP(valor) {
    return somenteDigitos(valor)
        .slice(0, 8)
        .replace(/(\d{5})(\d{1,3})$/, "$1-$2");
}

const cpf = document.querySelector("#cpf");
const telefone = document.querySelector("#telefone");
const cep = document.querySelector("#cep");

cpf?.addEventListener("input", () => cpf.value = mascaraCPF(cpf.value));
telefone?.addEventListener("input", () => telefone.value = mascaraTelefone(telefone.value));
cep?.addEventListener("input", () => cep.value = mascaraCEP(cep.value));
