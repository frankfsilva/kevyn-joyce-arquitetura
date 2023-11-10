//movimentando o carousel---------------------------------------------------------------------
const slide = document.querySelector(".carousel-slide");                                             //recuperando o slide
const botaoRetornaSlide = document.querySelector(".btn-retorno");                                    //recuperando o botão de retorno do slide
const botaoAvancaSlide = document.querySelector(".btn-avanco");                                      //recuperando o botão de avanço do slide

const slideWidth = slide.offsetWidth;                                                                //constante que armazena a largura total do carousel

let position = 0;                                                                                    //posição inicial do carousel

botaoRetornaSlide.addEventListener('click', () => {                                                  //evento clique no botão de retonar slide
  position += slideWidth;                                                                            //variavel "position" ganha o width relativo ao slide
  position = Math.min(position, 0);                                                                  //valor mínimo da "position" é iguala zero                                                                   
  slide.style.transform = `translateX(${position}px)`;                                               //o slide "se movimenta" em X no valor igual ao width da variável "position"
});

botaoAvancaSlide.addEventListener('click', () => {                                                    
  position -= slideWidth;                                                                            //a variável "position' é reduzida uma (1) vez o tamanho do slide"
  position = Math.max(position, -slideWidth * (slide.childElementCount - 1));                        //limitando o valor máximo da "position"
  slide.style.transform = `translateX(${position}px)`;                                               //o slide "se movimenta" em X no valor igual ao width da variável "position"
});

// exibindo o menu do header e ocultando o hamburguer-----------------------------------------
document.querySelector(".menu-hamburguer").addEventListener("click", function() {           
  document.querySelector(".menu-hamburguer").style.display = "none";                                //suprimindo o menu hamburguer
  document.querySelector("#lista-do-header").classList.add("menu-expandido");                       //adicionando classe para expandir o menu                
  document.querySelector("#lista-do-header").style.display= "inline";                               //exibindo o menu do header
  const itemDaListaDoMenu = document.querySelectorAll(".item");                                     //recuperando o elemento "a"
  itemDaListaDoMenu.forEach(item => {                                                               //para cada item recuperado na constante
    item.classList.add("item-da-lista-expandida");                                                  //adiciona a classe
  })

  const liDaListaDoMenu = document.querySelectorAll(".itemDaLista");
  liDaListaDoMenu.forEach(itemDaLista => {                                                          //para cada "li" do item recuperado na constante
    itemDaLista.classList.add("li-do-menu-expandido");                                              //adiciona a classe paraq estilizar quando clicado no menu hamburguer
  })
})

//exibindo o menu hamburguer e ocultando o menu do header------------------------------------
const mediaQuery = window.matchMedia("(min-width: 1025px)");                                        //recuperando a mediaquery onde o evento não deve acontecer, já que citar onde deve, seria mais trabalhoso
if (mediaQuery.matches) {                                                                           //se esta media estiver ativa
  document.querySelector("#lista-do-header").removeEventListener("click", exibeHamburguer);         //removendo o evento neste mediaquery
//aplicando a animação de escrever o texto, somente nesta mediaQuery
  window.addEventListener("scroll", function(digitandoOConteudo) {                                  //janela ouvindo o evento scroll e executando a função
    document.querySelector(".lista-de-servicos").classList.add("escrevendo")                        //aplicando a classe "escrevendo" na classe selecionada
  })
  
} else {
  document.querySelector("#lista-do-header").addEventListener("click", function(exibeHamburguer) {
  document.querySelector(".menu-hamburguer").style.display = "block";                               //exibindo o menu hamburguer
  document.querySelector("#lista-do-header").style.display = "none";                                //suprimindo o menu do header
  document.querySelector("itemDaLista").style.display = "none";                                     //suprimindo os itens da lista do menu do header
  })
};






