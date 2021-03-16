const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  ground = new Ground(800,20,2000,height);

  stand1 = new Stand(650,280,300,10);
  stand2 = new Stand(1020,230,300, 10);
 
  //level one
  block1 = new Block(650,250,40,60);
  block2 = new Block(650,250,40,60);

  block3 = new Block(650,240,40,60);
  block4 = new Block(650,240,40,60);
  block5 = new Block(650,240,40,60);

  block6 = new Block2(650,200,40,60);
  block7 = new Block2(650,200,40,60);
  block8 = new Block2(650,200,40,60);

  block9 = new Block4(650,160,40,60);
  block10 = new Block4(650,160,40,60);

  block11 = new Block3(650,120,40,60);

  //set 2 for second stand
 
  blocks1 = new Block2(1100,120,40,60);
  blocks2 = new Block2(1060,120,40,60);
  blocks3 = new Block2(1020,120,40,60);
  blocks4 = new Block2(980,120,40,60);
  blocks5 = new Block2(940,120,40,60);
  
  blocks6 = new Block(1060,100,40,60);
  blocks7 = new Block(1020,100,40,60);
  blocks8 = new Block(980,100,40,60);
  
  blocks9 = new Block4(1020,80,40,60);

  //ball holder with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});

}
function draw() {
  background("black"); 
 
  //Engine.update(engine);
  //text(mouseX + ',' + mouseY, 10, 15);
  textSize(20);
  fill("lightyellow");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

  ground.display();
  stand1.display();
  stand2.display();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
    block8.display();
  block9.display();
  block10.display();
  block11.display();
 
 
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
   blocks6.display();
  blocks7.display();
  blocks8.display();
   blocks9.display();
 
  imageMode(CENTER)
  image(polygon_img ,ball.position.x,ball.position.y,40,40);

  slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}