function calcular() {
    const v1 = document.getElementById("num1").value;
    const v2 = document.getElementById("num2").value;
    const v3 = document.getElementById("num3").value;
    const divResultado = document.getElementById("resultado");

    if (v1 === "" || v2 === "" || v3 === "") {
        divResultado.innerHTML = "<p style='color: #E11B22;'>⚽ Preencha todas as notas!</p>";
        return;
    }

    const n1 = Number(v1);
    const n2 = Number(v2);
    const n3 = Number(v3);

    let soma = n1 + n2 + n3;
    let media = (soma / 3).toFixed(1); // Deixa com uma casa decimal

    let status = "";
    if (media >= 7) {
        status = "<span class='status-aprovado'>Gol! Aprovado! 🏆</span>";
    } else {
        status = "<span class='status-reprovado'>Na trave! Reprovado. ❌</span>";
    }

    divResultado.innerHTML = `
        <p><strong>Soma Total:</strong> ${soma}</p>
        <p><strong>Média Final:</strong> ${media}</p>
        <hr style="margin: 10px 0; border: 0; border-top: 1px solid #ccc;">
        <p>${status}</p>
    `;
}

document.getElementById("btnCalcular").addEventListener("click", calcular);