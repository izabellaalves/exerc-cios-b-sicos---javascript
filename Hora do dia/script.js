

function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var oi = document.getElementById('oi')
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        img.src = 'manha.jpg'
        document.body.style.background = '#efcc62'
        oi.innerHTML = 'Bom dia!'
    } else if (hora >=12 && hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#de7321'
        oi.innerHTML = 'Boa tarde!'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = '#0d213d'
        oi.innerHTML = 'Boa noite!'
    }
}


