//variável que recebe conteúdo html
var div = window.document.getElementById("area")

//adicionando sensores
div.addEventListener('click', clicar)
div.addEventListener('mouseover', entrarMouse)
div.addEventListener('mouseout', sairMouse)
div.addEventListener('dblclick', clicarDuasVezes)

//funções


function entrarMouse(){
    div.style.background = 'yellow'
    div.innerText = "Entrou!"
    div.style.color = "black"
}

function sairMouse(){
    div.style.background = "blue"
    div.innerText = "Saiu!"
    div.style.color = "white"
}

function clicar(){
    div.style.background = "red"
    div.innerText = "Clicou!"
    div.style.color = "white"
}

function clicarDuasVezes(){
    div.style.background = "purple"
    div.innerText = "Clicou várias vezes!"
    div.style.color = "white"
}