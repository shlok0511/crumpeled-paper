const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground;
var dustbin;
function preload(){
    dustbin = loadImage("trashcangreen.png"); 
}
function setup(){
    var canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Ground(1200,550,200,20);
    box2 = new Ground(1100,500,20,150);
    box3 = new Ground(1300,500,20,150);

    ball = new Ball(200,350,20);
    ground = new Ground(800,590,1600,20);  
}

function draw(){
    background("lightgreen" );
    Engine.update(engine);
   ball.display();
   ground.display();
   imageMode(CENTER);
   image(dustbin,1200,500,250,150);
}

function keyPressed(){
    if(keyCode == UP_ARROW){
        Matter.Body.applyForce(ball.body,ball.body.position,{x:75,y:-75});
    }
}