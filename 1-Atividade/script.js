function gerarTabuada() {
    // Obtendo o número do Input no HTML.
    const numeroInput = document.getElementById("numeroInput")
    let numero = parent(numeroInput.value)

    // Elemento do HTML onde o resultado será exibido.
    const resultadoDiv = document.getElementById("resultadoTabuada")
    resultadoDiv.innerHTML = "";
}