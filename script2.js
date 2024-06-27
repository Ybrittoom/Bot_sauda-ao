function enviar_resposta() {
    const input = document.getElementById("input").value;
    const RespostaDoBot = document.getElementById("RespostaDoBot");

    if (input.trim() === "") {
        RespostaDoBot.textContent = "Por favor responda"
    } else {
        RespostaDoBot.textContent = `Que legal, voce gosta de fazer ${input}. Eu tambem gosto de fazer varias coisas.`

        criar_elemento()
    }

    function criar_elemento() {
        const h1 = document.createElement("h1");
        h1.textContent = "tituloo";
        document.body.appendChild(h1)
    }
}