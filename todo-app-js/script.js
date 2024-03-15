const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')
const apagarBtn = document.querySelector('.apagar')

btnTarefa.addEventListener('click', function(e){
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
})
inputTarefa.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)
    }
})
function limpaInput(){
     inputTarefa.value = ''
     inputTarefa.focus()
}
function criaLi() {
    const li = document.createElement('li')
    return li;
}

function criaTarefa(tarefa) {
    const li = criaLi()
    li.innerText = tarefa
    tarefas.appendChild(li)
    limpaInput()
    botaoApagar(li)
}

function botaoApagar(li){
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar)
}

document.addEventListener('click', function(e){
    const el = e.target

    if(el.classList.contains('apagar')){
        el.parentElement.remove()
    }
})
