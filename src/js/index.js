'use strict';

const stage = new Stage(10,7)
stage.mount(".container")

const pac = new Pacman(0,0,'open','right',stage.TILEw,stage.TILEh)
pac.mount(".stage")

// console.log('it works!');

// const TILE_SIZE = 85;

// let xpos = 0;

// document.querySelector('html').addEventListener('keydown',(e) => {
//     switch (e.code) {
//         case 'ArrowRight' : {
//             const pac = document.querySelector('.entity--pac');
//             xpos += TILE_SIZE;
//             pac.classList.toggle('pacboy--closed')
//             console.log(xpos)
//             pac.style.left = `${xpos}px`;
//             break;
//         }
//     }
    
// })