function getRandom(max = 101, min = 0) {
  return Math.floor(Math.random() * (max - min) + min)
}

// №1
for (let i = 0; i < 100; i++) {
  let newDiv = document.createElement('div')
  newDiv.textContent = `${Math.floor(Math.random() * 100)}`
  newDiv.style =
    'width: 30px; height: 30px; background-color: violet; text-align: center;'
  document.querySelector('.wrapper').appendChild(newDiv)

  if (newDiv.innerText < '31') {
    newDiv.style =
      'width: 30px; height: 30px; background-color: green; text-align: center;'
  } else if (newDiv.innerText > '70') {
    newDiv.style =
      'width: 30px; height: 30px; background-color: red; text-align: center;'
  }
}

//№2
function componentToHex(c) {
  var hex = c.toString(16)
  return hex.length == 1 ? '0' + hex : hex
}

function rgbToHex(r, g, b) {
  return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b)
}

let formatter = document.querySelector('.formatter')

let r = getRandom(256, 0)
let g = getRandom(256, 0)
let b = getRandom(256, 0)
let rgb = `rgb(${r},${g},${b})`

let hexColor = rgbToHex(r, g, b)

let shadeName = 'Не определен'

let brightness = (r + g + b) / 3

if (brightness < 85) {
  shadeName = 'Черный'
} else if (brightness < 128) {
  if (r > g && r > b) {
    shadeName = 'Красный'
  } else if (g > r && g > b) {
    shadeName = 'Зеленый'
  } else if (b > r && b > g) {
    shadeName = 'Синий'
  } else if (r === g && r === b) {
    shadeName = 'Серый'
  } else {
    shadeName = 'Неопределен'
  }
} else {
  if (r > g && r > b) {
    shadeName = 'Розовый'
  } else if (g > r && g > b) {
    shadeName = 'Желтый'
  } else if (b > r && b > g) {
    shadeName = 'Голубой'
  } else if (r === g && r === b) {
    shadeName = 'Серый'
  } else {
    shadeName = 'Неопределен'
  }
}

const DIV = document.createElement('div')
DIV.style = `display: flex; justify-content: center; align-items: center; width: 390px; height: 200px; margin-top: 50px;
background-color: ${rgb}; color: ${brightness < 128 ? 'white' : 'black'}`
DIV.innerHTML += `RGB: ${rgb}`
DIV.innerHTML += `<br>HEX: ${hexColor}`
DIV.innerHTML += `<br>Оттенок: ${shadeName}`

formatter.appendChild(DIV)
