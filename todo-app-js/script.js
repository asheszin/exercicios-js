const inputTarefa = document.querySelector('.input-tarefa')
const btnTarefa = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

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
}