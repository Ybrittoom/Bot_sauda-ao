function enviar_nome() {
    const input = document.getElementById("input").value;
    const RespostaDoBot = document.getElementById("RespostaDoBot")

    if (input.trim() === "") {
        RespostaDoBot.textContent = "Por favor coloque seu nome!!";
    } else {
        RespostaDoBot.textContent = `Ola ${input}. Eu me chamo Bot_Saudaçao!!`
      
        setTimeout(() => {
            var confirmar = window.confirm("Obrigado por responder, deseja ir para a próxima pergunta?")
            
            if (confirmar) {
                window.location.href = "segpage.html";
            } else {
                RespostaDoBot.textContent += "fique avontade para continuar aqui😊"
            }
        }, 500)


       
        
    }


    

  /* localStorage.setItem('input', input);

   const inputArmazenado = localStorage.getItem('input')

   console.log("nome:" + inputArmazenado) */
    
}

