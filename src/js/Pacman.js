class Pacman {
    constructor (xpos,ypos,mouth, direction,parent,maxx,maxy) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.mouth = mouth;
        this.direction = direction;
        this.parent = parent;
        this.maxx = maxx-1;
        this.maxy = maxy-1;
        this.currentCollision = 0;
        this.score = 0;
        this.execute = this.execute.bind(this)
    }

    moveRight() {
            this.xpos < this.maxx ? this.xpos++ : this.xpos;
            this.currentCollision = this.parent.collisionDetection(this.xpos,this.ypos);
            if(this.currentCollision.type=='wall') {
                this.xpos--
            }
            this.directionP = this.direction;
            this.direction = 'right';
        }

    moveLeft() {
        this.xpos > 0 ? this.xpos-- : this.xpos;
        this.currentCollision = this.parent.collisionDetection(this.xpos,this.ypos);
        if(this.currentCollision.type=='wall') {
            this.xpos++
        }
       this.directionP = this.direction;
       this.direction = 'left';
       
    }

    moveUp() {
        this.ypos > 0 ? this.ypos-- : this.ypos;
        this.currentCollision = this.parent.collisionDetection(this.xpos,this.ypos);
        if(this.currentCollision.type=='wall') {
            this.ypos++
        }
        this.directionP = this.direction;
        this.direction = 'up';

    }

    moveDown() {
        this.ypos < this.maxy ? this.ypos++ : this.ypos;
        this.currentCollision = this.parent.collisionDetection(this.xpos,this.ypos);
        if(this.currentCollision.type=='wall') {
            this.ypos--
        }
        this.directionP = this.direction;
        this.direction = 'down';

    }
   
    update() {
        const pac = this.element;
        if(this.currentCollision.type=='apple') {
            this.score++
            this.parent.removeEntity(this.currentCollision)
        }
        pac.style.left = `${this.xpos*TILE_SIZE}px`;
        pac.style.top = `${this.ypos*TILE_SIZE}px`;
        pac.classList.remove(`pacboy--${this.directionP}`);
        pac.classList.add(`pacboy--${this.direction}`);
        pac.classList.toggle('pacboy--closed');
        pac.textContent=`Score: ${this.score}`;
        if(this.currentCollision.type=='bomb') {
            if(Math.random()>0.5) {
                pac.classList = `entity entity--tomb`
                pac.textContent = '';
                document.querySelector('html').removeEventListener('keydown',this.execute)
                console.log('death triggered')
            }
            this.parent.removeEntity(this.currentCollision)
        }
    }

    execute (e) {
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
    }

    render() {
        const elm = document.createElement('div');
        elm.classList=`entity entity--pac pacboy-active-light pacboy--${this.direction}`;
        elm.textContent=`Score: ${this.score}`;
        /*elm.classList="container";
        elm.id="app";
        elm.innerHTML = `
            <div class="entity entity--pac pacboy-active-light pacboy--closed">
        `;*/
        
        document.querySelector('html').addEventListener('keydown',this.execute)

        return(elm);
    }

    mount() {
        this.element = this.render();
        this.update();
        this.parent.elm.appendChild(this.element);        
    }
}