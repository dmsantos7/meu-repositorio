//const somar = (numeroA, numeroB) => numeroA + numeroB;

//const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB);

//console.log(calculadora(10, 20, (numeroA, numeroB) => numeroA - numeroB))

//const dobro = (numero) =>  numero * 2;

//const triplo = (numero) => numero * 3;

//const aplicar = (numero, nomeDaFuncao) => nomeDaFuncao(numero);

//console.log(aplicar(20, dobro))

//let somar = (numeroA, numeroB) => numeroA + numeroB;

//let subtrair = (numeroA, numeroB) => numeroA - numeroB;

//let multiplicar = (numeroA, numeroB) => numeroA * numeroB;

//let dividir = (numeroA, numeroB) => numeroA / numeroB;

//let calculadora = (numeroA, numeroB, nomeDaFuncao) => nomeDaFuncao(numeroA, numeroB)

//console.log(calculadora(2022, 1990, subtrair))

function adicionarHttp(url){
    return "http://" + url;
  }
  let listaDeSites = ["www.google.com","www.yahoo.com", "www.dh.com", "www.youtube.com"] 
 function processar(array,nomeDaFuncao){ 
    let newArray = []; 
    for(i of array){ 
        newArray.push(nomeDaFuncao(i))
    } 
    return newArray    
  }

  console.log(processar(listaDeSites, adicionarHttp))

