//the physics engine system
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
//creating the boxes
var box1, box2, box3, box4;
var log, log1, log2, log3;
var pig, pig1, pig2;

function setup(){
    //canvas
    var canvas = createCanvas(1200,400);

    //the engines
    engine = Engine.create();
    world = engine.world;
    //ground
    ground = new Ground(40, 400, 2400, 20);
    //boxes
    box1 = new Box(740, 370, 50, 50);
    box2 = new Box(880, 370, 50, 50);
    box3 = new Box(740, 305, 50, 50);
    box4 = new Box(880, 305, 50, 50);
    //logs
    log = new Log_C24(815, 335, 250, PI/2);
    log1 = new Log_C24(815, 270, 250, PI/2);
    log2 = new Log_C24(770, 205, 150, PI/4);
    log3 = new Log_C24(860, 205, 150, PI/-4);
    //egg-stealing pigs
    pig = new Pig_C24(815, 375, 30, 30);
    pig1 = new Pig_C24(815, 310, 30, 30);
    pig2 = new Pig_C24(815, 243, 30, 30);
}

function draw(){
    background("gray");
    Engine.update(engine);

    //displaying the boxes so it appears on the canvas
    box1.display();
    box2.display();
    box3.display();
    box4.display();

    //displaying the ground so it appears on the canvas
    ground.display();

    //displaying the logs so it appears on the canvas
    log.display();
    log1.display();
    log2.display();
    log3.display();

    //displaying the pigs so it appears on the canvas
    pig.display();
    pig1.display();
    pig2.display();

}