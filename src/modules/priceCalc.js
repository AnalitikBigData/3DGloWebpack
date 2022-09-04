const priceCalc = () => {
    const calc = document.querySelector('.col-lg-6.col-12.flex');
    let building = calc.querySelector('.calc-type');
    const typeObject = [];
    let valueTypeObject = 0;
    let inputValue = [];
    const selectTypeObj = calc.querySelector('select');
    const square = calc.querySelector('.calc-square');
    const count = calc.querySelector('.calc-count');
    const timeOfPerfomance = calc.querySelector('.calc-day');
    
    const addTypeObject = () => {
        building = calc.querySelectorAll('.calc-block');
        building.forEach((typeItem) => {
            const select = typeItem.querySelector('select');
            const selectLabel = select.options[select.selectedIndex].label;

            typeObject.push({
                option : selectLabel,
                value : +select.value,
            })
        })
        typeObject.splice(0, typeObject.length - 1);
        return typeObject;
        
    }
    const countedInputValue = () => {
        if(!/[^\d]/g.test(square.value) && square.value != ''){
            if(!/[^\d]/g.test(count.value) && count.value != ''){
                if(!/[^\d]/g.test(timeOfPerfomance.value) && timeOfPerfomance.value != ''){
                    console.log('====');
                    inputValue.push({
                        square : +square.value,
                        count : +count.value,
                        day : +timeOfPerfomance.value
                    })
                }
            }
            
        }
        return inputValue;
    }

    selectTypeObj.addEventListener('change', addTypeObject);
    square.addEventListener('change', (event) => {
        event.target.value = event.target.value.replace(/\d+/, "");
        countedInputValue();
    });
    count.addEventListener('change', countedInputValue);
    timeOfPerfomance.addEventListener('change', countedInputValue);
    console.log(addTypeObject());
    console.log(countedInputValue());
    
}

export default priceCalc;