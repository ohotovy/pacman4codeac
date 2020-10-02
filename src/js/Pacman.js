class Pacman {
    constructor (xpos,ypos,mouth,direction) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.mouth = mouth;
        this.direction = direction;
        this.TILE_SIZE = 85;
    }

    moveRight() {
        const pac = document.querySelector('.entity--pac');
        this.xpos += this.TILE_SIZE;
        this.direction = 'right'
    }

    update() {
        const pac = this.element.querySelector(".entity--pac")
        pac.style.left = `${this.xpos}px`;
        pac.classList.toggle('pacboy--closed');
    }

    render() {
        const elm = document.createElement('div');
        elm.classList=`entity entity--pac pacboy-active-light pacboy--${direction}`;
        
        document.querySelector('html').addEventListener('keydown',(e) => {
            switch (e.code) {
                case 'ArrowRight' : {
                    this.moveRight()
                    this.update()
                    break;
                }
            }
            
        })

        return(elm);
    }

    mount(parent) {
        this.element = this.render();
        this.update();
        document.querySelector(parent).appendChild(this.element);
    }
}