'use strict';

let i = null;
let timer = null;

$('input')
.focus((event) => {
    i = $(event.target).next();
    i.addClass('bx-tada');
    timer = setTimeout(() => {
        i.removeClass('bx-tada');
    }, 1500);
})
.blur(() => {
    i.removeClass('bx-tada');
    clearTimeout(timer);
});
