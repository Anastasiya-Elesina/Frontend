function createElement (tag, classElement, ...children)
{
    return `<${tag} class = ${classElement}> ${children.join('')} </${tag}>`; 
}
function insertElement (classElement, ...children)
{
    const container = document.querySelector(`${classElement}`);
    container.innerHTML = `${children.join('')}`;
}
// const indicator = createElement('div','indicator-off','');
// insertElement('.status-inf',
// '<p><text>Статус</text></p>','<hr>',
// `${indicator} ${createElement('text', 'main','Ракета выбрана')}<br>`,
// `${indicator} ${createElement('text', 'main','Команда выбрана')}<br>`,
// `${indicator} ${createElement('text', 'main','Погода - ок')}<br>`
// );
/*Переключение прозрачности кнопок, работает,но не работает
Кнопки действительно переключаются, но это происходит на старой странице,
до перехода по щелчку, после перехода на др страницу проявляются изначальные
настройки*/
var menu = document.getElementById('menu');

menu.onclick = function(event) {
    let elementsImg = menu.querySelectorAll('img');
    //Сделать все прозрачными
    for (let img of elementsImg) { 
        img.style.opacity = 0.75;
    }
    //Для элемента на который кликнули - в  полный цвет 
    //event.target.style.opacity = 1;
    event.target.className = "active";
  };
