function enviar_nome() {
    const input = document.getElementById("input").value;
    const RespostaDoBot = document.getElementById("RespostaDoBot")

    if (input.trim() === "") {
        RespostaDoBot.textContent = "Por favor coloque seu nome!!";
    } else {
        RespostaDoBot.textContent = `Ola ${input}. Eu me chamo Bot_Saudaçao!!`
    }

   localStorage.setItem('input', input);

   const inputArmazenado = localStorage.getItem('input')

   console.log("nome:" + inputArmazenado)
    
}

