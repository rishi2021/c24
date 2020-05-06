const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var ground,box1,box2

function preload() {
}

function setup(){
    var canvas = createCanvas(1200,1200);
    engine = Engine.create();
    
    world = engine.world;

    ground = new Ground(400,790,800,20);

    box1 = new Box(400,550,400,400);
    box2 = new Box(675,400,50,700);
    box3 = new Box(125,400,50,700);
    box4 = new Box(400,755,800,50)
}

function draw(){
    background("black");
    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    fill("white");
    triangle(175, 350, 400, 250, 625, 350);
}