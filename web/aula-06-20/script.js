const corAleatoria = () => `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`

/**
 * Exercicio 6
 */
/** @type {HTMLParagraphElement} */
const paragrafoHover = document.querySelector('.hoverChange')
if (paragrafoHover) {
  paragrafoHover.onmouseover = () => {
    paragrafoHover.style.fontSize = '23px'
    paragrafoHover.style.fontFamily = 'monospace'
    paragrafoHover.style.color = corAleatoria()
  }
  
  paragrafoHover.onmouseout = () => {
    paragrafoHover.style.fontSize = null
    paragrafoHover.style.color = null
    paragrafoHover.style.fontFamily = null
  }
}

/**
 * Exercicio 7
 */
/** @type {HTMLFormElement} */
const calculadora = document.querySelector('form#calculadora')
if (calculadora) {
  
calculadora.onsubmit = (event) => {
  event.preventDefault()

  const inp1 = document.querySelector('input[name=input1]').value
  const inp2 = document.querySelector('input[name=input2]').value

  const soma = inp1 + inp2
  const sub = (inp1 < inp2) ? inp1 - inp2 : inp2 - inp1
  const mult = inp1 * inp2
  const div = inp1 / inp2

  document.querySelector('form#calculadora #resultado').innerHTML = `
    <b>Soma:</b> ${soma}<br>
    <b>Subtração:</b> ${sub}<br>
    <b>Multiplição:</b> ${mult}<br>
    <b>Divisão:</b> ${div}<br>
  `
}
}

/**
 * Exercicio 8
 */
/** @type {HTMLImageElement} */
const lampada = document.querySelector('.lampada img')

if (lampada) {
  lampada.onmouseover = () => {
    if (!lampada.classList.contains('quebrada')) lampada.src = './assets/ligada.jpeg'
  }
  lampada.onmouseleave = () => {
    if (!lampada.classList.contains('quebrada')) lampada.src = './assets/desligada.jpeg'
  }
  lampada.ondblclick = () => {
    lampada.src = './assets/quebrada.jpeg'
    lampada.classList.add('quebrada')
  }
}


/**
 * Exercicio 9
 */

/** @type {HTMLImageElement} */
const semaforo = document.querySelector('.semaforo img')
if (semaforo) {
  semaforo.onclick = () => {
    if (semaforo.src.includes('vermelho')) {
      semaforo.src = './assets/amarelo.png'
    } else if (semaforo.src.includes('amarelo')) {
      semaforo.src = './assets/verde.png'
    } else if (semaforo.src.includes('verde')) {
      semaforo.src = './assets/vermelho.png'
    }
  }
}

