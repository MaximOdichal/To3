<h1 align="center"> МИНИСТЕРСТВО НАУКИ И ВЫСШЕГО ОБРАЗОВАНИЯ РОССИЙСКОЙ ФЕДЕРАЦИИ ФЕДЕРАЛЬНОЕ ГОСУДАРСТВЕННОЕ БЮДЖЕТНОЕ ОБРАЗОВАТЕЛЬНОЕ УЧРЕЖДЕНИЕ ВЫСШЕГО ОБРАЗОВАНИЯ «САХАЛИНСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ»</h1>

<p align="center">Лабораторная работа №1 "JS" </p>

<p align="right">Выполнил: Алексеев Максим Максимович</p>
<p align="right">Проверил: Соболев Е. И.</p>

<p align="center">г. Южно-Сахалинск <br> 2023 год</p>

<h2 align="center">Введение</h2>
<p align="justify">Лабораторная работа по созданию скриптов на языке JavaScript.</p>

<h2>Цели и задачи</h2>
Сделать много чего.
<h2>Решение задач</h2>


```javascript
  
function lab1(){
    alert( null || 2 || undefined ); //2
}

function lab2(){
    alert( alert(1) || 2 || alert(3) ); //1, 2
}

function lab3(){
    alert( 1 && null && 2 ); //null
}

function lab4(){
    alert( alert(1) && alert(2) ); //1, undefined
}

function lab5(){
    alert( null || 2 && 3 || 4 ); //3
}

function lab6(){
    age = prompt("Введите возраст", 66);
    if (age >= 14 || age <= 90){
        alert(true);
    } else {
        alert(false);
    }
}

function lab7(){
    age = prompt("Введите возраст", 66);
    if (!(age >= 14 || age <= 90)){
        alert(true);
    } else {
        alert(false);
    }
    /* 
    if (age < 14 || age > 90) {
        alert(true);
    } else {
        alert(false);
    }
     */
}

function lab8(){
    if (-1 || 0) alert( 'first' ); //first
    if (-1 && 0) alert( 'second' ); 
    if (null || -1 && 1) alert( 'third' ); //third

}

function lab9(){
    let response = prompt("Кто там?");
    if (response == "Админ")
    {
        let password = prompt("Пароль?");

        if (password == "Я Главный"){
            alert("Здравствуйте!");
        } else if (password == null) {
            alert("Отменено");
        } else {
            alert("Неверный пароль.")
        }
    } 
    else if (response == null){
        alert("Я вас не знаю.");
    } else {
        alert("Отменено");
    }
}

function lab10(){
    let i = 3; //1
    while (i) {
        alert( i-- );
    }
}

function lab11(){
    alert("Префиксный вариант ++i");

    let i = 0;
    while (++i < 5) alert( i ); //4

    alert("Постфиксный вариант i++");

    i = 0;
    while (i++ < 5) alert( i ); //5

}

function lab12(){
    alert("Постфиксная форма:");
    for (let i = 0; i < 5; i++) alert( i ); //0..4
    
    alert("Префиксная форма:");
    for (let i = 0; i < 5; ++i) alert( i ); //0..4
    
}

function lab13(){
    for(let i = 2; i <= 10; i+=2) alert(i);
}

function lab14(){
    // for (let i = 0; i < 3; i++) {
    //     alert( `number ${i}!` );
    //   }
    let i = 0;
    while (i < 3){
        alert(`number ${i}!`);
        i++;
    }
    
}

function lab15(){
    let resp = 0;
    while(resp <= 100 && resp != null)
    {
        resp = prompt("Введите число");
    }
}

function lab16(){
    let n = prompt("Введите n");
    let array = [2];
    for(let i = 3; i <= n; i++){
        for(let j = 0; j < array.length; j++){
            if(i % array[j] == 0){
                break;
            }
            if(j == array.length - 1)
            {
                array.push(i)
            }
        }
    }
    alert(array);
}

function lab17(){
    let browser = prompt("Какой у вас браузер?");
    if (browser == 'Edge')
    {
        alert("You've got the Edge!");
    } else if (browser == "Chrome" || browser == 'Firefox'
               || browser =='Safari' || browser == 'Opera'){
        alert('Okay we support these browsers too');
    } else {
        alert('We hope that this page looks ok!');
    }
}

function lab18(){
    switch(parseInt(prompt("Введите число между 0 и 3"))){
        case 0:
            alert('Вы ввели число 0');
            break;
        case 1:
            alert('Вы ввели число 1');
            break;
        case 2:
        case 3:
            alert('Вы ввели число 2, а может и 3');
            break;
    }
}

function lab19(){
    alert("Вариант 1");
    checkAge1(parseInt(prompt("Введите возраст:")));
    alert("Вариант 2");
    checkAge2(parseInt(prompt("Введите свой возраст:")));
}

function checkAge1(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('Родители разрешили?');
    }
 }

function checkAge2(age) {
    if (age > 18) {
        return true;
    }
    return confirm('Родители разрешили?');
}
  

function lab20(){
    alert("Вариант 1 с оператором ?");
    checkAge3(parseInt(prompt("Введите возраст:")));
    alert("Вариант 2 с оператором ||");
    checkAge4(parseInt(prompt("Введите свой возраст:")));
}

function checkAge3(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
}

function checkAge4(age) {
    return age > 18 || confirm('Родители разрешили?');
}
  

function lab21(){
    let a = parseInt(prompt("Введите a"));
    let b = parseInt(prompt("Введите b"));
    alert(`Минимальное число = ${min(a,b)}`);
}

function min(a, b){
    if (a > b) return b;
    else if (a < b) return a;
    else return a;
}

function lab22(){
    let x = parseInt(document.getElementById('x').value);
    let n = parseInt(document.getElementById('n').value);
    alert(`Число ${x} в степени ${n} = ${pow(x,n)}`);
}

function pow(x, n){
    let sx = x;
    for(let i = 1; i < n; i++)
        x*=x;
    return x/sx;
}
```

<h2>Вывод</h2>
Я научился скрипты JS.
