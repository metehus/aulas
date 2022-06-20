function ex_01 () {
  let elemento = document.getElementById('info')

  window.alert(elemento.innerText)
}

function ex_02 () {
  let elementos = document.getElementsByName('estadoCivil')


  for (let i = 0; i < elementos.length; i++) {
    const element = elementos[i];
    if (element.checked) {
      alert(element.id)
    }
    
  }
}

function ex3() {
  let nodes = document.getElementsByClassName('normal')

  for (const node of nodes) {
    alert(node.innerText)
  }
}

let count = 0

function ex6() {
  const body = document.body
  const element = document.createElement('h1')
  const texto = document.createTextNode('Um texto')
  element.appendChild(texto)

  body.insertBefore(element)
}
function ex8() {
  let element = document.createElement('li')
  let text = document.createTextNode(document.getElementById('tarefa').value)
  element.appendChild(text)

  document.getElementsByTagName('ul')[0]
    .appendChild(element)

  let tarefa = document.getElementById('tarefa')
  tarefa.value = ''
  tarefa.focus
}

let x = 10

function ex9() {
  const r = () => Math.round(Math.random() * 255)
  //document.body.style.backgroundColor = `rgb(${r()}, ${r()}, ${r()})`

  document.getElementsByTagName('li')[2].style.color = 'gold'
  x += 50
  document.querySelector('ul').style.transform = `translateX(${x}px)`
}