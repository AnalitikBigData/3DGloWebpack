const timer = (deadline) => {
    const timerHours = document.getElementById('timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;

        let hours = Math.floor(timeRemaining / 60 / 60);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);
        

        return { timeRemaining ,hours, minutes, seconds}
    }
    //countTimer('1 october 2022');
    //setInterval(countTimer, 1000, '1 april 2022');
    
    let idTimer;
    
    const updateClock = () => {
        let getTime = getTimeRemaining();
        if(getTime.timeRemaining > 0){
            if(getTime.hours <= 9){
                timerHours.textContent = '0' + getTime.hours;
            }
            else {
                timerHours.textContent = getTime.hours;
            }
            if(getTime.minutes <= 9){
                timerMinutes.textContent = '0' + getTime.minutes;
            }
            else {
                timerMinutes.textContent = getTime.minutes;
            }
            if(getTime.seconds <= 9){
                timerSeconds.textContent = '0' + getTime.seconds;
            }
            else {
                timerSeconds.textContent = getTime.seconds;
            }
        }
        else{
            const actionText = document.querySelector('.timer-action');
            actionText.textContent = '\n\t\t\tАкция закончилась\n\t\t' + deadline;
        }
        
        
    }
    updateClock();
    idTimer = setInterval(updateClock, 1000);
}

export default timer;