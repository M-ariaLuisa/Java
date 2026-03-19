function calcular() {

    const v1 = document.getElementById("num1").value;
    const v2 = document.getElementById("num2").value;
    const v3 = document.getElementById("num3").value;

    const n1 = Number(v1);
    const n2 = Number(v2);
    const n3 = Number(v3);

    const divResultado = document.getElementById("resultado");

   
    if (v1 === "" || v2 === "" || v3 === "") {
        divResultado.innerHTML = "<p style='color: #E11B22;'>⚽ Por favor, preencha os três campos!</p>";
        return;
    }

   
    let soma = n1 + n2 + n3;
    
    let media = (soma / 3);

   
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

   
    divResultado.innerHTML = `
        <p><strong>Soma:</strong> ${soma}</p>
       
        <p><strong>Média:</strong> ${media}</p>
    `
}
    


document.getElementById("btnCalcular").addEventListener("click", calcular);