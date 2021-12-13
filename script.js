'use strict'

const title = document.getElementsByTagName('h1')[0];
const buttonPlus = document.querySelector('.screen-btn');
const otherItemsPercent = document.querySelectorAll('.other-items.percent');
const otherItemsNumber = document.querySelectorAll('.other-items.number');

const inputRange = document.querySelector('.rollback input');
const inputRangeValue = document.querySelector('.rollback .range-value');

const startBtn = document.querySelector('#start');
const resetBtn = document.querySelector('#reset');

const total = document.getElementsByClassName('total-input')[0];
const totalCount = document.getElementsByClassName('total-input')[1];
const totalCountOther = document.getElementsByClassName('total-input')[2];
const fullTotalCount = document.getElementsByClassName('total-input')[3];
const TotalCountRollBack = document.getElementsByClassName('total-input')[4];

let screens = document.querySelectorAll('.screen ');

const appData = {
    title: '',
    screens: [],
    screenPrice: 0,
    adaptive: true,
    rollback: 10,
    totalRollback: 0,
    servicePricesPercent: 0,
    servicePricesNumber: 0,
    fullPrice: 0,
    totalPrice: 0,
    servicePercentPrice: 0,
    servicesPercent: {},
    servicesNumber: {},
    init: function() {
        appData.addTitle();
        startBtn.disabled = true;
        appData.buttonBlock();
        startBtn.addEventListener('click', appData.start);
        buttonPlus.addEventListener('click', appData.addScreenBlock);
        appData.rollback();
    },
    addTitle: function() {
        document.title = title.textContent;
    },
    start: function() {
        appData.addScreens();
        appData.addServices();
        appData.addPrices();

        // appData.logger();
        appData.showResult();
        console.log(appData);
    },

    buttonBlock: function() {
        const block = document.querySelector('.screen');
        const select = document.querySelector('select');
        const input = document.querySelector('.screen input');

        block.addEventListener('change', function() {
            if (input.value != '' && select.value != '') {
                startBtn.disabled = false;
            }
        })
    },

    showResult: function() {
        total.value = appData.screenPrice;
        totalCountOther.value = appData.servicePricesPercent + appData.servicePricesNumber;
        fullTotalCount.value = appData.fullPrice;
        totalCount.value = appData.totalPrice;
        TotalCountRollBack.value = appData.totalRollback;

    },
    addScreens: function() { 
        screens = document.querySelectorAll('.screen ');

        screens.forEach(function(screen, index) {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            appData.screens.push({
                id: index, 
                name: selectName, 
                price: +select.value * +input.value,
                count : +input.value,
            });
            console.log(select);

            select.addEventListener('change', function(event) {
                console.log(this.value);
                if (this.value != '') {
                    console.log(this.value);
                    startBtn.disabled = false;
                }
            })
            
        }) 
        console.log(appData.screens);
    },

    addServices: function() {
        otherItemsPercent.forEach(function(item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            console.log(check);
            console.log(label);
            console.log(input);

            if (check.checked) {
                appData.servicesPercent[label.textContent] = +input.value;
            }
        });

        otherItemsNumber.forEach(function(item) {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            console.log(check);
            console.log(label);
            console.log(input);

            if (check.checked) {
                appData.servicesNumber[label.textContent] = +input.value;
            }
            console.log(appData);
        })
    },

    rollback: function() {
        inputRange.addEventListener('input', function() {
            inputRangeValue.textContent = inputRange.value;
            appData.rollback = inputRange.value;
        })
    },

    addScreenBlock: function(){
        const cloneScreen = screens[0].cloneNode(true);

        screens[screens.length - 1].after(cloneScreen);
    },

    addPrices: function() {
        for (let screen of appData.screens) {
            appData.screenPrice += +screen.price;
            appData.totalPrice += +screen.count;
        };

        for (let key in appData.servicesNumber) {
            appData.servicePricesNumber += appData.servicesNumber[key];
        }

        for (let key in appData.servicesPercent) {
            appData.servicePricesPercent += appData.screenPrice * (appData.servicesPercent[key] / 100);
        }

        appData.fullPrice = +appData.screenPrice + appData.servicePricesNumber + appData.servicePricesPercent;

        appData.totalRollback = appData.fullPrice - (appData.fullPrice * (appData.rollback / 100));
    },

    logger: function() {
        console.log(appData.fullPrice);
        console.log(appData.servicePercentPrice);
        console.log(appData.screens);
    },
};


appData.init();

