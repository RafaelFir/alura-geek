import { produtosSevicos } from "../services/produtos-sevices"

const form = document.querySelector('[data-form]')

async function criarProduto(evento) {
    evento.preventDefault()

    const nome = document.querySelector('[data-nome]').value
    const preco = document.querySelector('[data-preco]').value
    const url = document.querySelector('[data-url]').value

    try {
        await produtosSevicos.criaProduto(nome, preco, url)

        window.location.href = "../views/index.html"
    } catch (error) {
        alert(error)
    }
}

form.addEventListener("submit", evento => criarProduto(evento))
