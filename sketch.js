var stand;

const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
  createCanvas(800,400);
  engine = Engine.create;
  world = engine.world;
  stand = new Ground(390,265,150,20);
  Engine.run(engine);
}

function draw() {
  background(255,255,255); 
  stand.display();
}