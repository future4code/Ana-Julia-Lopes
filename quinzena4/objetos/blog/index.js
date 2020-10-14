function capturaValores() {

    const blogPost = {
        titulo: document.getElementById("titulo-post").value,
        autor: document.getElementById("autor-post").value,
        conteudo: document.getElementById("conteudo-post").value
    }

    document.getElementById("titulo-post").value = ""
    document.getElementById("autor-post").value = ""
    document.getElementById("conteudo-post").value = ""

    posts.push(blogPost)
    for (let post of posts) {
        console.log(post.titulo, post.autor, post.conteudo)
    }

    inserirPosts()
}


let posts = []

function inserirPosts() {
    let novosPosts = ''
    for (let post of posts) {
        novosPosts += '<ul><li>Título:' + post.titulo + '</li><li>Autor: ' + post.autor + '</li><li>Conteúdo:' + post.conteudo + '</li></ul>' 
    }
    console.log(novosPosts)
    document.getElementById("container-de-posts").innerHTML = novosPosts

}