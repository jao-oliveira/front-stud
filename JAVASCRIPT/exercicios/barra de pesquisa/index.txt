let pesquisarInput = document.querySelector("#pesquisar");

pesquisarInput.addEventListener("keyup", () => {
  let pesquisar = pesquisarInput.value.toLowerCase();
  let animais = document.querySelectorAll(".animais");

  for (let i = 0; i < animais.length; i++) {
    //se animais com letras minusculas for diferente de qualquer elemento incluso 
    //na barra de pesquisa os elemntos da classe animais recebe um display none
    if (!animais[i].innerHTML.toLowerCase().includes(pesquisar)) {
      animais[i].style.display = "none";
    } else {
      //se os elementos inclusos em pesquisar forem iguais a algum elemento da classe 
      //imais então animais recebe display list-item
      animais[i].style.display = "list-item";
    }
  }
});