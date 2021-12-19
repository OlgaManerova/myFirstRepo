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

const input = document.querySelector('#input');
const select = document.querySelector('#select');

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
        this.addTitle();
        startBtn.disabled = true;
        this.buttonBlock();
        startBtn.addEventListener('click', this.start.bind(this));
        buttonPlus.addEventListener('click', this.addScreenBlock);
        resetBtn.addEventListener('click', this.reset.bind(this)),
        this.rollback();
    },
    addTitle: function() {
        document.title = title.textContent;
    },
    start: function() {
        this.addScreens();
        this.addServices();
        this.addPrices();
        this.inputBlock();

        // appData.logger();
        this.showResult();
    },

    inputBlock: function() {
        startBtn.style.display = 'none';
        resetBtn.style.display = 'flex';

        this.toggleDisabledScreens(true);
    },

    reset: function() {
        startBtn.style.display = 'flex';
        resetBtn.style.display = 'none';

        this.toggleDisabledScreens(false);

        this.clearResult();
    },

    toggleDisabledScreens: function(indicator) {
        let screens = document.querySelectorAll('.screen ');
        let otherItems = document.querySelectorAll('.other-items [type="checkbox"]');

        // блокируем селекты с инпутами
        screens.forEach((screen, index) => {
            let select = screen.querySelector('select');
            let input = screen.querySelector('input');

            input.disabled = indicator;
            select.disabled = indicator;

            if (!indicator) {
                input.value = '';
                select.value = '';

                if (index > 0) {
                    screen.remove();
                }
            }
        });

        // блокируем чекбоксы
        otherItems.forEach((item) => {
            item.disabled = indicator;

            if (!indicator) {
                item.checked = false;
            }
        });

        // блокируем рэнж 
        inputRange.disabled = indicator;
        if (!indicator) {
            inputRange.value = 0;
            inputRangeValue.textContent = '0%';
        }

    },

    buttonBlock: function() {
        const block = document.querySelector('.screen');
        const select = document.querySelector('select');
        const input = document.querySelector('.screen input');

        block.addEventListener('change', () => {
            if (input.value != '' && select.value != '') {
                startBtn.disabled = false;
            }
        })
    },

    showResult: function() {
        total.value = this.screenPrice;
        totalCountOther.value = this.servicePricesPercent + this.servicePricesNumber;
        fullTotalCount.value = this.fullPrice;
        totalCount.value = this.totalPrice;
        TotalCountRollBack.value = this.totalRollback;

    },

    clearResult: function() {
        total.value = '';
        totalCountOther.value = '';
        fullTotalCount.value = '';
        totalCount.value = '';
        TotalCountRollBack.value = '';
    },
    addScreens: function() { 
        screens = document.querySelectorAll('.screen ');

        screens.forEach((screen, index) => {
            const select = screen.querySelector('select');
            const input = screen.querySelector('input');
            const selectName = select.options[select.selectedIndex].textContent;

            this.screens.push({
                id: index, 
                name: selectName, 
                price: +select.value * +input.value,
                count : +input.value,
            });
            console.log(select);

            select.addEventListener('change', (event) => {
                console.log(this.value);
                if (this.value != '') {
                    console.log(this.value);
                    startBtn.disabled = false;
                }
            })
            
        }) 
        console.log(this.screens);
    },

    addServices: function() {
        otherItemsPercent.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            console.log(check);
            console.log(label);
            console.log(input);

            if (check.checked) {
                this.servicesPercent[label.textContent] = +input.value;
            }
        });

        otherItemsNumber.forEach((item) => {
            const check = item.querySelector('input[type=checkbox]');
            const label = item.querySelector('label');
            const input = item.querySelector('input[type=text]');

            console.log(check);
            console.log(label);
            console.log(input);

            if (check.checked) {
                this.servicesNumber[label.textContent] = +input.value;
            }
            // console.log(appData);
        })
    },

    rollback: function() {
        inputRange.addEventListener('input', () => {
            inputRangeValue.textContent = inputRange.value + '%';
            this.rollback = inputRange.value;
        })
    },

    addScreenBlock: function(){
        const cloneScreen = screens[0].cloneNode(true);
        cloneScreen.querySelector('input').value = '';

        screens[screens.length - 1].after(cloneScreen);
    },

    addPrices: function() {
        for (let screen of this.screens) {
            this.screenPrice += +screen.price;
            this.totalPrice += +screen.count;
        };

        for (let key in this.servicesNumber) {
            this.servicePricesNumber += this.servicesNumber[key];
        }

        for (let key in this.servicesPercent) {
            this.servicePricesPercent += this.screenPrice * (this.servicesPercent[key] / 100);
        }

        this.fullPrice = +this.screenPrice + this.servicePricesNumber + this.servicePricesPercent;

        this.totalRollback = this.fullPrice - (this.fullPrice * (this.rollback / 100));
    },

    logger: function() {
        console.log(this.fullPrice);
        console.log(this.servicePercentPrice);
        console.log(this.screens);
    },
};


appData.init();

