const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1, ground2;
var box1, box2, box3, box4, box5, box6;
var box7, box8, box9, box10, box11, box12, box13, box14, box15;
var stopper;
var baseGround;
var catapult;

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;

    fill("white");
    bubble1 = new Bubbles(410, 180, 20, 20, 240,128,128)

    //stopper = new Box(100, 230, 30,30, 255,255,255);
    //slingshot = new SlingShot(stopper.body,{x:100, y:230});

    
    //catapult = new Ground(100,280,10,40 );
    //baseGround = new Ground(100,360,100, 160);
}

function draw(){
    background("black");
    Engine.update(engine);
    strokeWeight(4);
    bubble1.display()
    
}