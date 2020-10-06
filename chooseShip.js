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
function changeWHLTpx(element, width, height, left, top){
    element.style.position = 'absolute';
    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
    element.style.left = `${left}px`;
    element.style.top = `${top}px`;
} 
function changeMarginTLBR(element, top, left , bottom, right){
    element.style.margin = `${top}px ${right}px ${bottom}px ${left}px`;
} 
function createStrSection (textSpan,textText){
    return `<p> <span>${textSpan}</span> <text>${textText}</text> </p>`; 
} 
function createImg (imgPath,classImg){
    return `<img class =${classImg} src=${imgPath}>`; 
} 

//Main
let list = createElement('div','list',
    `${createStrSection('Имя','Сокол-345')}`,
    `${createStrSection('Скорость','8 км/с')}`,
    `${createStrSection('Экипаж','2')}`
);
let section = createElement('section','section-inf',
    '<p><span>Корабль</span></p>',
    `${createElement('button', 'go-button-enabled','Собрать ракету')}`,
    '<hr>',
    `${createImg('Materials/rocket-1.png','ship-icon')}`,
    `${list}`
 );

 insertElement('main', `${section}`);

//Позиционирование элементов
 changeWHLTpx(findElement('h1'), 700, 56, 182, 65);
 changeWHLTpx(findElement('.section-inf'), 500, 200, 180, 130);
 changeWHLTpx(findElement('.list'), 206, 94, 130, 50 );
 changeWHLTpx(findElement('button'), 150, 30, 324, 13);
 changeWHLTpx(findElement('.ship-icon'), 89, 89, 29, 75);

//Настройка текста в 1-ой секции
 let elements = document.querySelectorAll('.section-inf .list span');
 for (let element of elements) { 
    element.style.width = '81px';
    element.style.color = '#0A5499';
    element.style.marginBottom = '14px';
}
function createAndInsertShipCard (name, speed, team, pathImg, numCard, width, height, left, top){

    let list = createElement('div','list',
        `${createStrSection('Имя',`${name}`)}`, 
        '<hr>',
        `${createStrSection('Скорость',`${speed}`)}`,
        '<hr>',
        `${createStrSection('Экипаж',`${team}`)}`
    );  

    let radioChip = createElement('div','radio-button',
        '<input type="radio" class="radio" id="radio"/>',
        '<label for="radio">Выбрать</label>'
    );

    let shipCard = createElement('section','section-inf',
        `${createImg(`Materials/${pathImg}`,'ship-icon')}`,
        `${list}`,
        `${radioChip}`
    );

    insertElement('main', `${shipCard}`);

    changeWHLTpx( findElement('.section-inf',numCard), width, height, left, top);
    changeWHLTpx( findElement('.section-inf .list',numCard), 206, 94, 136, 26, numCard );
    changeMarginTLBR(findElement('.section-inf .list',numCard), 0,0,0,0);
    changeWHLTpx( findElement('.section-inf .ship-icon',numCard), 81, 81, 27, 35, numCard);
    changeWHLTpx( findElement('.radio-button',numCard-1), 355, 37, -1, 150);

    let element = findElement('.section-inf',numCard);
    element.style.border = '1px solid #000000';

    let elements = document.querySelectorAll('.section-inf .list span');
    for (let element of elements) { 
       element.style.width = '81px';
       element.style.color = '#0A5499';
   }
}
let numCard = 2;
createAndInsertShipCard('Ургсок-123','6 км/с','4','rocket-2.png', numCard++, 353, 186, 180, 368);
createAndInsertShipCard('Клинк-123','5 км/с','3','rocket-3.png', numCard++, 353, 186, 180, 568);
createAndInsertShipCard('Сокол-345','8 км/с','2','rocket-1.png', numCard++, 353, 186, 180, 768);


