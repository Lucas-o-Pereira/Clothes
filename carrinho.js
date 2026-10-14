window.addEventListener('load', e => {
    let total = 0
    let vazio = true
  let carrinhoDiv= document.getElementById('carrinho')
    let array = JSON .parse(window.localStorage.getItem('array'))

    for (let i = 0; i < array.length; i++) {
        console.log('entrando no for')
        let nome = array[i].nome
        let valor = array[i].valor
        let qnt = array[i].quantidade
        console.log(nome, valor, qnt)

        let produto = array[i]

        if (produto.quantidade > 0) {

            console.log('Entrando no if')

            vazio = false
            let img = document.createElement('img')

            img.style.width = '250px'
            img.style.height = '150px'
            img.style.margin = '40px'

            switch (produto.nome) {
                case 'Camisa slim preta':

                img.src = 
            }
        }
    }
})