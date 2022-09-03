const modal = () => {
    let count = 0;
    let animate;
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');
    console.dir(modal);

    const animationModal = () => {
        count++;
        animate = requestAnimationFrame(animationModal);
        if(count < 135){
            modal.childNodes[1].style.left = count * 7 + 'px';
        }
        else{
            count = 0;
            cancelAnimationFrame(animate);
        }
    }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block';
            if(document.scrollingElement.offsetWidth > 768){
                animationModal();
            }
        })
    })

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    })
    console.dir(document);
}

export default modal