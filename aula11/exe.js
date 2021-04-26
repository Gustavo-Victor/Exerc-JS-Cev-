//pegar elemento html
var botao = window.document.getElementById("botao")

//quando clicado no botão chame a função Verificar
botao.addEventListener('click', Verificar)

//função para verificar velocidade
function Verificar(){
    //variáveis necessárias
    let campo_vel = window.document.getElementsByName("txt1")[0]//campo velocidade
    let velocidade = parseFloat(campo_vel.value) //valor do campo
    let resultado = window.document.getElementById("res")//div de resultado

    //verificar velocidade e exibir mensagem
    if(velocidade > 60){   
        resultado.style.color = 'red'
        resultado.innerText = `Você ultrapassou o limte de velocidade - MULTADO!`
    }else{
        resultado.style.color = 'green'
        resultado.innerText = `Você está dentro do limite de velocidade!`
    }
}