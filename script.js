let title = 'JavaScript Курс';
let screens = 'Простые, Сложные, Интерактивные';
let screenPrice = 100;
let rollback = 10;
let fullPrice = 15000;
let adaptive = true;

// alert('Первый урок');
// console.log('Первый урок');

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens.length);

console.log('Стоимость верстки экранов '+ screenPrice + ' рублей/долларов/гривен/юани');
console.log('Стоимость разработки сайта '+ fullPrice + ' рублей/долларов/гривен/юани');

console.log((screens.toLocaleLowerCase()).split(', '));

console.log(fullPrice * (rollback/100));