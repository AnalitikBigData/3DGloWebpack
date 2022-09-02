const dayOfWeek = (day) => {
    if(day === 0){
        return 'Воскресенье'
    }
    else if(day === 1){
        return 'Понедельник'
    }
    else if(day === 2){
        return 'Вторник'
    }
    else if(day === 3){
        return 'Среда'
    }
    else if(day === 4){
        return 'Четверг'
    }
    else if(day === 5){
        return 'Пятница'
    }
    else if(day === 6){
        return 'Суббота'
    }
}
const happyNewYear = () => {
    let year = new Date();
    let nextYear = new Date(year.getFullYear() + 1, 0, 1);
    let dif = nextYear.getTime() - year.getTime();
    let count = Math.floor(dif / 1000 / 60 / 60 / 24);
    return count;
    
}
const addElementHTML = () => {
    let div = document.createElement('div');
    div.className = "write-data";
    document.body.appendChild(div);
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let p3 = document.createElement('p');
    let p4 = document.createElement('p');
    document.body.appendChild(p1);
    document.body.appendChild(p2);
    document.body.appendChild(p3);
    document.body.appendChild(p4);
    const addDate = () => {
        let now = new Date();
        if(now.getHours() >= 0 && now.getHours() < 6){
            p1.textContent = 'Доброй ночи';
            p2.textContent = 'Сегодня: ' + dayOfWeek(now.getDay());
            p3.textContent = 'Текущее время: ' + now.toLocaleTimeString('en');
            p4.textContent = 'До нового года осталось ' + happyNewYear() +' дней ';
            
        }
        else if(now.getHours() >=6 && now.getHours() < 12){
            p1.textContent = 'Доброе утро';
            p2.textContent = 'Сегодня: ' + dayOfWeek(now.getDay());
            p3.textContent = 'Текущее время: ' + now.toLocaleTimeString('en');
            p4.textContent = 'До нового года осталось ' + happyNewYear() +' дней ';
            
        }
        else if(now.getHours() >= 12 && now.getHours() < 18){
            p1.textContent = 'Добрый день';
            p2.textContent = 'Сегодня: ' + dayOfWeek(now.getDay());
            p3.textContent = 'Текущее время: ' + now.toLocaleTimeString('en');
            p4.textContent = 'До нового года осталось ' + happyNewYear() +' дней ';
        }
        else if(now.getHours() >= 18 && now.getHours() <= 23){
            p1.textContent = 'Добрый вечер';
            p2.textContent = 'Сегодня: ' + dayOfWeek(now.getDay());
            p3.textContent = 'Текущее время: ' + now.toLocaleTimeString('en');
            p4.textContent = 'До нового года осталось ' + happyNewYear() +' дней ';
            
        }
    }
    addDate();    
}

addElementHTML();
console.log('!!!');

