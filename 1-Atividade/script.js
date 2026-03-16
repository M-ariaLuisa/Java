function gerarTabuada() {
    // Obtendo o número do Input no HTML.
    const numeroInput = document.getElementById("numeroInput")
    let numero = parseInt(numeroInput.value);

    // Elemento do HTML onde o resultado será exibido.
    const resultadoDiv = document.getElementById("resultadoTabuada");
    resultadoDiv.innerHTML = "";

    if(isNaN(numero) || numero === null || numero === ""){ (
        resultadoDiv.innerHTML = "<p> Porfavor, digite um número válido <p>";
        return; // Este comando sai da função.

    }
    // Adicionar título para a tabuada
    resultadoDiv.innerHTML += `<h2>tabuada do número $(numero)</h2>`;

    // Laço de repetição para gerar tabuada
    for (let i = 1; i <= 10, i++) {
        let resultado = numero = i;
        resultadoDiv.innerHTML += `<p> $(numero) x $(i) - $(resultado) </p>`;

    }
}
const botaoGerar = document.getElementById("btnGerar");
botaoGerar.addEventListener("click",gerarTabuada);

