// Завдання 1

// Завдання "Таймер інтервалу": Створіть програму, яка виводить повідомлення кожну секунду 
// за допомогою setInterval. 
// Після 5 повідомлень зупиніть виконання інтервалу за допомогою clearInterval.

// let count = 0

// const mess = setInterval(() => {
//     console.log('Message:' + (count + 1))
//     count ++

//     if (count === 5){
//         clearInterval(mess)
//     }
// }, 1000)



// Завдання 2

// Завдання "Анімація елементів": Створіть кілька елементів на сторінці і реалізуйте просту анімацію, 
// змінюючи їх розмір, положення 
// чи стилі через певний інтервал за допомогою setInterval.


const box = document.querySelector('.box')

let position = 0
let size = 0

let container = setInterval(() => {
    position +=5
    size += 5
    box.style.left = position + 'px'
    box.style.width = size + 'px'
    box.style.height = size + 'px'

    if (position >= 300 && size >= 50){
        clearInterval(container)
    }
}, 50)