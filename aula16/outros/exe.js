function parimp(n){
    if(n % 2 == 0){
        return "é par"
    }else{
        return "é ímpar"
    }
}

let valor = 2
let resultado = parimp(valor)

console.log(`${valor} ${resultado}`)