class Box {
 constructor (x,y,width,height){
     var options = {
     restitution : 0.8
     }

    this.body = Bodies.rectangle(x , y , width , height, options);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;

    World.add(world, this.body);

 }
    display (){
     ///variables for the positions and angles of the log
      var position = this.body.position;
      var angle = this.body.angle;
       //on the collision this will react
       push ();
       translate (position.x, position.y);
        rotate (angle);
        //deco
       strokeWeight(4);
       stroke("green");
       fill (255);
     rectMode(CENTER);
     rect(0, 0, this.width, this.height);
     pop();
    }

}
