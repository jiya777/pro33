const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;

var engine, world;





var snow1,snow2,snow3,snow4,snow5,snow6,snow7,snow8;
var bg;
function preload(){
bg=loadImage("snow3.jpg")
}

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  snow1=new Snow(700,30,20);
  snow2=new Snow(100,30,20);
  snow3=new Snow(200,30,20);
  snow4=new Snow(300,30,20);
  snow5=new Snow(400,30,20);

  snow6=new Snow(500,30,20);
  snow7=new Snow(600,30,20);


}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

image(bg,50,10,800,500);
snow1.display();
snow2.display();
snow3.display();
snow4.display();
snow5.display();
snow6.display();
snow7.display();

  drawSprites();
}