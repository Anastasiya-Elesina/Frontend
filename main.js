
let menu = document.getElementById('menu');
menu.addEventListener("click", function(event){
    // Обработка кнопок меню
    let elementsImg = menu.querySelectorAll('img');
    for (let img of elementsImg) { 
        if (img.classList.contains("active")){
            img.classList.remove("active");
            img.classList.add("inactive");
        }
    }
    if (event.target.classList.contains("inactive")){
        event.target.classList.remove("inactive");
        event.target.classList.add("active");
    }
    // Обработка скрытия/появления страниц
});