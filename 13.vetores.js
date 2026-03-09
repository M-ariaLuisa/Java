// Vetores.

const listaDeNomes = ["Marta", "José", "Maria"]

console.log("Exibindo todos os elementos")
console.log(listaDeNomes)

console.log("\nExibindo todos os elementos:")
console.log(listaDeNomes[0])

console.log("\nAdicionando um elemento: ")
listaDeNomes.push("Marília")
console.log(listaDeNomes)

console.log("\nAdicionando mais um elemento: ")
listaDeNomes.push("Everaldo")
console.log(listaDeNomes)
  
console.log("\nRemovendo um elemento: ")
// A partir do índice 2, remover apenas elemento.
listaDeNomes.splice(2,1)
console.log(listaDeNomes)

console.log("\nRemovendo o segundo elemento: ")
// A partir do índice 2, remover apenas elemento.
listaDeNomes.splice(1,1)
console.log(listaDeNomes)

console.log("\nRemovendo apenas o último elemento")
listaDeNomes.pop()
console.log(listaDeNomes)

console.log("\nRemovendo apenas o primeiro elemento")
listaDeNomes.shift()
console.log(listaDeNomes)



