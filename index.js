/*const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        if (botaoSelecionado) {
            botaoSelecionado.classList.remove("selecionado");
        }

       
        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        if (personagemSelecionado) {
            personagemSelecionado.classList.remove("selecionado");
        }

        
        botao.classList.add("selecionado");

        
        personagens[indice].classList.add("selecionado");

        console.log(indice);
    });
});*/



const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
        // Remove a classe "selecionado" do botão atualmente selecionado
        const botaoSelecionado = document.querySelector(".botao.selecionado");
        if (botaoSelecionado) {
            botaoSelecionado.classList.remove("selecionado");
        }

        // Remove a classe "selecionado" e "animating" do personagem atualmente selecionado
        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        if (personagemSelecionado) {
            personagemSelecionado.classList.remove("selecionado", "animating");
        }

        // Adiciona a classe "selecionado" e "animating" ao botão e personagem correspondentes
        botao.classList.add("selecionado");
        personagens[indice].classList.add("selecionado", "animating");

        // Remove a classe "animating" após a duração da animação (0.7s)
        setTimeout(() => {
            personagens[indice].classList.remove("animating");
        }, 700);

        console.log(indice);
    });
});