const container = () => {
    const inputName = document.querySelector('.top-form');
    const input = document.querySelector('.mess');
    const email = document.querySelector('.top-form.form-email');
    const tel = document.querySelector('.top-form.form-phone');
    

    inputName.addEventListener('input', (event) => {
        event.target.value = event.target.value.replace(/[^а-яА-Я ]/g, "");
    })
    
    input.addEventListener('input',(event) => {
        event.target.value = event.target.value.replace(/[^а-яА-Я0-9 -!"№%:,.;()']/g, "");
    })

    email.addEventListener('input',(event) => {
        event.target.value = event.target.value.replace(/[^a-zA-Z0-9@-_.!~*']/g, "");
    })

    tel.addEventListener('input',(event) => {
        event.target.value = event.target.value.replace(/[^0-9-()+]/g, "");
    })
}

export default container;