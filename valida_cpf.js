function removePontuacao(campo) {
    return campo.value.replace(/\.|-/g, "");
}

function todosDigitosIguais(cpf) {
    return /^(\d)\1{10}$/.test(cpf);
}

// Função principal para validar o CPF
export default function ehUmCPF(campo) {
    const cpfSemPontuacao = removePontuacao(campo);
    
    if (todosDigitosIguais(cpfSemPontuacao) || calculaDigitoVerificador(cpfSemPontuacao, 10) || calculaDigitoVerificador(cpfSemPontuacao, 11) ||  cpfSemPontuacao.match(/[A-Za-zÀ-ÿ]+/)) {        console.log("Dígitos iguais:",todosDigitosIguais(cpfSemPontuacao));
        console.log("CPF sem pontuação:", cpfSemPontuacao);
        campo.setCustomValidity('Esse CPF não é válido');
    }
}