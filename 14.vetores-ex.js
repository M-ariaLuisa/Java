// Exercício.

// Crie um vetor com os nomes de seus familiares
// Com seis nomes

// Use todos os comandos vistos em vetores após criar a lista.

const listaDeNomes = ["Jilmara", "José", "Thiago", "Caio","Ollie","Gelia" ]
console.log("Exibindo todos os elementos")
console.log(listaDeNomes)


console.log("\nExibindo todos os elementos:")
console.log(listaDeNomes[0])

console.log("\nAdicionando um elemento: ")
listaDeNomes.push("Graça")
console.log(listaDeNomes)

console.log("\nAdicionando mais um elemento: ")
listaDeNomes.push("Wilson")
console.log(listaDeNomes)
  

console.log("\nRemovendo um elemento: ")
listaDeNomes.splice(4,1)
console.log(listaDeNomes)

console.log("\nRemovendo o segundo elemento: ")
listaDeNomes.splice(1,1)
console.log(listaDeNomes)

console.log("\nRemovendo apenas o último elemento")
listaDeNomes.pop()
console.log(listaDeNomes)


console.log("\nRemovendo apenas o primeiro elemento")
listaDeNomes.shift()
console.log(listaDeNomes)

