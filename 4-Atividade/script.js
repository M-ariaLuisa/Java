function calcular() {
 
    const inputQtd = document.getElementById("num1"); 
    const divResultado = document.getElementById("resultado");

 
    if (inputQtd.value === "") {
        divResultado.innerHTML = "<p style='color: #E11B22;'>🍎 Digite a quantidade de maçãs!</p>";
        return;
    }

    let quantidade = Number(inputQtd.value);
    let precoUnitario;


    if (quantidade > 12) {
        precoUnitario = 1.00;
    } else {
        precoUnitario = 1.30;
    }

 
    let total = quantidade * precoUnitario;

    divResultado.innerHTML = `
        <p>Quantidade: <strong>${quantidade}</strong></p>
        <p>Preço Unitário: <strong>R$ ${precoUnitario.toFixed(2).replace('.', ',')}</strong></p>
        <hr style="margin: 10px 0; border: 0; border-top: 1px dashed #00579E;">
        <h3 style="color: #00579E;">Total: R$ ${total.toFixed(2).replace('.', ',')}</h3>
    `;
}

// 7. Ouvinte do botão (Garante que o clique funcione)
document.getElementById("btnCalcular").addEventListener("click", calcular);