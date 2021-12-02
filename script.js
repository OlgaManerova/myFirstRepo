'use strict'

let allServicePrices;
let title;
let screens;
let screenPrice;
let adaptive;
let service1, service2, servicePrice1, servicePrice2;

let rollback = 10;
let fullPrice = 15000;
let servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback/100));


title = ' КаЛьКулятор Верстки';
fullPrice = screenPrice + servicePrice1 + servicePrice2;


const showTypeOf = function(variable) {
    console.log(variable, typeof variable)
}

const getRollbackMessage = function(price) {
    if (price > 30000) {
        return 'Даем скидку в 10%';
    } else if (price > 15000 && price <= 30000) {
        return 'Даем скидку в 5%';
    } else if (price <= 15000 && price >= 0) {
        return 'Скидка не предусмотрена';
    } else if (price < 0) {
        return 'Что-то пошло не так';
    }
}

const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
}
   
const asking = function () {
    title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
    screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');

    do {
        screenPrice = prompt('Сколько будет стоить данная работа?');

        if (screenPrice === null) {
            return;
        }

        screenPrice = screenPrice.trim();

    } while (!isNumber(screenPrice))

    adaptive = confirm('Нужен ли адаптив на сайте?');
}


const getAllServicePrices = function () {
    let sum = 0;
    let num;

    for (let i=0; i<2; i++) {
        if (i==0) {
            service1 = prompt('Какой дополнительный тип услуги нужен?');
        } else if (i==1) {
            service2 = prompt('Какой дополнительный тип услуги нужен?');
        }

        do {
            num = prompt('Сколько это будет стоить?');

            if (num === null) {
                return;
            }

            num = num.trim();

        } while (!isNumber(num))

        sum += +num;
    }

    return sum;
}


function getFullPrice() {
    return screenPrice + allServicePrices;
}


function getServicePercentPrices() {
    return Math.ceil(fullPrice - fullPrice * (rollback/100));
}

function getTitle(str) {
    let arr = str.split('');
    let gap = '';
    for (let i=0; i<=arr.length; i++) {
        if (arr[i] == ' ') {
            gap = gap + arr[i];
        } else {
            return gap + arr[i].toLocaleUpperCase() + str.toLocaleLowerCase().slice(i+1);
        }
    }
}

asking();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice();

showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);


console.log(allServicePrices);
// console.log(fullPrice);

// console.log(screens.split(', '));


// console.log('Стоимость верстки экранов '+ screenPrice + ' рублей/долларов/гривен/юани');
// console.log('Стоимость разработки сайта '+ fullPrice + ' рублей/долларов/гривен/юани');


// console.log(getRollbackMessage(fullPrice));
// console.log(getServicePercentPrices);

// console.log(getTitle(title));