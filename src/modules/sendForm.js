const sendForm = ({ formId1, someElem1 = [] }, {formId2, someElem2 = []}, {formId3, someElem3 = []}) => {
    const form1 = document.getElementById(formId1);
    const form2 = document.getElementById(formId2);
    const form3 = document.getElementById(formId3);
    
    const statusBlock = document.createElement("div");
    const loadText = 'Загрузка...';
    const errorText = 'Ошибка...';
    const successText = 'Спасибо! Наш менеджер с вами свяжется!';

    const validate1 = (list) => {
        let success = true;
        list.forEach((input, index) => {
            success = (!/[^а-яА-Я ]/.test(list[0].value)) && (!/[^a-zA-Z0-9@-_.!~*']/.test(list[1].value)) && (!/[^0-9-()+]/.test(list[2].value));
        })
        return success;
    }

    const validate2 = (list) => {
        let success = true;
        list.forEach((input, index) => {
            success = (!/[^а-яА-Я ]/.test(list[0].value)) && (!/[^a-zA-Z0-9@-_.!~*']/.test(list[1].value)) && (!/[^0-9-()+]/.test(list[2].value)) && (!/[^а-яА-Я0-9 -!"№%:,.;()']/.test(list[3].value));
        })
        return success;
    }

    const validate3 = (list) => {
        let success = true;
        list.forEach((input, index) => {
            success = (!/[^а-яА-Я ]/.test(list[0].value)) && (!/[^a-zA-Z0-9@-_.!~*']/.test(list[2].value)) && (!/[^0-9-()+]/.test(list[1].value));
        })
        return success;
    }

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body : JSON.stringify(data),
            headers: { 
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const submitForm1 = () => {
        const formElement1 = form1.querySelectorAll('input')
        const formData1 = new FormData(form1);
        const formBody1 = {}

        statusBlock.textContent = loadText;
        form1.append(statusBlock)
        
        formData1.forEach((val, key) => {
            formBody1[key] = val;
        })

        someElem1.forEach(elem => {
            const element = document.getElementById(elem.id)
            if(elem.type === 'block'){
                formBody1[elem.id] = element.textContent;
            } else if (elem.type === 'input'){
                formBody1[elem.id] = element.value;
            }
        })
        console.log(validate1(formElement1))
        if(validate1(formElement1)){
            sendData(formBody1)
            .then(data =>{
                statusBlock.textContent = successText;
                formElement1.forEach (input => {
                    input.value = '';
                })
            })
        }
        else {
            alert("Data isn't validate")
        }
    }

    const submitForm2 = () => {
        const formElement2 = form2.querySelectorAll('input');
        const formData2 = new FormData(form2);
        const formBody2 = {}

        statusBlock.textContent = loadText;

        formData2.forEach((val, key) => {
            formBody2[key] = val;
        })

        someElem2.forEach(elem => {
            const element = document.getElementById(elem.id)
            if(elem.type === 'block'){
                formBody2[elem.id] = element.textContent;
            } else if (elem.type === 'input'){
                formBody2[elem.id] = element.value;
            }
        })

        console.log(validate2(formElement2))
        if(validate2(formElement2)){
            sendData(formBody2)
            .then(data =>{
                formElement2.forEach(input =>{
                    input.value = '';
                })
            })
            .catch(err => {
                statusBlock.textContent = errorText;
            })
            
        }
        else {
            alert("Data isn't validate")
        }
    }

    const submitForm3 = () => {
        const formElement3 = form3.querySelectorAll('input');
        const formData3 = new FormData(form3);
        const formBody3 = {}

        statusBlock.textContent = loadText;
        form3.append(statusBlock)
        
        formData3.forEach((val, key) => {
            formBody3[key] = val;
        })

        someElem3.forEach(elem => {
            const element = document.getElementById(elem.id)
            if(elem.type === 'block'){
                formBody3[elem.id] = element.textContent;
            } else if (elem.type === 'input'){
                formBody3[elem.id] = element.value;
            }
        })

        console.log(validate3(formElement3))
        if(validate3(formElement3)){
            sendData(formBody3)
            .then(data =>{
                statusBlock.textContent = successText;
                formElement3.forEach (input => {
                    input.value = '';
                })
            })
        }
        else {
            alert("Data isn't validate")
        }
    }

    try{
        if (!form1 || !form2 || !form3){
            throw new Error('верните форму на место, пожалуйста');
        }
        form1.addEventListener('submit', (event) => {
            event.preventDefault();
            submitForm1();
        })
        form2.addEventListener('submit', (event) =>{
            event.preventDefault();
            submitForm2();
        })
        form3.addEventListener('submit', (event) =>{
            event.preventDefault();
            submitForm3();
        })
    } catch (err) {
        console.log(err.message)
    }
}

export default sendForm