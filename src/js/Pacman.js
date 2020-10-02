class Pacman {
    constructor (xpos,ypos,mouth) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.mouth = mouth;
        this.TILE_SIZE = 85;
    }

    moveRight() {
        const pac = document.querySelector('.entity--pac');
        this.xpos += this.TILE_SIZE;
    }

    update() {
        const pac = this.element.querySelector(".entity--pac")
        pac.style.left = `${this.xpos}px`;
        pac.classList.toggle('pacboy--closed');
    }

    render() {
        const elm = document.createElement('div');
        elm.classList="container";
        elm.id="app";
        elm.innerHTML = `
            <div class="entity entity--pac pacboy-active-light pacboy--closed">
        `;
        
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