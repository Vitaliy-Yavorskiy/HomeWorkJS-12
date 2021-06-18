// Завдання 3
// Необхідно реалізувати наступний функціонал як на відео images, а саме:
// на сторінці знаходяться три пустих блоки div. 
// при кліку на блок виводить функція prompt() в яку ми вводи url адресу зображення
// це зображення стає фоном для цього конкретного блоку 

const box1 = document.querySelector('#box1');
const box2 = document.querySelector('#box2');
const box3 = document.querySelector('#box3');

let src = null;
box1.addEventListener('click', function () {
    src = prompt('Введіть url картинки');
    box1.style.backgroundImage = `url(${src})`
})

box2.addEventListener('click', function () {
    src = prompt('Введіть url картинки');
    box2.style.backgroundImage = `url(${src})`
})

box3.addEventListener('click', function () {
    src = prompt('Введіть url картинки');
    box3.style.backgroundImage = `url(${src})`
})