function tabuada() {
    var numero = document.getElementById('numero')
    var res = document.getElementById('res')

    var c = 1

    var n = Number(numero.value)
    res.innerHTML=""

    while (c <= 10) {
        res.innerHTML += `${n} X ${c} = ${n*c} <br/>`
        c++
    }
}