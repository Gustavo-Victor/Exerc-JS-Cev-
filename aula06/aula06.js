/*Aula 06*/
//--------Exe 01

/*
//variável recebendo o que o usuário digitar quando ver pergunta
var nome = window.prompt("Qual é seu nome?")

//printar nome na tela
window.alert("É um prazer te conhecer "+nome+"!")
*/

//--------Exe 02
//convertendo de string para real
var num1 = Number(window.prompt("Digite o 1° valor: "))
var num2 = Number(window.prompt("Digite o 2° valor: ")) 

//realizando operações
var soma = num1 + num2
var subtracao = num1 - num2
var multiplicacao = num1 * num2
var divisao = num1 / num2
var modulo = num1 % num2


//printando resultados das operações
window.alert(`${num1} + ${num2} = ${soma}`)
window.alert(`${num1} - ${num2} = ${subtracao}`)
window.alert(`${num1} * ${num2} = ${multiplicacao}`)
window.alert(`${num1} / ${num2} = ${divisao}`)
window.alert(`${num1} % ${num2} = ${modulo}`)

//coisas de string
//perguntar texto e atribuir a uma variável
var texto = String(window.prompt("Digite um nome ou texto qualquer: "))

//printar texto e algumas funções de string a partir do texto
window.alert("Texto: " + texto)
window.alert("Texto em maiúsculo: " + texto.toUpperCase())
window.alert("Texto em minúsculo: " + texto.toLowerCase())
window.alert("Quantidade de caracteres do texto: " + texto.length)


