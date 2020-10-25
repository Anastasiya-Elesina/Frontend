let menu = document.getElementById('menu');
menu.addEventListener("click", function(event){
    // Обработка кнопок меню
    let activeImg = menu.querySelectorAll('img.active');
    for (let img of activeImg) { 
            img.classList.remove("active");
            img.classList.add("inactive");
    }

    if (event.target.classList.contains("inactive")){
        event.target.classList.remove("inactive");
        event.target.classList.add("active");
    }

    // Обработка скрытия/появления страниц
    let enableSection = document.querySelectorAll('section.enable');
    //Скрываем все активные секции
    for (let section of enableSection) { 
            section.classList.remove("enable");
            section.classList.add("disable");
    }
    //Активируем страницу
    let classSection = `${event.target.id}-page`;
    let activatedSection = document.querySelector(`.${classSection}`);
    activatedSection.classList.remove("disable");
    activatedSection.classList.add("enable");
});




function findElement(selector, numOfElement=1){
    if (numOfElement == 1)
        return document.querySelector(`${selector}`);
    return document.querySelectorAll(`${selector}`)[numOfElement-1];
}

let name, speed, teamNumber, imgPath;
let chosenShip = findElement('.chooseShip-page .section-inf');
let curRocket;
updateDataCard(1);//обновляем переменные чтобы они содержали актуальную информацию

let buttonCreateShip = document.getElementById('button-create-rocket');
buttonCreateShip.addEventListener("click", function(event){
    curRocket = new Rocket (name, speed, teamNumber, imgPath);
});

function updateDataCard(num){
    //Получаем номер активированной карточки с ракетой и обновляем данные в глобальных переменных
    let shipCard = findElement('.shipCard', num);
    name = shipCard.querySelector('ol li:nth-of-type(1) span:last-child').textContent;
    speed = shipCard.querySelector('ol li:nth-of-type(2) span:last-child').textContent;
    teamNumber = shipCard.querySelector('ol li:nth-of-type(3) span:last-child').textContent;
    // imgSrc = shipCard.querySelector('img').src; //Путь указан полностью, т.е. не будет работать на др компьтерах 
    imgPath = `Materials/rocket-${num}.png`;
}
function updateViewCard(){
    //Меняем информацию в самом верхнем блоке в соответствии с номером карточки корабля
    chosenShip.querySelector('ol li:nth-of-type(1) span:last-child').textContent = name;;
    chosenShip.querySelector('ol li:nth-of-type(2) span:last-child').textContent = speed;
    chosenShip.querySelector('ol li:nth-of-type(3) span:last-child').textContent = teamNumber;
    chosenShip.querySelector('img').src = imgPath;
}
//Обработка событий радио-кнопок: ловим события с помощью jQuery
$('input[type="radio"]').on('change', function(event) {
    updateDataCard(Number(event.target.value));
    updateViewCard();  
});
class Rocket{
    teamNumber
    speed
    name
    iconSrc

    constructor(name, speed, teamNumber, iconSrc){
        this.name = name;
        this.speed = speed;
        this.teamNumber = teamNumber;
        this.iconSrc = iconSrc;
    }
    launch(){
        
    }
}