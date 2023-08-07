import { produtosSevicos } from "../services/produtos-sevices.js"

const listaProdutosStarWars = document.querySelector('[data-produtos-star-wars]')
const listaProdutosConsole = document.querySelector('[data-produtos-console]')
const listaProdutosDiversos = document.querySelector('[data-produtos-diversos]')

export default function constroiCard(nome, alt, preco, imagemUrl) {
    const card = document.createElement("div")
    card.className = "sessao-produtos__produto"
    const conteudo = `
        <img class="sessao-produtos__produto__imagem" src="${imagemUrl}"
            alt="${alt}">
        <div class="sessao-produtos__produto__conteudo">
            <h3 class="sessao-produtos__produto__titulo">${nome}</h3>
            <p class="sessao-produtos__produto__preco">R$ ${(preco / 100).toFixed(2)}</p>
            <a class="sessao-produtos__produto__link" href="#">Ver produto</a>
        </div>
    `
    card.innerHTML = conteudo

    return card
}

async function listarProdutosPorCategoria(lista, categoria) {
    try {
        const listaProdutosApi = await produtosSevicos.listaProdutos()
        listaProdutosApi.forEach(elemento => {
            if (elemento.categoria === categoria) {
                lista.appendChild(constroiCard(elemento.nome, elemento.alt, elemento.preco, elemento.imagemUrl))
            }
        })
    } catch (error) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possível carregar a lista de vídeos</h2>`
    }

}

const categoriaStarWars = "star-wars"
const categoriaConsole = "console"
const categoriaDiversos = "diversos"

listarProdutosPorCategoria(listaProdutosStarWars, categoriaStarWars)
listarProdutosPorCategoria(listaProdutosConsole, categoriaConsole)
listarProdutosPorCategoria(listaProdutosDiversos, categoriaDiversos)
