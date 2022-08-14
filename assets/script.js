const cardNota = document.getElementById('card1')
const cardThanks = document.getElementById('card2')
const showNota = document.getElementById('nota')
const submit = document.getElementById('submit')
const botoesNota = document.getElementsByClassName('botao-notas')
const botoesNotaArray = Array.from(botoesNota)

let notaSelecionada

function trocaEstado (){
    cardNota.classList.toggle('no-show')
    cardThanks.classList.toggle('no-show')
}

submit.addEventListener('click', trocaEstado)


function selecionaBotao(event){
    const botaoSelecionado = event.target
    notaSelecionada = botaoSelecionado.value

    showNota.innerText = notaSelecionada

    botoesNotaArray.forEach(botao => {
        botao.classList.remove('selecionado')
    })

    botaoSelecionado.classList.add('selecionado')
}

botoesNotaArray.forEach(botaoNota => {
    botaoNota.addEventListener('click', selecionaBotao)
})