// Завдання 1
// Необхідно реалізувати наступний функціонал як на відео color, а саме:
// при першому наведенні мишки на блок колір фону має ставати червоний
// при відведенні мишки блок має ставати знову фіолетовий
// при другому наведенні – блок стає жовтим
// при третьому – зеленим
// при наступному наведенні все починається спочатку: червоний, жовтий, зелений
// так має відбуватися безкінечно по колу
// ------------------------------------------------------------------------------------------


const block = document.querySelector('.block')
let count = 0;

block.addEventListener('mouseover',function (){
    count++
    block.style.backgroundColor ='blueviolet'; 
    if(count == 1){
        block.style.backgroundColor = 'green';
    }else if(count == 2){
        block.style.backgroundColor = 'yellow';
    }else if(count == 3){
        block.style.backgroundColor = 'red';
    }else if (count == 4){
        block.style.backgroundColor = 'blueviolet';
    }
})

// block.addEventListener('mouseover',function (){
//     block.classList.add('color1');
// })
// block.addEventListener('mouseout', function () {
//     block.classList.remove('color1')
// })



