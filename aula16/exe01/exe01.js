//pegar campos
var campoNumero = window.document.getElementById("numero")
var campoSelect = window.document.getElementById("vetor")
var resultado = window.document.getElementById("res")

//vetor
var vetor = []

//adicionar número ao vetor
function Adicionar(){
    if(!validarNumero(campoNumero.value)){//validar número
        window.alert("Valor inválido!")
    }else{
        let numero = Number(campoNumero.value)//pegar valor do campo e transformar em numérico
        if(dentroDaLista(numero, vetor)){
            window.alert(`${numero} já está na lista!`)
        }else{
            window.document.getElementById("finalizar").disabled = false //habilitar o finalizar
            resultado.innerHTML = ''
            vetor.push(numero)
            let item = window.document.createElement('option')
            item.text = `Valor ${numero} adicionado`            
            campoSelect.appendChild(item)
        }
    }
}

//função para finalizar e exibir resultados na tela
function Finalizar(){
    if(vetor.length == 0){
        window.alert("Você precisa adicionar números para finalizar")
    }else{
        window.document.getElementById("finalizar").disabled = true
        let maior = vetor[0]
        let menor = vetor[0]
        let media = 0.00
        let soma = 0.00
        let qtd_elementos = vetor.length

        //fazer os cálculos necessários como média, soma, maior, menor, etc
        for(let contador = 0; contador<qtd_elementos; contador++){
            if(vetor[contador] > maior){
                maior = vetor[contador]
            }

            if(vetor[contador] < menor){
                menor = vetor[contador]
            }
            soma += vetor[contador]            
        }
        media = soma / qtd_elementos

        //formatar valores
        maior = maior.toFixed(2).replace('.', ',')
        menor = menor.toFixed(2).replace('.', ',')
        media = media.toFixed(2).replace('.', ',')
        soma = soma.toFixed(2).replace('.', ',')        

        //exibir resultados finais
        resultado.innerHTML += `<p><em>Quantidade de elementos: </em>${qtd_elementos}</p>`
        resultado.innerHTML += `<p><em>Maior elemento: </em>${maior}</p>`
        resultado.innerHTML += `<p><em>Menor elemento: </em>${menor}</p>`
        resultado.innerHTML += `<p><em>Soma: </em>${soma}</p>`
        resultado.innerHTML += `<p><em>Média: </em>${media}</p>`
    }
}

//validar 
function validarNumero(valor){
    if(Number(valor)>0 && Number(valor)<=100 && valor.length != 0){
        return true
    }else{
        return false
    }
}

//verificar se já tá na lista
function dentroDaLista(elemento, lista){
    if(lista.indexOf(elemento) != -1){
        return true
    }else{
        return false
    }
}