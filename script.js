'use strict'

let title = 'JavaScript Курс';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 100;
let rollback = 10;
let fullPrice = 15000;
let adaptive = true;

// alert('Первый урок');
// console.log('Первый урок');

// console.log(typeof title);
// console.log(typeof fullPrice);
// console.log(typeof adaptive);

// console.log(screens.length);

// console.log('Стоимость верстки экранов '+ screenPrice + ' рублей/долларов/гривен/юани');
// console.log('Стоимость разработки сайта '+ fullPrice + ' рублей/долларов/гривен/юани');

// console.log((screens.toLocaleLowerCase()).split(', '));

// console.log(fullPrice * (rollback/100));

// №3
title = prompt('Как называется ваш проект?');

// №4
screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');

// №5
screenPrice = prompt('Сколько будет стоить данная работа?', '12000');

// №6
adaptive = confirm('Нужен ли адаптив на сайте?');

// №7
let service1, service2, servicePrice1, servicePrice2;

service1 = prompt('Какой дополнительный тип услуги нужен?');
servicePrice1 = +prompt('Сколько это будет стоить?');
service2 = prompt('Какой дополнительный тип услуги нужен?');
servicePrice2 = +prompt('Сколько это будет стоить?');

// №8
fullPrice = screenPrice + servicePrice1 + servicePrice2;

// №9
let servicePercentPrice = Math.ceil(fullPrice - fullPrice * (rollback/100));
console.log(servicePercentPrice);

// №10
if (fullPrice > 30000) {
    alert('Даем скидку в 10%');
} else if (fullPrice > 15000 && fullPrice <= 30000) {
    alert('Даем скидку в 5%');
} else if (fullPrice <= 15000 && fullPrice >= 0) {
    alert('Скидка не предусмотрена');
} else if (fullPrice < 0) {
    alert('Что-то пошло не так');
}