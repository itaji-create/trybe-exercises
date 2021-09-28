const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
// 1. Copie esse arquivo e edite apenas ele;

// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

function changeClassTech (event) {
    firstLi.classList.remove("tech");
    secondLi.classList.remove("tech");
    thirdLi.classList.remove("tech");
    event.target.classList.add("tech");
 }
 firstLi.addEventListener('dblclick', changeClassTech);
 secondLi.addEventListener('dblclick', changeClassTech);
 thirdLi.addEventListener('dblclick', changeClassTech);
 
// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
input.addEventListener('keyup', changeTech);

function changeTech() {
    document.getElementsByClassName('tech')[0].innerText = input.value;
}
// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
function portifolio() {
    window.open("https://github.com/itaji-create");
}
myWebpage.addEventListener('dblclick', portifolio);
// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
function alteraCor() {
    myWebpage.style.color = "green";
}
function retornaCor() {
    myWebpage.style.color = "white";
}
myWebpage.addEventListener("mouseover", alteraCor);
myWebpage.addEventListener("mouseleave", retornaCor);

// 6. Bonus, reinicia input ao ser clicado; 
function resetInput() {
    input.value = '';
}
input.addEventListener('click', resetInput)
// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);
secondLi.addEventListener('dblclick', resetText);
thirdLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.
