class Roupas {
    Produto
    Preco
    Img
    Quantidade
    Id
    constructor(produto, preco, img, quantidade, id) {
        this.Produto = produto;
        this.Preco = preco;
        this.Img = img;
        this.Quantidade = 0;
        this.Id = id;
    } 
}

const roupas1 = new Roupas("Camisa slim preta", 100, ['./img/camisaPreta01.jpg', './img/camisaPreta02.jpg', './img/camisaPreta03.jpg'], 1);
const roupas2 = new Roupas("Moletom Branco", 90 , ['./img/MoletomBranco.jpg', './img/MoletomBranco02.jpg', './img/MoletomBranco03.jpg'], 2);
const roupas3 = new Roupas("Calça jeans", 110 , ['./img/calcaJeans.jpg', './img/calcaJeans02.jpg', './img/calcaJeans03.jpg'], 3);
const roupas4 = new Roupas("Moletom Preto", 110 , ['./img/Moletom01.jpg', './img/MoletomVerde.jpg', './img/MoletomCinza.jpg'], 4);

const btn1 = document.getElementById('imgbtn');

btn1.addEventListener('click', e => {
    window.location.replace('./comprar.html');

    window.localStorage.setItem('nome', roupas1.Produto);
    window.localStorage.setItem('valor', roupas1.Preco);
    window.localStorage.setItem('id', roupas1.Id);
    for (let i = 0; i < 4; i++) {
        window.localStorage.setItem((`img` + (i + 1)) , roupas1.Img[i]);
    }
})

const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', e => {

    window.location.replace('./comprar.html');

    window.localStorage.setItem('nome', roupas2.Produto);
    window.localStorage.setItem('valor', roupas2.Preco);
    window.localStorage.setItem('id', roupas2.Id);
    for (let i = 0; i < 4; i++) {
        window.localStorage.setItem((`img` + (i + 1)) , roupas2.Img[i]);
    }

})
const btn3 = document.getElementById('btn3');

btn3.addEventListener('click', e => {

    window.location.replace('./comprar.html');

    window.localStorage.setItem('nome', roupas3.Produto);
    window.localStorage.setItem('valor', roupas3.Preco);
    window.localStorage.setItem('id', roupas3.Id);
    for (let i = 0; i < 4; i++) {
        window.localStorage.setItem((`img` + (i + 1)) , roupas3.Img[i]);

    }

})
const btn4 = document.getElementById('btn4');

btn4.addEventListener('click', e => {

    window.location.replace('./comprar.html');

    window.localStorage.setItem('nome', roupas4.Produto);
    window.localStorage.setItem('valor', roupas4.Preco);
    window.localStorage.setItem('id', roupas4.Id);
    for (let i = 0; i < 4; i++) {
        window.localStorage.setItem((`img` + (i + 1)) , roupas4.Img[i]);
    }
})