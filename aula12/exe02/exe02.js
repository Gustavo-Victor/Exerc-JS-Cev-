
//função para verificar a idade da pessoa e exibir resultados
function verificar(){
    let data = new Date()
    let ano_atual = data.getFullYear()
    let campo_nascimento = window.document.getElementById("nascimento") 
    let ano_nascimento = Number(campo_nascimento.value)   
    let resultado = window.document.getElementById("res")
    let sexo_campo = window.document.getElementsByName('sexo')
    let div_resultado = window.document.getElementById("resultado")

    if(ano_nascimento == '' || ano_nascimento <= 0 || ano_nascimento.length == 0 || ano_nascimento > ano_atual){
        window.alert("Erro! Verifique os dados e tente novamente.")
    }else{
        div_resultado.innerHTML = ''
        let idade = (ano_atual - ano_nascimento)
        let img = window.document.createElement('img')
        let sexo = ''

        if(sexo_campo[0].checked){
            sexo = 'Homem'
            if(idade <=4){
                img.setAttribute('src', '../img/1.png')
                img.setAttribute('alt', 'Homem bebê')
                img.setAttribute('title', 'Homem bebê')
            }else if(idade <=12){
                img.setAttribute('src', '../img/3.png')
                img.setAttribute('alt', 'Homem criança')
                img.setAttribute('title', 'Homem criança')
            }else if(idade <=25){
                img.setAttribute('src', '../img/5.png')
                img.setAttribute('alt', 'Homem adolescente')
                img.setAttribute('title', 'Homem adolescente')
            }else if(idade < 65){
                img.setAttribute('src', '../img/7.png')
                img.setAttribute('alt', 'Homem adulto')
                img.setAttribute('title', 'Homem adulto')
            }else{
                img.setAttribute('src', '../img/9.png')
                img.setAttribute('alt', 'Homem idoso')
                img.setAttribute('title', 'Homem idoso')
            }   
        }else{
            sexo = 'Mulher'
            if(idade <=4){
                img.setAttribute('src', '../img/2.png')
                img.setAttribute('alt', 'Mulher bebê')
                img.setAttribute('title', 'Mulher bebê')
            }else if(idade <=12){
                img.setAttribute('src', '../img/4.png')
                img.setAttribute('alt', 'Mulher criança')
                img.setAttribute('title', 'Mulher criança')
            }else if(idade <=25){
                img.setAttribute('src', '../img/6.png')
                img.setAttribute('alt', 'Mulher adolescente')
                img.setAttribute('title', 'Mulher adolescente')
            }else if(idade < 65){
                img.setAttribute('src', '../img/8.png')
                img.setAttribute('alt', 'Mulher adulta')
                img.setAttribute('title', 'Mulher adulta')
            }else{
                img.setAttribute('src', '../img/10.png')
                img.setAttribute('alt', 'Mulher idosa')
                img.setAttribute('title', 'Mulher idosa')
            } 
        }
        resultado.innerHTML = `${sexo} de ${idade} anos de idade`
        div_resultado.appendChild(img)
        campo_nascimento.value = ''
    }
}