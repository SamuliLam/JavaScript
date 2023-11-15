'use strict';
const names = ['John', 'Paul', 'Jones'];

names.forEach(function (name) {
    document.getElementById('target').innerHTML += `<li>${name}</li>`;
});
