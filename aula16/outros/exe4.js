function fatorial(x){    
    let fatorial = 1 
    for(contador = x; contador>=1; contador--){
        fatorial *= contador
    }
    return fatorial
}

var num = 4
console.log(`O fatorial de ${num} é ${fatorial(num)}`) 