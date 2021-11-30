'use strict'


let rollback = 10;
let fullPrice = 15000;
let service1, service2, servicePrice1, servicePrice2;
let servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback/100));

// let title = prompt('Как называется ваш проект?');
// let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice = prompt('Сколько будет стоить данная работа?', '12000');
// let adaptive = confirm('Нужен ли адаптив на сайте?');

// service1 = prompt('Какой дополнительный тип услуги нужен?');
servicePrice1 = +prompt('Сколько это будет стоить?');
// service2 = prompt('Какой дополнительный тип услуги нужен?');
servicePrice2 = +prompt('Сколько это будет стоить?');

// fullPrice = screenPrice + servicePrice1 + servicePrice2;


// const showTypeOf = function(variable) {
//     console.log(variable, typeof variable)
// }

// const getRollbackMessage = function(price) {
//     if (price > 30000) {
//         return 'Даем скидку в 10%';
//     } else if (price > 15000 && price <= 30000) {
//         return 'Даем скидку в 5%';
//     } else if (price <= 15000 && price >= 0) {
//         return 'Скидка не предусмотрена';
//     } else if (price < 0) {
//         return 'Что-то пошло не так';
//     }
// }

const allServicePrices = function getAllServicePrices() {
    return servicePrice1 + servicePrice2;
}

fullPrice = function getFullPrice() {
    return screenPrice + allServicePrices();
}

console.log(allServicePrices());
console.log(fullPrice());

// showTypeOf(title);
// showTypeOf(fullPrice);
// showTypeOf(adaptive);


// alert('Первый урок');
// console.log('Первый урок');


// console.log(screens.length);

// console.log('Стоимость верстки экранов '+ screenPrice + ' рублей/долларов/гривен/юани');
// console.log('Стоимость разработки сайта '+ fullPrice + ' рублей/долларов/гривен/юани');

// console.log((screens.toLocaleLowerCase()).split(', '));

// console.log(fullPrice * (rollback/100));

// console.log(servicePercentPrice);
// console.log(getRollbackMessage(fullPrice));