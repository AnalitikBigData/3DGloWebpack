const menu = () => {
    const menuBtn = document.querySelector('.menu');
    const menu = document.querySelector('menu');
    const closeBtn = menu.querySelector('.close-btn');
    const menuItems = menu.querySelectorAll('ul>li>a');
    const inputName = document.querySelector('.form-name');
    const inputEmail = document.querySelector('.form-email');
    const inputTel = document.querySelector('.form-phone');
    const menuClass = document.querySelector('.menu');
    
    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    }

    inputName.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^а-яА-Я]/g, "");
    })

    inputEmail.addEventListener('input',(event) => {
        event.target.value = event.target.value.replace(/[^a-zA-Z0-9@-_.!~*']/g, "");
    })

    inputTel.addEventListener('input',(event) => {
        event.target.value = event.target.value.replace(/[^0-9-()]/g, "");
    })

    menuClass.addEventListener('click', (event) => {
        if(event.target.closest('.menu')){
            handleMenu();
        }
        
    })

    menu.addEventListener('click',(event) => {
        if(event.target.closest('menu>ul') || event.target.closest('menu>a')){
            handleMenu();
        }
    })
    //menuBtn.addEventListener('click', handleMenu);
    //closeBtn.addEventListener('click', handleMenu);
    //menuItems.forEach(menuItem => menuItem.addEventListener('click', handleMenu))
}

export default menu;