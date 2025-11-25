

// Завдання 1

// Завдання "Таймер інтервалу": Створіть програму, яка виводить повідомлення кожну секунду 
// за допомогою setInterval. 
// Після 5 повідомлень зупиніть виконання інтервалу за допомогою clearInterval.

let count = 1

const mess = setInterval(() => {
    console.log(`Повідомлення: ${count}`)
    count ++

    if(count > 5){
        clearInterval(mess)
    }
}, 1000)


// Завдання 2

// Завдання "Анімація елементів": Створіть кілька елементів на сторінці і реалізуйте просту анімацію, 
// змінюючи їх розмір, положення 
// чи стилі через певний інтервал за допомогою setInterval.

const box = document.querySelector('.box')
const intervalInput = document.getElementById('intervalInput')

let position = 0
let size = 100
let animation

document.getElementById('startBtn').addEventListener('click', () => {

    animation = setInterval(() => {

        position += 10
        size += 5

        box.style.left = position + 'px'
        box.style.width = size + 'px'
        box.style.height = size + 'px'
    
        if (position === 200 && size === 200){
            clearInterval(animation)
        }
    }, intervalInput.value)
    let position = 0
    let size = 100
})



// Завдання 3

// Завдання "Інтерактивна гра": Створіть просту інтерактивну гру, де гравець має натискати на елементи на 
// сторінці протягом певного інтервалу часу, використовуючи setInterval.
//  Реалізуйте лічильник очок та відслідковуйте кількість натисків гравця.

const btnStart = document.querySelector('.btnStart')
const btnRestart = document.querySelector('.btnRestart')
const counter = document.querySelector('.counter')
const imgClick = document.querySelector('.imgClick')
const area = document.querySelector('.area')

const startX = imgClick.offsetLeft;
const startY = imgClick.offsetTop;

function rundomPosition() {
    const areaWidth = area.clientWidth
    const areaHeight = area.clientHeight

    const imgWidth = imgClick.clientWidth
    const imgHeight = imgClick.clientHeight

    const maxX = areaWidth - imgWidth
    const maxY = areaHeight - imgHeight

    const rundomX = Math.random() * maxX
    const rundomY = Math.random() * maxY

    imgClick.style.left = rundomX + 'px'
    imgClick.style.top = rundomY + 'px'
}

let curCount = 0

btnStart.addEventListener('click', () => {
    const rundom = setInterval(() => {
        rundomPosition()
    }, 1000)

    imgClick.addEventListener('click', () => {
        if (imgClick) {
            curCount ++
            counter.textContent = `Рахунок: ${curCount}`
        }
        if (curCount === 10){
            clearInterval(rundom)
        }
    })


})

btnRestart.addEventListener('click', () => {
    curCount = 0
    counter.textContent = `Рахунок: ${curCount}`
    imgClick.style.left = startX + 'px'
    imgClick.style.top = startY + 'px'
})



// Завдання 4

// Завдання "Контроль часу": Створіть програму, яка дозволяє користувачу встановити певний час 
// (у секундах)  за допомогою введення з клавіатури. Потім використовуйте setTimeout або setInterval,
//  щоб після встановленого часу вивести повідомлення.

const setTime = document.querySelector('.setTime')
const startTime = document.querySelector('.startTime')



startTime.addEventListener('click', () => {
    const timer = Number(setTime.value)
    if (setTime.value > 0){
        setTimeout(() => {
            alert(`Час вийшов, пройшло ${timer} сек.`)
        }, timer * 1000)
    }
})
