
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
