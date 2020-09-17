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

