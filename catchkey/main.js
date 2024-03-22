const catchKey = document.querySelector('.getKey')
const keyPressed = document.querySelector('.keyPressed')

catchKey.addEventListener('click', e => {
    e.preventDefault()
    getKey()
})

function getKey() {
    catchKey.innerHTML = "Press a key..."
    const keyDownListener = event => {
        keyPressed.innerHTML = `"${event.code}" keycode is ${event.keyCode}`
        catchKey.innerHTML = 'Click Here'
        document.removeEventListener('keydown', keyDownListener)
    }
    document.addEventListener('keydown', keyDownListener)
}
