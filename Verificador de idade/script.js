function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fAno.value.length == 0 || fAno.value > ano) {
        window.alert('Verifique os dados e tente novamente.')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'homem'
            if (idade >= 0 && idade < 13) {
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            } else if (idade >=13 && idade < 20) {
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            } else if (idade >= 21 && idade < 55 ) {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
        } else {
            gênero = 'mulher'
            if (idade >= 0 && idade < 13) {
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
            } else if (idade >=13 && idade < 20) {
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            } else if (idade >= 21 && idade < 55 ) {
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}