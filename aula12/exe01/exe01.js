function carregar(){
    
    //variáveis necessárias
    let msg = window.document.getElementById("msg")//mensagem de cima
    let msg2 = window.document.getElementById("msg2")//mensagem de baixo
    let imagem = window.document.getElementById("imagem")//imagem
    let data = new Date()//objeto data
    let hora = data.getHours()//pegar horas 
    let minutos = data.getMinutes()//pega minutos
    
    //exibir a hora exata 
    msg.innerText = `São ${hora}:${minutos} horas`

    //verificar hora e mudar fundo, imagem e mensagem conforme os casos
    if(hora > 0 && hora < 12){
        window.document.body.style.background = "skyblue"
        imagem.src = '../img/m.png'        
        msg2.innerHTML = `É de manhã!`     
    }else if(hora >=12 && hora < 18){
        window.document.body.style.background = "dodgerblue"
        imagem.src = '../img/t.png'
        msg2.innerHTML = `É de tarde!`
    }else{
        window.document.body.style.background = "darkblue"
        imagem.src = '../img/n.png'
        msg2.innerHTML = `É de noite!`
    }
}