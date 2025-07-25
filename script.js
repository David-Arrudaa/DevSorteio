const exit = document.querySelector("#exit-input")
const sortearBotao = document.querySelector("button")

function generateNumber() {

    const min = Math.ceil(document.querySelector("#min-input").value)
    const max = Math.floor(document.querySelector("#max-input").value)

    if (min < max) {
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        exit.value = result
    } else {
        alert("Erro no intervalo: O primeiro número deve ser menor ao segundo.")
    }
}

sortearBotao.addEventListener("click", generateNumber)