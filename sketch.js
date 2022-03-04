const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//const Body = Matter.Body;
//const Constraint = Matter.Constraint;

var engine;
var world;

var ground;
var box1, box2, box3, box4, box5, box6;
var log1A, log1B, log1C;



function setup()
{
  createCanvas(1200,400)

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,30);

  box1 = new Box(400,height-32,30,30);
  box2 = new Box(440,height-32,30,30);
  box3 = new Box(480,height-32,30,30);
  box4 = new Box(420,height-65,30,30);
  box5 = new Box(460,height-65,30,30);
  box6 = new Box(440,height-100,30,30);
  
  log1A = new Log(600,height-17,30,15);
  log1B = new Log(635,height-17,30,15);
  log1C = new Log(620,height-35,30,15);


}
    
function draw()
{
  background("white")
  ground.show();

  fill("yellow");
  box1.show();
  box2.show();
  box3.show();
  box4.show();
  box5.show();
  box6.show();

 fill("brown")
  log1A.show();
  log1B.show();
  log1C.show();


}