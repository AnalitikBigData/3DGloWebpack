import { animationModal } from "./helpers";
const modal = () => {
    let count = 0;
    let animate;
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
    let inputPhone = modal.querySelectorAll('.form-phone');
    let inputEmail = modal.querySelectorAll('.form-email');
    let inputName = modal.querySelectorAll('.form-name');
    
    inputName.forEach((item) => {
        item.addEventListener('input', (event) => {
            event.target.value = event.target.value.replace(/[^а-яА-Я]/g, "");
        })
    })

    inputPhone.forEach((item) => {
        item.addEventListener('input', (event) => {
            event.target.value = event.target.value.replace(/[^0-9-()]/g, "");
        })
    })

    inputEmail.forEach((item) => {
        item.addEventListener('input', (event) => {
            event.target.value = event.target.value.replace(/[^a-zA-Z0-9@-_.!~*']/g, "");
        })
    })

    /*const animationModal = () => {
        count++;
        animate = requestAnimationFrame(animationModal);
        if(count < 50){
            modal.childNodes[1].style.left = count * 12 + 'px';
        }
        else{
            count = 0;
            cancelAnimationFrame(animate);
        }
    }*/

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            if(document.scrollingElement.offsetWidth > 768){
                animationModal(count, animate, modal);
            }
        })
    })

    modal.addEventListener('click', (event) => {
        if(!event.target.closest('.popup-content') || event.target.classList.contains('popup-close')){
            modal.style.display = 'none';
        }
    })
}

export default modal