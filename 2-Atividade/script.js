function calcular() {
    // 1. Capturar os valores e converter para Número
    const n1 = Number(document.getElementById("num1").value);
    const n2 = Number(document.getElementById("num2").value);
    const divResultado = document.getElementById("resultado");

    // Validação simples
    if (document.getElementById("num1").value === "" || document.getElementById("num2").value === "") {
        divResultado.innerHTML = "Por favor, preencha os dois campos! 🎀";
        return;
    }

    // 2. Cálculos básicos
    let soma = n1 + n2;
    let produto = n1 * n2;
    let media = (n1 + n2) / 2;

    // 3. Lógica do Maior e Menor
    let maior, menor;
    if (n1 > n2) {
        maior = n1;
        menor = n2;
    } else if (n2 > n1) {
        maior = n2;
        menor = n1;
    } else {
        maior = menor = "Eles são iguais!";
    }

    // 4. Mostrar na tela usando Template Strings
    divResultado.innerHTML = `
        <p><strong>Soma:</strong> ${soma}</p>
        <p><strong>Produto:</strong> ${produto}</p>
        <p><strong>Média:</strong> ${media}</p>
        <p><strong>Maior:</strong> ${maior}</p>
        <p><strong>Menor:</strong> ${menor}</p>
    `;
}

// Ligar o botão à função
document.getElementById("btnCalcular").addEventListener("click", calcular);