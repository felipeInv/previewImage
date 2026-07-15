'use strict'

const preview = ({target}) => {
    window.document.querySelector('#preview-image').src =  URL.createObjectURL(target.files[0]) 

    //eu uso o  URL.createObjectURL() para pegar a URL do primeiro arquivo do target do elemento e atribuo ao src do img
}

window.document.querySelector('#preview-input').addEventListener('change', preview)

//Aqui em cima o elemento #preview-input está sendo escutado e ao mudar, ele chama a função preview, essa função recebe por atribuição via desestrutura o parâmetro target, poque o método addEventListener automaticamente para a função que ele executa o elemento que ele tá escutando, então na função estamos pegando o targer desse elemento