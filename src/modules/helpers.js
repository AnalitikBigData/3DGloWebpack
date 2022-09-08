const animationModal = (count, animate, modal) => {
    console.log(count + 'count')
    console.log(animate + 'animate')
    console.log(modal + 'modal')
    count++;
    animate = requestAnimationFrame(animationModal);
    if(count < 50){
        modal.childNodes[1].style.left = count * 12 + 'px';
    }
    else{
        count = 0;
        cancelAnimationFrame(animate);
    }
}

export { animationModal };