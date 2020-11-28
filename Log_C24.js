   //creating the new log class
    class Log_C24 {
          constructor (x,y,height,angle){
                var options =
                {
                restitution : 0.8,
                friction : 1.0,
                density : 1.0,
                isStatic : true
                }
                //creating the body
                 this.body = Bodies.rectangle(x,y,20,height,options);
                 this.width = 20;
                 this.height = height;
                 this.x = x;
                 this.y = y;
                 //adding the angle
                 Matter.Body.setAngle(this.body, angle);
                 //adding it to the world
                 World.add(world,this.body);

              }
              //displaying the log
          display (){
          //variables for the positions and angles of the log
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
              //creating the rectangle
              rect(0, 0, this.width, this.height);
              //needs to come out of its original location so it needs to "pop" out
              pop();

          }


    }