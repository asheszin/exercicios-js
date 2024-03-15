const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
const relogio = document.querySelector('.relogio')
let contador = 0;
let intervalID;

iniciar.addEventListener('click', function(e){
    pausarContador()
    iniciarContador()
})

pausar.addEventListener('click', function(e){
    pausarContador()
})

zerar.addEventListener('click', function(e){
    zerarContador()
})

function iniciarContador(){
    intervalID = setInterval(attContador, 1000)
}

function pausarContador(){
    clearInterval(intervalID)
}

function zerarContador(){
    contador = 0
    relogio.innerHTML = formatarTempo(contador)
    pausarContador()
}

function attContador(){
    contador++
    relogio.innerHTML = formatarTempo(contador)
}

function formatarTempo(tempo){
    let horas = Math.floor(tempo / 3600)
    let minutos = Math.floor((tempo % 3600) / 60)
    let segundos = tempo % 60
    horas = horas < 10 ? "0" + horas : horas
    minutos = minutos < 10 ? "0" + minutos : minutos
    segundos = segundos < 10 ? "0" + segundos : segundos
    return horas + ":" + minutos + ":" + segundos;
}