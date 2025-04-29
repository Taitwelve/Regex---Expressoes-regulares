function removePontuacao(campo) {
    return campo.value.replace(/\.|-/g, "");
}