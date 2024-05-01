function cliqueBotao() {
    let cidade = document.querySelector(".input-cidade").value

    buscarCidade(cidade)
}

async function buscarCidade(cidade) {

    let dados = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + cidade + "&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric").then((resposta) => resposta.json())

    colocarNaTela(dados)

    console.log(dados)
}

function colocarNaTela(dados) {
    document.querySelector(".cidade").innerHTML = "Clima em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".icon-clima").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png"
}