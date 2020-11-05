
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;


function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;


	paper = new Paper(80 , 630);
}

function draw() {

  rectMode(CENTER);
  background(0);

  paper.display(50,50);

  keyPressed();

  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(PaperObject.body,PaperObject.body.position,{x:85,y:-85});
	}
}

