'use strict'


const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    allServicePrices: 0,
    fullPrice: 15000,
    servicePercentPrice: 0,
    service1: '',
    service2: '',
    servicePrice1: 0,
    servicePrice2: 0,
    asking: function () {
        appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки');
        appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
    
        do {
            appData.screenPrice = prompt('Сколько будет стоить данная работа?');
    
            if (appData.screenPrice === null) {
                return;
            }
    
            appData.screenPrice = appData.screenPrice.trim();
    
        } while (!appData.isNumber(appData.screenPrice))
    
        appData.adaptive = confirm('Нужен ли адаптив на сайте?');
    },

    showTypeOf:  function(variable) {
        console.log(variable, typeof variable)
    },

    getRollbackMessage: function(price) {
        if (price > 30000) {
            return 'Даем скидку в 10%';
        } else if (price > 15000 && price <= 30000) {
            return 'Даем скидку в 5%';
        } else if (price <= 15000 && price >= 0) {
            return 'Скидка не предусмотрена';
        } else if (price < 0) {
            return 'Что-то пошло не так';
        }
    },

    isNumber: function(num) {
        return !isNaN(parseFloat(num)) && isFinite(num);
    },

    getAllServicePrices: function () {
        let sum = 0;
        let num;
    
        for (let i=0; i<2; i++) {
            if (i==0) {
                appData.service1 = prompt('Какой дополнительный тип услуги нужен?');
            } else if (i==1) {
                appData.service2 = prompt('Какой дополнительный тип услуги нужен?');
            }
    
            do {
                num = prompt('Сколько это будет стоить?');
    
                if (num === null) {
                    return;
                }
    
                num = num.trim();
    
            } while (!appData.isNumber(num))
    
            sum += +num;
        }
    
        return sum;
    },

    getFullPrice: function() {
        return appData.screenPrice + appData.allServicePrices;
    },

    getServicePercentPrices: function () {
        return Math.ceil(appData.fullPrice - appData.fullPrice * (appData.rollback/100));
    },

    getTitle: function(str) {
        let arr = str.split('');
        let gap = '';
        for (let i=0; i<=arr.length; i++) {
            if (arr[i] == ' ') {
                gap = gap + arr[i];
            } else {
                return gap + arr[i].toLocaleUpperCase() + str.toLocaleLowerCase().slice(i+1);
            }
        }
    },

    logger: function() {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
    },

    start: function() {
        appData.asking();
        appData.logger();
    },
};


appData.title = ' КаЛьКулятор Верстки';
appData.fullPrice = appData.screenPrice + appData.servicePrice1 + appData.servicePrice2;


appData.start();
appData.allServicePrices = appData.getAllServicePrices();
appData.fullPrice = appData.getFullPrice();
appData.servicePercentPrice = appData.getAllServicePrices();

console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);
