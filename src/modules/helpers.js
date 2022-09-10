const animationModal = (count, animate, modal) => {
    console.log("нач - "+count);
    //console.log(animate);
    //console.log(modal);
    count++;
    animate = requestAnimationFrame(animationModal);
    console.log('++ '+count)
    console.log(animate)
    if(count < 50){
        //console.log(count);
        modal.childNodes[1].style.left = count * 12 + 'px';
        console.log('if' + count)
    }
    else{
        console.log('else '+count);
        count = 0;
        cancelAnimationFrame(animate);
    }
}

export { animationModal };