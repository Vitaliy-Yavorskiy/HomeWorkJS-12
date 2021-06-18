// Завдання 2
// Необхідно реалізувати наступний функціонал як на відео secret, а саме:
// по замовчуванню блок має певний стиль і наступний текст: “У мене є секрет!”
// при наведенні на блок його стиль змінюєть і текст стає наступним: “Хочеш знати який”
// при натисканні і утриманні клавіші мишки знову по блоку стиль змінюється і текст стає наступним: “А я тобі не скажу”
// при відпусканні клавіші мишки стиль і текст знову стає “Хочеш знати який”
// при відведенні мишки стиль стає як базовий і текст “У мене є секрет!”
// ------------------------------------------------------------------------------------------

const box = document.getElementById('box')

box.addEventListener('mouseover', function (){
    box.style.backgroundColor = 'yellow';
    box.innerHTML = 'Хочеш знати який?';
    box.style.color = 'red';
    box.addEventListener('mouseout', function (){
        box.style.backgroundColor = 'blueviolet';
        box.innerHTML = 'У мене є секрет';
        box.style.color = 'while';
    })
    box.addEventListener('mousedown', function (){
        box.style.backgroundColor = 'green';
        box.innerHTML = 'Я тобі не скажу';
        box.style.color = 'blue';
        box.addEventListener('mouseup', function (){
            box.style.backgroundColor = 'black';
            box.innerHTML = 'Хочеш знати який';
            box.style.color = 'orange';
        })
    })
})