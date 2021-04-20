const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object,ball;

function setup(){
    var canvas = createCanvas(600,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(200,height,1200,20);

   ball1 = new Ball(100,100,20,20);
   ball2 = new Ball(200,100,20);
   ball3 = new Ball(300,100,20,20);
   ball4 = new Ball(400,100,20,20);
   ball12 = new Ball(100,200,20,20);
   ball22 = new Ball(200,200,20,20);
   ball32 = new Ball(300,200,20,20);
   ball42 = new Ball(400,200,20,20);

       wall1 = new Wall(150,330,10,150);
       wall2 = new Wall(81,330,10,150);
       wall3 = new Wall(230,330,10,150);
       wall4 = new Wall(330,330,10,150);
       wall5 = new Wall(430,330,10,150);
       wall6 = new Wall(530,330,10,150);


       box1 = new Box(50,50,30,30);
       box2 = new Box(100,50,30,30);
       box3 = new Box(150,50,30,30);
       box4 = new Box(200,50,30,30);
       box5 = new Box(250,50,25,25);
       box6 = new Box(300,50,30,30);
       box7 = new Box(350,50,30,30);
       box8 = new Box(400,50,30,30);
       box9 = new Box(450,50,30,30);
       box10 = new Box(500,50,30,30);
       box11 = new Box(550,50,30,30);

}

function draw(){
    background(0);
    Engine.update(engine);
   ball1.display();
   ground.display();
   ball2.display();
       ball3.display();
      ball4.display();
      ball12.display();
      ball22.display();
      ball32.display();
      ball42.display();


      wall1.display();
      wall2.display();
      wall3.display();
      wall4.display();
      wall5.display();
      wall6.display();

      box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
}