const listaDeAlunos =[
{nome: "Ana", nota: 5.0},
{nome: "Bruno", nota: 10.0},
{nome: "Carla", nota: 2.0},
{nome: "Andrea", nota: 7.0},
{nome: "Marta", nota: 6.0},
];

console.log("Encontre a aluna Marta e mostre o nome e a média dela")
const usuarioEncontrado = listaDeAlunos.find(u => u.nome === "Marta")
console.log(usuarioEncontrado)
console.log(`Nome: ${usuarioEncontrado.nome} \nNota ${usuarioEncontrado.nota}`)

console.log("Mostre a média geral da turma")
const somaMedia = listaDeAlunos.reduce(total,u) => total + u.nota, 0)
console.log(somaMedia)
console.log((somaMedia) / 5)

console.log("Mostre o nome e a nota dos alunos com nota abaixo de 7.0")
console.log("\nNa lista de usuários, encontre um usuário com idade de 45 anos" )
const alunoEncontrado = listaDeAlunos.find(u => u.nota === 7.0)
console.log(alunoEncontrado)
console.log(`Nome: ${alunoEncontrado.nome} \nIdade ${alunoEncontrado.nota}`)

console.log("Mostre apenas o nome dos alunos com nota maior ou igual a 7.0")