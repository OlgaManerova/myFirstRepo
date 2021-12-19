'use strict'

const image = document.querySelector('body');
const adv = document.querySelector('.adv').remove();

const books = document.querySelector('.books');
const book = document.querySelectorAll('.book');

books.prepend(book[1]);
books.append(book[2]);
book[3].before(book[4]);


image.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';


let title = book[4].querySelector('a');
title.innerHTML = 'Книга 3. this и Прототипы Объектов'

let list = book[0].querySelector('ul');
let items = list.querySelectorAll('li');

items[9].after(items[2]);
items[4].before(items[8]);
items[3].after(items[6]);


let list2 = book[5].querySelector('ul');
let items2 = list2.querySelectorAll('li');

items2[8].before(items2[5]);
items2[1].after(items2[9]);
items2[9].after(items2[3],items2[4]);


let list6 = book[2].querySelector('ul');
let items6 = list6.querySelectorAll('li');
let item8 = document.createElement('li');

item8.textContent = 'Глава 8: За пределами ES6';

items6[9].before(item8);


