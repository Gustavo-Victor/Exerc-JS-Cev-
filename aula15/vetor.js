var vetor = [1, 3, 6, 5, 12, -7, -4, -1, -13] //criando vetor

console.log("Printando o primeiro elemento do vetor: " + vetor[0])//primeiro elemento
console.log('')

//qtd de elementos
console.log('Elementos no vetor: ' + vetor.length)
console.log('')

//printando vetor
console.log('Printando vetor: ')
console.log(vetor)
console.log('')

//vetor com laço
console.log('Printando vetor com laço de repetição (forma original): ')
var contador = 0
while(contador<vetor.length){
    console.log(`[${contador+1}] => ${vetor[contador]}`)
    contador++
}
console.log('')


novo_vetor = vetor.sort()//ordenando vetor
//printando em ordem crescente
console.log("Ordem cresecnte: ")
for(let posicao in novo_vetor){
    console.log(`[${posicao}] => ${novo_vetor[posicao]}`)
}
console.log('')


//printando em ordem decrescente
console.log("Ordem decrescente: ")
for(let contador = novo_vetor.length-1; contador>=0; contador--){
    console.log(`[${contador+1}] => ${novo_vetor[contador]}`)
}
console.log("")


//indexof(elemento)
let chave
let valor = 1
chave = novo_vetor.indexOf(valor)
if(chave != -1){
    
    console.log("Existe o valor "+valor+" dentro do vetor e a chave dele é: ")    
}else{
    console.log("Não existe o valor "+valor+" dentro do vetor, por isso o resultado retornado é: ")
}
console.log(chave)









