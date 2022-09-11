//let user = fetch('https://jsonplaceholder.typicode.com/posts/1');
let user;

const getData = () => {
    fetch('../lesson26/db.json')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            user = data;
            console.log(user)
        })
        .catch(err => {
            console.log(err);
        })
}


const sendData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(user),
        headers : {
            "Content-Type":"application/json; charset=utf-8"
        }
    })
        .then(response => response.json())
        .then(data => {
            user = data;
            console.log(user)
        }).catch(err => console.log(err))

}

setTimeout(getData, 0)
setTimeout(sendData, 1000);