const TILE_SIZE = 85; 

class Stage {
 constructor (TILEw, TILEh) {
 this.TILEw = TILEw;
 this.TILEh = TILEh;
 }

 update() {
    const stage = this.elm;
    stage.style.width = `${this.TILEw * TILE_SIZE}px`;
    stage.style.height = `${this.TILEh * TILE_SIZE}px`;
 }

 render() {
    const stage = document.createElement('div');
    stage.classList = "stage";
    return(stage);
 }

 mount(parent) {
    this.elm = this.render();
    this.update();
    document.querySelector(parent).appendChild(this.elm)
 }

}
