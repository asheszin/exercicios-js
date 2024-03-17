function criaCalculadora(){
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia(){
           this.cliqueBotoes()
           this.pressionaEnter()
        },
        
        clearDisplay() {
            this.display.value = ''
        },

        pressionaEnter() {
            document.addEventListener('keydown', (e) => {
                if (e.keyCode === 13) {
                    e.preventDefault()
                    console.log('Tecla Enter pressionada');
                    this.realizaConta()
                }
            })
        },
        realizaConta() {
            let conta = this.display.value;

            try {
                conta = eval(conta)

                if(!conta) {
                    alert('Conta invalida');
                    return;
                }
                this.display.value = conta
            } catch(e) {
                alert('Conta invalida');
                return;
            }
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },



        cliqueBotoes(){
            document.addEventListener('click', function(e){
                const el = e.target
                
                if(el.classList.contains('btn-num')) {
                    this.btnParaDisplay(el.innerText);
                }
                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }
                if(el.classList.contains('btn-del')) {
                    this.apagaUm()
                }
                if(el.classList.contains('btn-eq')) {
                    this.realizaConta()
                }
            }.bind(this))        
        },

        btnParaDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();

calculadora.inicia()