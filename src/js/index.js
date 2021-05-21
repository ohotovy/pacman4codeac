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


const pac = new Pacman(0,0,'open','right',stage,stage.TILEw,stage.TILEh,gender,color)
pac.mount()