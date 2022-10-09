function contar() {
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados.')
    } else {
        res.innerHTML = 'Contando: '

        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido! Consideraremos o passo como 1.')
            p=1
        }

        if (i < f) {
            for(let c=i; c<=f; c = c+p) {
                res.innerHTML += `${c} \u{1F33C} `
            }
        } else {
            for(let c=i; c>=f; c=c-p){
                res.innerHTML += `${c} \u{1F33C} `
            }
        }
        res.innerHTML += `${c} \u{1F33C} `
    }
}