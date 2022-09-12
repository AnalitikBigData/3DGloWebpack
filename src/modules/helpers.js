const animationModal = (count, animate, modal) => {
    
    requestAnimationFrame(function animate() {
        count++;
        if(count <= 50){
            modal.childNodes[1].style.left = `${count}%`;
            //transform: translateX(-50px);
            
            modal.childNodes[1].transform = `translateX(-${count})%`
            requestAnimationFrame(animate);
        }
    });
    
}

export { animationModal };