function createElement (tag, classElement, ...children)
{
    return `<${tag} class = ${classElement}> ${children.join('')} </${tag}>`; 
}

function insertElement (selector, ...children)
{
    const container = document.querySelector(`${selector}`);
    container.innerHTML += `${children.join('')}`;
}
function findElement(selector, numOfElement){
    if (typeof numOfElement === 'undefined')
        return document.querySelector(`${selector}`);
    else {
        var elements = document.querySelectorAll(`${selector}`);
        return elements[numOfElement-1];
    }
}
function createLi (textSpan,textText){
    return `<li> <span>${textSpan}</span> <text>${textText}</text> </li>`; 
} 
function createImg (imgPath,classImg){
    return `<img class =${classImg} src=${imgPath}>`; 
} 

//Main
let section = createElement('ol','section-inf',
    '<h6>Корабль</h6>',
    `${createElement('button', 'button-enabled','Собрать ракету')}`,
    `${createImg('Materials/rocket-1.png','ship-icon')}`,
    `${createLi('Имя','Сокол-345')}`,
    `${createLi('Скорость','8 км/с')}`,
    `${createLi('Экипаж','2')}`
 );

 insertElement('main', `${section}`);

function createAndInsertShipCard (name, speed, team, pathImg){

    let radioChip = createElement('div','radio-button',
        '<input type="radio" class="radio" id="radio"/>',
        '<label for="radio">Выбрать</label>'
    );

    let shipCard = createElement('ol','section-inf',
        `${createImg(`Materials/${pathImg}`,'ship-icon')}`,
        `${createLi('Имя',`${name}`)}`, 
        `${createLi('Скорость',`${speed}`)}`,
        `${createLi('Экипаж',`${team}`)}`,
        `${radioChip}`
    );

    insertElement('main', `${shipCard}`);
}


