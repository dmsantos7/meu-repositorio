let frutas = ["maça", "banana", "uva"];

let frutasDois = ["laranja", "abacate", "goiaba"];

let listaCompleta = [...frutas, ...frutasDois];

console.log(listaCompleta);

let pessoa = {
    nome:"vinicius",
    idade: 22
}
let infoPessoal = {
    tel:"123456789",
    rg: 1121212112,
    ...pessoa
}
let pessoaCompleta = {
    endereço: "Rua dos bobos",
    ...infoPessoal
}

console.log(pessoaCompleta)

function letras(...paramns){
console.log(paramns[1])
}

letras("a","b","c")
