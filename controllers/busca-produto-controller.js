import { produtosSevicos } from "../services/produtos-sevices.js"
import constroiCard from "./mostra-produtos-controller.js"

async function buscarProduto(evento) {
    evento.preventDefault()

    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value
    const busca = await produtosSevicos.buscaProduto(dadosDePesquisa)

    const listaProdutos = document.querySelector("[data-todos-produtos]")

    while (listaProdutos.firstChild) {
        listaProdutos.removeChild(listaProdutos.firstChild)
    }

    busca.forEach(elemento => listaProdutos.appendChild(constroiCard(elemento.nome, elemento.alt, elemento.preco, elemento.imagemUrl)))

    if (busca.length == 0) {
        listaProdutos.innerHTML = `<h2 class="mensagem__titulo">Não existe vídeo com esse termo</h2>`
    }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]")

botaoDePesquisa.addEventListener("click", evento => buscarProduto(evento))
