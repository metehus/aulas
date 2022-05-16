/**
 * Atividade 1
 */

function ativ1Button1 (x) {
    alert("Você pressionou o botão " + x)
}

/**
 * Atividade 2
 */

function ativ2Button() {
    let nome = prompt('Informe seu nome:')
    let idade = prompt('Informe sua idade:')
    alert(`Você é ${nome}, com ${idade} anos de idade`)
}

/**
 * Atividade 3
 */

function ativ3Button() {
    let numero = parseInt(prompt("Informe um número"))
    let next = numero + 1
    let prev = numero - 1
    alert(`O numero informado pelo usuário foi ${numero}. Antes do número ${numero}, temos o número ${prev}. Após o número ${numero}, temos o número ${next}`)
}

/**
 * Atividade 4
 */

function ativ4Button() {
    let nome = prompt('Informe o nome do produto:')
    let preco = parseFloat(prompt('Informe o valor do produto:'))
    let valor = parseFloat(prompt('Informe o valor entregue:'))

    let troco = valor - preco
    alert(`Você comprou "${nome}}" de R$ ${preco.toFixed(2)}. Pagou R$ ${valor.toFixed(2)} e recebeu R$ ${troco.toFixed(2)} de troco.`)
}

/**
 * Atividade 5
 */

function ativ5Button() {
    let celcius = parseFloat(prompt('Insira o valor em °C:'))
    let farenheit = celcius * 1.8 + 32

    alert(`${celcius.toFixed(2)} °C em farenheit: ${farenheit.toFixed(2)} °F`)
}

/**
 * Atividade 6
 */

function ativ6Button() {
    let valor = parseFloat(prompt('Valor em R$:'))
    let cotacao = parseFloat(prompt('Cotação:'))
    let convertido = valor / cotacao
    document.getElementById('resultado').innerHTML = `O valor calculado é: <b>US$ ${convertido.toFixed(2)}</b>, com base na cotação de <b>R$ ${cotacao.toFixed(2)}</b>`
}

/**
 * Atividade 7
 */

function ativ7Button() {
    let produto = prompt('Nome do produto:')
    let valor = parseFloat(prompt('Valor do produto:'))
    let valorComDesconto = valor - (valor * 0.1)

    document.getElementById('resultado').innerHTML = `Você comprou "${produto}" por R$ ${valor.toFixed(2)} e acaba de ganhar um desconto de 10%. Assim você vai pagar apenas R$ ${valorComDesconto.toFixed(2)} pelo seu produto. Volte sempre!`
}

/**
 * Atividade 8
 */

function ativ8Button() {
    let tempo = parseFloat(prompt('Insira o tempo (em horas) gasto no trajeto:'))
    let velocidade = parseFloat(prompt('Insira a velocidade média (em km/h) no trajeto:'))

    let distancia = velocidade * tempo
    let litros = distancia / 12
    
    document.getElementById('resultado').innerHTML = `Foram gastos <b>${litros.toFixed(2)}</b> litros em uma distância percorrida de <b>${distancia.toFixed(2)} km</b>, baseando em uma velocidade de ${velocidade} km/h durante ${tempo} horas e fazendo 12km por litro.`
}

/**
 * Atividade 9
 */
let count = 0
function ativ9Add() {
    document.getElementById('contador').innerText = ++count
}

function ativ9Clear() {
    document.getElementById('contador').innerText = count = 0
}

/**
 * Atividade 10
 */

function ativ10() {
    let numero = parseFloat(prompt('Informe um número:'))
    
    let quadrado = numero ** 2
    let cubo = numero ** 3

    let raizQuadrada = numero ** (1/2)
    let raizCubica = numero ** (1/3)

    document.getElementById('resultado').innerHTML = `Número: <b>${numero}</b><br/>`
    + `Ao qudrado: <b>${quadrado}</b><br/>`
    + `Ao cubo: <b>${cubo}</b><br/>`
    + `Raiz quadrada: <b>${raizQuadrada}</b><br/>`
    + `Raiz cúbica: <b>${raizCubica}</b>`
}