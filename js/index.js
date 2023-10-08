const botoes = document.querySelectorAll('.botao');
const jogadores = document.querySelectorAll(".jogador")
const itens = document.querySelectorAll('.item')

/* 
adicionando um addEventListener que saberá quando cada botão foi 
clicado, e adicionando o "selecionado" na classe dos botões clicados
*/
itens.forEach((item, indice) =>{
    item.addEventListener("click", () => {

        // removendo a seleção dos botões que já estavam selecionados antes de clicar no novo botão
        desselecionarBotao();

        item.classList.add("selecionado");

        // removendo as informações de jogadores que já estavam selecionados antes de clicar no novo botão
        desselecionarJogador();

        jogadores[indice].classList.add("selecionado");
    })
})

function desselecionarJogador() {
    const jogadorSelecionado = document.querySelector(".jogador.selecionado");
    jogadorSelecionado.classList.remove("selecionado");
}

function desselecionarBotao() {
    const itemSelecionado = document.querySelector(".item.selecionado");
    itemSelecionado.classList.remove("selecionado");
}
