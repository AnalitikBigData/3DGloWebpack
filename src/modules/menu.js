const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');
    const inputEmail = document.querySelector('.form-email');
    const inputTel = document.querySelector('.form-phone');
    

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    }

    inputEmail.addEventListener('input',(event) => {
        event.target.value = event.target.value.replace(/[^a-zA-Z@-_.!~*']/g, "");
    })

    inputTel.addEventListener('input',(event) => {
        event.target.value = event.target.value.replace(/[^0-9-()]/g, "");
    })

    menuBtn.addEventListener('click', handleMenu);
    closeBtn.addEventListener('click', handleMenu);
    menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu))
}

export default menu;