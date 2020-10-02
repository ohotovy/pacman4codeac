class Pacman {
    constructor (xpos,ypos,mouth, direction,maxx,maxy) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.mouth = mouth;
        this.direction = direction;
        this.maxx = maxx-1;
        this.maxy = maxy-1;
    }

    moveRight() {
        this.xpos < this.maxx ? this.xpos++ : this.xpos;
        this.directionP = this.direction;
        this.direction = 'right';
           }

    moveLeft() {
        this.xpos > 0 ? this.xpos-- : this.xpos;
       this.directionP = this.direction;
       this.direction = 'left';
       
    }

    moveUp() {
        this.ypos > 0 ? this.ypos-- : this.ypos;
        this.directionP = this.direction;
        this.direction = 'up';

    }

    moveDown() {
        this.ypos < this.maxy ? this.ypos++ : this.ypos;
        this.directionP = this.direction;
        this.direction = 'down';

    }
   
    update() {
        const pac = this.element;
        pac.style.left = `${this.xpos*TILE_SIZE}px`;
        pac.style.top = `${this.ypos*TILE_SIZE}px`;
        pac.classList.remove(`pacboy--${this.directionP}`);
        pac.classList.add(`pacboy--${this.direction}`);
        pac.classList.toggle('pacboy--closed');
    }

    render() {
        const elm = document.createElement('div');
        elm.classList=`entity entity--pac pacboy-active-light pacboy--${this.direction}`;
        /*elm.classList="container";
        elm.id="app";
        elm.innerHTML = `
            <div class="entity entity--pac pacboy-active-light pacboy--closed">
        `;*/
        
        document.querySelector('html').addEventListener('keydown',(e) => {
            switch (e.code) {
                case 'ArrowRight' : {
                    this.moveRight()
                    break;
                }
                case 'ArrowLeft' : {
                    this.moveLeft()
                    break;
                }
                case 'ArrowUp' : {
                    this.moveUp()
                    break;
                }
                case 'ArrowDown' : {
                    this.moveDown()
                    break;
                }
               
               
            }
            this.update()
        })

        return(elm);
    }

    mount(parent) {
        this.element = this.render();
        console.log(this.element)
        this.update();
        document.querySelector(parent).appendChild(this.element);
    }
}