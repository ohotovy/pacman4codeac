class Stage {
   constructor (TILEw, TILEh) {
   this.TILEw = TILEw;
   this.TILEh = TILEh;
   this.entities = [];
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

 collisionDetection(x,y) {
    //console.log(this.entities[0].xpos);
   let response;
   for (let i = 0; i< this.entities.length; i++) {
         if (x===this.entities[i].xpos && y===this.entities[i].ypos)
         {
         return this.entities[i];
      }  else {response = {type:"clear"}}
   }
   return response;
 }

 removeEntity(entity) {
   for (let i = 0; i < this.entities.length; i++) {
      if (this.entities[i]===entity) {
         this.entities[i].unmount();
         this.entities.splice(i,1)
      } 
   }

   // this.entities[entityNo].unmount();
   // this.entities.splice(entityNo,1)
 }
}
