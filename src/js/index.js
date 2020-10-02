'use strict';





const stage = new Stage(mazeW,mazeH)
stage.mount(".container")

fetch(`http://bootcamp.podlomar.org/api/pacman?width=${mazeW}&height=${mazeH}`)
.then((resp) => resp.json())
.then((json) => {
    for (let i=0;i<json.walls.length;i++) {
        let wall = new Entity(json.walls[i].x,json.walls[i].y,'wall',stage)
        wall.mount()
    }
    for (let i=0;i<json.apples.length;i++) {
        let apple = new Entity(json.apples[i].x,json.apples[i].y,'apple',stage)
        apple.mount()
    }
    for (let i=0;i<json.bombs.length;i++) {
        let bomb = new Entity(json.bombs[i].x,json.bombs[i].y,'bomb',stage)
        bomb.mount()
    }
  });



// const apple1 = new Entity(1,1,'apple',stage)
// apple1.mount()

// const apple2 = new Entity(2,1,'apple',stage)
// apple2.mount()

// const apple3 = new Entity(3,1,'apple',stage)
// apple3.mount()

// const bomb = new Entity(2,5,'bomb',stage)
// bomb.mount()


const pac = new Pacman(0,0,'open','right',stage,stage.TILEw,stage.TILEh,gender,color)
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