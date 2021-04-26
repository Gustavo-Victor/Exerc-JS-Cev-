//pegar campos do formulário
var campo_inicio = window.document.getElementById("inicio")
var campo_fim = window.document.getElementById("fim")
var campo_salto = window.document.getElementById("salto")

//preparar div de resultado
var resultado = window.document.getElementById("res")

//função para contar
function Contar(){

    //sempre que o usuário clicar no botão contar a contagem anterior é limpa
    resultado.innerHTML = ''

    if(campo_inicio.value == '' || campo_fim.value == '' || campo_salto.value == ''){ //não preencheu
        window.alert("Preencha todos os campos!")
    }else{
        //converter valores para números
        let inicio = Number(campo_inicio.value)
        let fim = Number(campo_fim.value)
        let salto = Number(campo_salto.value)

        //verificar se salto é igual a 0 ou é negativo
        if(salto == 0){
            window.alert("Salto não pode ser zero. Será definido automaticamente para 1 (um)")
            salto = 1
        }else if(salto<0){
            window.alert("Salto não pode ser negativo. O valor digitado será convertido em um número positivo.")
            salto *= -1
        }

        //realizar contagem
        if(inicio < fim){
            for(let contador = inicio; contador<=fim;contador+=salto){
                resultado.innerHTML += `${contador}\u{1f449} ` 
            }
        }else{
            for(let contador = inicio; contador>=fim; contador-=salto){
                resultado.innerHTML += `${contador}\u{1f449} ` 
            }
        }
        resultado.innerHTML += ' \u{1f3c1}'
    }

    //limpando campos do formulário
    campo_inicio.value = ''
    campo_fim.value = ''
    campo_salto.value = '' 
}


/*Site emojis: https://unicode.org/emoji/charts/emoji-list.html
para colocar no js: \u{código}
U+código : forma do site
*/


/*Site emojis: https://unicode.org/emoji/charts/emoji-list.html
para colocar no js: \u{código}
U+código : forma do site
*/
