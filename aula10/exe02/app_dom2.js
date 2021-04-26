function operacoes(){
    //pegar campos do formulário
    var campo_num_1 = window.document.getElementsByTagName("input")[0]
    var campo_num_2 = window.document.getElementsByTagName("input")[1]

    //pegar valores dos campos
    var num1 = Number(campo_num_1.value)
    var num2 = Number(campo_num_2.value)

    //realizar operações e printar resultados
    window.alert(`${num1} + ${num2} = ${num1 + num2}`)
    window.alert(`${num1} - ${num2} = ${num1 - num2}`)
    window.alert(`${num1} * ${num2} = ${num1 * num2}`)
    window.alert(`${num1} / ${num2} = ${num1 / num2}`)
    window.alert(`${num1} % ${num2} = ${num1 % num2}`)
    window.alert(`${num1} ^ ${num2} = ${num1 ** num2}`)

    //limpar campos
    campo_num_1.value = ''
    campo_num_2.value = ''
}