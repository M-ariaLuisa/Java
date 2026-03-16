function gerarTabuada() {
    // Obtendo o número do Input no HTML.
    const numeroInput = document.getElementById("numeroInput");
    let numero = parseInt(numeroInput.value);

    // Elemento do HTML onde o resultado será exibido.
    const resultadoDiv = document.getElementById("resultadoTabuada");
    resultadoDiv.innerHTML = "";

    // Validação corrigida (removido o parêntese extra)
    if (isNaN(numero)) { 
        resultadoDiv.innerHTML = "<p>Por favor, digite um número válido.</p>";
        return; 
    }

    // Título da tabuada (corrigido para ${})
    resultadoDiv.innerHTML += `<h2>Tabuada do número ${numero}</h2>`;

    // Laço de repetição (corrigido para usar ; e *)
    for (let i = 1; i <= 10; i++) {
        let resultado = numero * i;
        // Exibição corrigida para usar ${}
        resultadoDiv.innerHTML += `<p>${numero} x ${i} = ${resultado}</p>`;
    }
}

const botaoGerar = document.getElementById("btnGerar");
botaoGerar.addEventListener("click", gerarTabuada);