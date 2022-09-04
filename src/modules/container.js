const container = () => {
    const input = document.querySelector('.mess');
    const email = document.querySelector('.top-form.form-email');
    const tel = document.querySelector('.top-form.form-phone');
    
    input.addEventListener('input',(event) => {
        event.target.value = event.target.value.replace(/[^а-яА-Я -]/g, "");
    })

    email.addEventListener('input',(event) => {
        event.target.value = event.target.value.replace(/[^a-zA-Z@-_.!~*']/g, "");
    })

    tel.addEventListener('input',(event) => {
        event.target.value = event.target.value.replace(/[^0-9-()]/g, "");
    })
}

export default container;