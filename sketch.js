
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof=new Roof(width/2,height/4,width/7,20)
BallDiameter=40
ball1=new Ball(width/2-BallDiameter*2,height/4+500,BallDiameter)
ball2=new Ball(width/2-BallDiameter*1,height/4+500,BallDiameter)
ball3=new Ball(width/2-BallDiameter*0,height/4+500,BallDiameter)
ball4=new Ball(width/2+BallDiameter*1,height/4+500,BallDiameter)
ball5=new Ball(width/2+BallDiameter*2,height/4+500,BallDiameter)
string1=new Rope(ball1.body,roof.body,-BallDiameter*2,0)
string2=new Rope(ball2.body,roof.body,-BallDiameter*1,0)
string3=new Rope(ball3.body,roof.body,-BallDiameter*0,0)
string4=new Rope(ball4.body,roof.body,+BallDiameter*1,0)
string5=new Rope(ball5.body,roof.body,+BallDiameter*2,0)


	Engine.run(engine);
  

}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  string1.display()
  string2.display()
  string3.display()
  string4.display()
  string5.display()
  roof.display()

}
function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:50,y:-45})
	}
}
function DrawLine(constraint){
	ballBodyPos=constraint.bodyA.position
	RoofBodyPos=constraint.bodyB.position
	roofbodyoffset=constraint.pointB
	roofbodyX=RoofBodyPos.x+roofbodyoffset.x
	roofbodyY=RoofBodyPos.y+roofbodyoffset.y
	line(ballBodyPosition.x,ballBodyPosition.y,roofbodyX.roofbodyY)

}

