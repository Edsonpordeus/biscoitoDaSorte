
let buttonCookie = document.querySelector("#cookie") //botão cookie
let boxTwo = document.querySelector(".boxTwo")
let boxOne = document.querySelector(".boxOne")
let tryAgain = document.querySelector("#again")
let mesenger = document.querySelector("#mesenger")

function hideBoxOne(){
    boxTwo.classList.toggle("hidden")
    boxOne.classList.toggle("hidden")
    randomNumber = Math.round(Math.random() * 10)

    switch(randomNumber){
        case 1:
        mesenger.innerText="O caminho é longo, mas a derrota é certa!";
        break
        case 2:
        mesenger.innerText="Nunca é tarde para desistir!";
        break
        case 3:
        mesenger.innerText="Nada como um dia pior do que o outro!";
        break
        case 4:
        mesenger.innerText="Nenhum obstáculo é grande para quem desiste!";
        break
        case 5:
        mesenger.innerText="Primeiro eles riem dos seus sonhos, depois riem dos seus fracassos!";
        break
        case 6:
        mesenger.innerText="Primeiro eles riem dos seus sonhos, depois riem dos seus fracassos!";
        break
        case 7:
        mesenger.innerText="Se você pode sonhar, pode desistir!";
        break
        case 8:
        mesenger.innerText="Vai! E se der merda, volta!";
        break
        case 9:
        mesenger.innerText="Não pense muito. De pensar morreu um burro!";
        break
        default:
        mensenger.innerText="Dias de luta, dias de derrota!";
    }
}

function againAgain(){
    boxTwo.classList.toggle("hidden")
    boxOne.classList.toggle("hidden")
}

buttonCookie.addEventListener("click", hideBoxOne) //chama a função de esconder o bloco 01

tryAgain.addEventListener("click", againAgain)