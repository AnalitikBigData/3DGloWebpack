const priceCalc = (price = 100) => {
    const calc = document.querySelector('.col-lg-6.col-12.flex');
    const calcBlock = document.querySelector('.calc-block')
    let building = calc.querySelector('.calc-type');
    const selectTypeObj = calc.querySelector('select');
    const square = calc.querySelector('.calc-square');
    const count = calc.querySelector('.calc-count');
    const timeOfPerfomance = calc.querySelector('.calc-day');
    const total = document.getElementById('total');
   
    
    const countCalc = () => {
        const calcTypeValue = +building.options[building.selectedIndex].value;
        const calcSquareValue = square.value;

        let totalValue = 0;
        let calcCountValue = 1;
        let calcDayValue = 1;

        if(timeOfPerfomance.value && timeOfPerfomance.value < 5){
            calcDayValue = 2;
        }
        else if(timeOfPerfomance.value && timeOfPerfomance.value < 10){
            calcDayValue = 1.5;
        }

        if(count.value > 1){
            calcCountValue += +count.value / 10;
        }
        if(building.value && square.value){
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue;
        }
        else{
            totalValue = 0
        }

        total.textContent = totalValue;
    }

    calcBlock.addEventListener('input', (e) => {
        if(e.target === building || e.target === square || e.target === count || e.target === timeOfPerfomance){
            countCalc();
        }
    })
    //selectTypeObj.addEventListener('change', addTypeObject);
    square.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^0-9]/g, "");

    });
    count.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^0-9]/g, "");

    });
    timeOfPerfomance.addEventListener('input', (event) =>{
        event.target.value = event.target.value.replace(/[^0-9]/g, "");

    });
    //console.log(addTypeObject());
    //console.log(countedInputValue());
    
}

export default priceCalc;