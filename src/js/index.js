'use strict';

const stage = new Stage(10,7)
stage.mount(".container")

const wall = new Entity(2,4,'wall',stage)
wall.mount()

const apple1 = new Entity(1,1,'apple',stage)
apple1.mount()

const apple2 = new Entity(2,1,'apple',stage)
apple2.mount()

const apple3 = new Entity(3,1,'apple',stage)
apple3.mount()

const bomb = new Entity(2,5,'bomb',stage)
bomb.mount()


const pac = new Pacman(0,0,'open','right',stage,stage.TILEw,stage.TILEh)
pac.mount()

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