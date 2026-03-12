
const listaDeNomes = ["Ana", "Maria", "Joana"]


const listaDeNumeros = [1,2,3,4,5]

const listaDeUsuarios = [
{nome: "Ana", idade: 25},
{nome: "Maria", idade: 35},
{ nome: "Joana", idade: 45}
]


    console.log("Exibindo todos os usuários do vetor. ")
listaDeUsuarios.forEach( usuario => {
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
})


for (let i = 0; i <listaDeUsuarios.length; i++) {
console.log(`${listaDeUsuarios[i].nome} tem ${listaDeUsuarios[i].idade} anos.`)
}

console.log("\nFiltrando maiores de 18 ")
const maioridade = listaDeUsuarios.filter(usuario => usuario.idade >= 18 )

maioridade.forEach(usuario => {
    console.log(`${usuario.nome} tem ${usuario.idade} anos. `)
})

console.log("\nFiltrando menores de 18 anos")
const abaixo_maioridade = listaDeUsuarios.filter(usuario => usuario.idade < 18 )

abaixo_maioridade.forEach(usuario => {
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
})

console.log("\nNa lista de números, filtre e mostre apenas números pares")
const pares = listaDeNumeros.filter(n => n % 2 === 0)
pares.forEach(n => {
    console.log(n)})

console.log("\nNa lista de nomes, todos os nomes ")

 console.log("\nNa lista de nomes, mostre apenas os nomes no forEach")
const nomes = listaDeUsuarios.map(u => u.nome)
nomes.forEach(nome => console.log (`Nome: ${nome}`))

console.log("\nNa lista de usuários, encontre um usuário ")
const usuarioEncontrado = listaDeUsuarios.find(u => u.nome === "Ana")
console.log(usuarioEncontrado)
console.log(`Nome: ${usuarioEncontrado.nome} \nIdade ${usuarioEncontrado.idade}`)