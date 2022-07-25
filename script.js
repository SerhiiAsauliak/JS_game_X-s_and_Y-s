"use strict";

const field = document.querySelector('.field'),
      modal = document.querySelector('.modal-wrapper'),
      closeBtn = document.querySelector('.modal__close'),
      againBtn = document.querySelector('.modal__btn'),
      overlay = document.querySelector('.overlay'),
      blocks = document.querySelectorAll('.block');

let evenOdd = 0;
let count = 0;
let res = '';

closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
againBtn.addEventListener('click', closeModal );
window.addEventListener('keydown', (e) => {
   if(e.code === 'Escape' && showResult){
      closeModal();
   }
});
field.addEventListener('click', (e) => {
   count++;
   if(count < 9){
      if(e.target.innerHTML === ''){
         (evenOdd % 2 === 0) ? e.target.innerHTML = 'O': e.target.innerHTML = 'X';
         evenOdd++;
         check();
      }else{
         check();
      }
   }else{
      res = 'ничья';
      showResult(res);
   }
});

const check = () => {
   const arr = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6,], [1,4,7], [2,5,8], [0,4,8], [2,4,6] ];
   
   for(let i = 0; i < arr.length; i++){
      if(blocks[arr[i][0]].innerHTML == 'O' && blocks[arr[i][1]].innerHTML == 'O' && blocks[arr[i][2]].innerHTML == 'O'){
         res = 'нолики';
         showResult(res);
      }else if(blocks[arr[i][0]].innerHTML == 'X' && blocks[arr[i][1]].innerHTML == 'X' && blocks[arr[i][2]].innerHTML == 'X'){
         res = 'крестики';
         showResult(res);
      }
   }
   
};

function showResult(value) {
   document.querySelector('.modal__text').innerHTML = `Победитель: ${value} `;
   modal.classList.toggle('hide');
}

function closeModal() {
   modal.classList.toggle('hide');
   location.reload();
}