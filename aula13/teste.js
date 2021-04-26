//WHILE
var contador = 1 
console.log('Printando com WHILE')
while(contador<=10){
    console.log(contador)
    contador++
}
console.log('')

//DO WHILE
var contador = 1
console.log('Printando com DO WHILE')
do{
    console.log(contador)
    contador++
}while(contador <=10)
console.log('')

//FATIA DE PIZZA COM DO 
console.log('Printando fatia da pizza')
var fatiaRestante = 8
var fatiaComida = 0
do{
    console.log(`Você comeu ${fatiaComida} e restam ${fatiaRestante}`)
    console.log('')
    fatiaRestante--
    fatiaComida++
    if(fatiaRestante == 0){
        console.log("Você comeu a pizza toda")
        break
    }
}while(fatiaRestante>=0)