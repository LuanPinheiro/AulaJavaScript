function postagem(titulo, mensagem, autor, live){
    this.titulo = titulo
    this.mensagem = mensagem
    this.autor = autor
    this.comentarios = [
        {autor: 'Maya', mensagem: 'Bom'},
        {autor: 'Marcelo', mensagem: 'Ok'}
    ]
    this.visualizacoes = 10
    this.estaAoVivo = live
}

const novaPostagem = new postagem('Quero Falar', 'Comentários sobre JavaScript e suas funcionalidades', 'Luan', true)
console.log("Nova postagem criada:", novaPostagem)