class Ground {
    constructor (x,y,width,height){
    var options = {
    isStatic : true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.x = x;
    this.y = y
    this.width = width;
    this.height = height;
    World.add(world, this.body);
    }
    display (){

//variables for the positions and angles of the log
    var position = this.body.position;



      //deco

    rectMode(CENTER);
    rect (position.x, position.y, this.width, this.height);
    fill ("red");
}








}