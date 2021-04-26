var amigo = {
    nome: "João",
    peso: 85.40,
    engordar(p=0){
        console.log("Engordou "+p+" kg!")
        this.peso += p
    }
}

console.log(`${amigo.nome} pesa ${amigo.peso}`)
amigo.engordar(2)
console.log(`${amigo.nome} pesa agora ${amigo.peso}`)
