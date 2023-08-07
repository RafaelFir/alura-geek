const listaProdutos = async () => {
    const conexao = await fetch("http://localhost:3000/produtos")
    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

async function criaProduto(nome, preco, url) {
    const conexao = await fetch("http://localhost:3000/produtos", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
            nome,
            preco,
            url
        })
    })

    if (!conexao.ok) {
        throw new Error("Não foi possível enviar o produto")
    }

    const conexaoConvertida = await conexao.json()

    return conexaoConvertida
}

async function buscaProduto(termoBusca) {
    const conexao = await fetch(`http://localhost:3000/produtos?q=${termoBusca}`)
    const conexaoConvertida = conexao.json()

    return conexaoConvertida
}

export const produtosSevicos = {
    listaProdutos,
    criaProduto,
    buscaProduto
}