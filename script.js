'use strict';

const btn = document.querySelectorAll('.show-modal');
const btnClose = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

function close() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}
btnClose.addEventListener('click', function () {
  close();
});

overlay.addEventListener('click', close());

console.log(btn);
btn.forEach(element => {
  element.addEventListener('click', function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
});
