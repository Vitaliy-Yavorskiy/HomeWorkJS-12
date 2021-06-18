// Завдання 4
// Необхідно реалізувати наступний функціонал як на відео text, а саме:
// на сторінці знаходиться список ol з 6ма кольорами, написаними англійською мовою.
// потрібно щоб в при кліку на поточний пункт замалювався тим кольором, який в ньому записаний.
// постарайтесь зробити даний функціонал використовуючи тільки одну функцію

const ol = document.getElementById('ol');
function color(selector, color) {
    selector.addEventListener('click',function(){
        selector.style.color = color;
    });
};
color(ol.children[0],'orange')
color(ol.children[1],'green')
color(ol.children[2],'yellow')
color(ol.children[3],'blue')
color(ol.children[4],'red')
color(ol.children[5],'violet')
