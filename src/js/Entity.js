class Entity {
    constructor(xpos,ypos,type,parent) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.type = type;
        this.parent = parent;
    }

    render() {
        const ent = document.createElement('div');
        ent.classList = `entity entity--${this.type}`;
        ent.style.left = `${this.xpos*TILE_SIZE}px`;
        ent.style.top = `${this.ypos*TILE_SIZE}px`;
        return(ent)
    }

    mount() {
        this.entity = this.render();
        this.parent.entities.push(this)
        this.parent.elm.appendChild(this.entity);
    }

    unmount() {
        this.entity.remove()
    }
}