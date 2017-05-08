'use strict';

const Button = require('./components/button');

const root = document.getElementById('root');

const button = new Button({
    label: 'Dima'
});

const markup = button.render();

root.innerHTML = markup;
