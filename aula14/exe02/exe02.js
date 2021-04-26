//tabuada
function Tabuada(){
    //pegar campo
    let campoNumero = window.document.getElementById("numero")
    let campoSelect = window.document.getElementById("tab")
    campoSelect.innerHTML = '' // limpar select ao clicar no botão

    //testar envio de dados
    if(campoNumero.value.length == 0){
        window.alert("Erro! Preencha os dados necessários e tente novamente!")
    }else{
        let numero = parseFloat(campoNumero.value)
        let contador = 1

        //calcular tabuada
        do{
            let option = window.document.createElement('option')
            let resultado = contador * numero
            option.text = `${contador} * ${numero} = ${resultado}`
            campoSelect.appendChild(option)
            contador++
        }while(contador<=10)
    }
    //limpar campo do número
    campoNumero.value = ''
}