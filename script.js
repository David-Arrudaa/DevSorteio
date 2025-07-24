const exit = document.querySelector("#exit-input")
const sortearBotao = document.querySelector("button")

function generateNumber(){

    const min = Math.ceil(document.querySelector("#min-input").value)
    const max = Math.floor(document.querySelector("#max-input").value)

    const result = Math.floor(Math.random() * (max - min + 1)) + min;

    exit.value = result
}

sortearBotao.addEventListener("click", generateNumber)