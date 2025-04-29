function removePontuacao(campo) {
    return campo.value.replace(/\.|-/g, "");
}

function todosDigitosIguais(cpf) {
    return /^(\d)\1{10}$/.test(cpf);
}