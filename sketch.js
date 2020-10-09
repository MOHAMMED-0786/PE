const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;


var engine,world
var ground,ball;
function setup(){
    var canvas =createCanvas(500,500)

  engine=Engine.create();
 world=engine.world;

 var options={
  isStatic:true

 }
 ground=Bodies.rectangle(200,490,400,50,options);
 World.add(world,ground);
 
 var ball_options={
     restitution:1
 }
 ball=Bodies.circle(200,100,20,ball_options);
 World.add(world,ball)

 }
function draw(){
background(0);
Engine.update(engine);

rectMode(CENTER);          
rect(ground.position.x,ground.position.y,50,50);

ellipseMode(RADIUS)
ellipse(ball.position.x,ball.position.y,20,20);
}

