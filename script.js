function validacaoEmail(email) {
    // Separa o e-mail em duas partes, usuário e domínio
    usuario = email.value.substring(0, email.value.indexOf("@"));
    dominio = email.value.substring(email.value.indexOf("@") + 1, email.value.length);
    if ((usuario.length >= 1) &&  // Usuário deve ter tamanho maior ou igual a um
        (dominio.length >= 3) &&  // Domínio deve ter tamanho mairo ou igual a três
        (usuario.search("@") == -1) &&  // Usuário não deve ter @
        (dominio.search("@") == -1) &&  // Domínio não deve ter @
        (usuario.search(" ") == -1) &&  // Usuário não deve ter espaço em branco
        (dominio.search(" ") == -1) &&  // Domínio não deve ter espaço em branco
        (dominio.search(".") != -1) &&  // Domínio deve ter ponto
        (dominio.indexOf(".") >= 1) &&  // A posição do ponto tem que ser maior ou igual a um - a posição 0 do domínio deve ser ocupada por algum caractere
        (dominio.lastIndexOf(".") < dominio.length - 1)) // A posição do ponto também deve ser menor que o último caractere
    {
        alert("E-mail válido");
    }
    else {

        alert("E-mail inválido");
    }
}