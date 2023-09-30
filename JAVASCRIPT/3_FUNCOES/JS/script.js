//1 - Criando uma função
//function sem argumentos


function minhaFuncao() {
    console.log("Testando!");
  }
  
  minhaFuncao();
  
  const minhaFuncaoEmVariável = function () {
    console.log("Função em variável!");
  };
  
  minhaFuncaoEmVariável();
  
  function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`);
  }
  
  funcaoComParametro("Opa");


function minhaFuncao(){
    console.log(1+5)
}

minhaFuncao()

//função em variavel

const variavelMinhaFuncao = ()=>{
    console.log("funcão em variavel");
}

variavelMinhaFuncao()

//função com argumentos 

function texto(txt){
    console.log(`imprimindo:${txt}`)
}
texto("alguma coisa");
texto("outra coisa");


// 2 return

//SOMA
function soma(n1, n2){
    return n1 + n2
}
const res = soma(20, 8);

console.log(res);


//SOMA DE OUTRO JEITO
  const a = 10;
  const b = 20;
  const c = 30;
  const d = 40;
  
  function soma(n1, n2) {
    return n1 + n2;
  }
  
  const resultado= soma(a, b);
  
  console.log(resultado);
  
  console.log(soma(c, d));

  console.log(resultado);


// 3 - escopo da função
let y = 10;
  
function testandoEscopo() {
    let y = 20;
      console.log(`Y dentro da função: ${y}`);
}
    
console.log(`Y fora da função: ${y}`);
    
testandoEscopo();

  // 4 - escopo aninhado
  let m = 10;
  
  function escopoAninhado() {
    let m = 20;
  
    if (true) {
      let m = 30;
  
      console.log(m);
    }
  
    console.log(m);
  }
  
  escopoAninhado();
  
  console.log(m);
  
  // 5 - arrow function
  const testeArrow = () => {
    console.log("Esta é uma arrow function");
  };
  
  testeArrow();
  
  const parOuImpar = (n) => {
    if (n % 2 === 0) {
      console.log("Par");
      return;
    }
  
    console.log("Impar");
  };
  
  parOuImpar(5);
  parOuImpar(6);
  
  // 6 - mais sobre arrow functions
  const raizQuadrada = (x) => {
    return x * x;
  };
  
  const raizQuadrada2 = (n) => n * n;
  
  console.log(raizQuadrada(4));
  console.log(raizQuadrada2(4));
  
  const helloWorld = () => console.log("Hello!");
  
  helloWorld();


   // 7 - parametro opcional
   const multiplication = function (n, m) {
    if (m === undefined) {
      return n * 2;
    } else {
      return m * n;
    }
  };
  
  console.log(multiplication(4, 4));
  console.log(multiplication(4));
  
  const greeting = (name) => {
    if (!name) {
      console.log("Olá!");
      return;
    }
  
    console.log(`Olá ${name}!`);
  };
  
  greeting();
  greeting("Matheus");
  

   // 8 - valor default
   const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}!`;
  };
  
  console.log(customGreeting("Matheus"));
  
  console.log(customGreeting("João", "Bom dia"));
  
  const repeatText = (text, repeat = 2) => {
    for (let i = 0; i < repeat; i++) {
      console.log(text);
    }
  };
  
  repeatText("Testando");
  repeatText("Agora repete 5 vezes", 5);
  
  // 9 - closure
  function someFunction() {
    let txt = "Alguma coisa";
  
    function display() {
      console.log(txt);
    }
  
    display();
  }
  
  someFunction();
  
  // 10 - mais sobre closure
  const multiplicationClosure = (n) => {
    return (m) => {
      return n * m;
    };
  };
  
  const c1 = multiplicationClosure(5);
  
  const c2 = multiplicationClosure(10);
  
  console.log(c1);
  console.log(c2);
  
  console.log(c1(5));
  console.log(c2(10));
  
  // 11 - recursion
  const untilTen = (n, m) => {
    if (n < 10) {
      console.log("A função parou de executar!");
    } else {
      const x = n - m;
  
      console.log(x);
  
      untilTen(x, m);
    }
  };
  
  untilTen(100, 7);
  
  // infinite recursion, tomar cuidado
  // function run() {
  //   console.log("Executando...");
  //   run();
  // }
  
  // run();
  
  function factorial(x) {
    if (x === 0) {
      return 1;
    } else {
      return x * factorial(x - 1);
    }
  }
  
  const num = 6;
  
  const result = factorial(num);
  
  console.log(`O fatorial do número ${num} é ${result}`);


// fatorial em função
function fatorial(num){
    var fatorial = num;
    var result = fatorial;
    for (var i = 1; i < fatorial; i++) {
    result *= i;
    }
    console.log(result);
}
fatorial(5)



//função que muda o backgroud color

// function darkMode(corFundo, corAlgarismos){
//     return corFundo, corAlgarismos
// }

// darkMode(document.body.style.backgroundColor = `grey`,
// document.querySelector(".titulo").style.color = `#FFF`)


//função darkmod

let btn = document.querySelector("#btnColorMode")

btn.addEventListener("click",()=>{
  let mod = document.querySelector(".main");
  if(mod.classList.contains("dark")){
    mod.classList.remove("dark");
   
    btn.innerHTML = "modo escuro"
  }else{
    mod.classList.add("dark")
    btn.innerHTML = "modo claro"
    
  }
})

/*function darkMode(){
        document.body.style.backgroundColor = `grey`,
        document.querySelector(".titulo").style.color = `#FFF`
        document.querySelector("#btnColorMode").innerHTML = "modo claro"
}*/


/*função que retorna o user*/

const login = (name)=>{
    if(!name){
        console.log("olá!")
    }
    console.log(`Olá ${name}`)
    
}

login()
login("João.")


/*lengh*/

let nome = "joao"

if(nome.length < 10 ){
    console.log(nome.length)
}
  

  

  
 
 
