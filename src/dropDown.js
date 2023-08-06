const menuButton = document.querySelector('#menu-button')
function dropDown(title, menuId){

    menuButton.addEventListener('click', () => {
        menuButton.textContent = title.textContent;
        menuId.classList.toggle('visible');
    })
}

export {dropDown}