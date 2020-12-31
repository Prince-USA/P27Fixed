
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1
var bobObject2
var bobObject3
var bobObject4
var bobObject5,roof

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(300, 150, 300, 20)
	bobObject1 = new Bob(230,500)
	bobObject2 = new Bob(265, 500)
	bobObject3 = new Bob(300, 500)
	bobObject4 = new Bob(335, 500)
	bobObject5 = new Bob(370, 500)


	rope1 = new Rope(bobObject1.body,roof.body,-35*4,0)
	rope2 = new Rope(bobObject2.body, roof.body,-35*2, 0)
	rope3 = new Rope(bobObject3.body, roof.body, 0, 0)
	rope4 = new Rope(bobObject4.body, roof.body, -35*-2, 0)
	rope5 = new Rope(bobObject5.body, roof.body, -35*-4, 0)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);

	roof.display()
	bobObject1.display()
	bobObject2.display()
	bobObject3.display()
	bobObject4.display()
	bobObject5.display()
	rope1.display()
	rope2.display()
	rope3.display()
	rope4.display()
	rope5.display()

  
  drawSprites();
 
}
function keyPressed() {
	if (keyCode == 32) {
		Matter.Body.applyForce(bobObject5.body, bobObject5.body.position, { x:-280, y: 280 })
    }
}


