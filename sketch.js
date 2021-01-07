const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball,ballImage,dustbin,ground,rect1,rect2,rect3;

function preload()
{
	ballImage =loadImage("images/paper.png");	
	dustbinImage = loadImage("images/dustbingreen.png");
}

function setup() {
	createCanvas(1200, 400);
	engine = Engine.create();
	world = engine.world;

	var options=
	{
		isStatic: true
	}

	ground = Bodies.rectangle(600,380,1200,30,options);

	World.add(world ,ground);

	var options2={
		isstatic : false,
		restitution : 0.5,
		friction : 0.3, 
		density : 0.5 
	}
	ball = Matter.Bodies.circle(400,340,70, options2);

	World.add(world ,ball);

	dustbin = createSprite(950,285,60,60);
	dustbin.addImage(dustbinImage);
	dustbin.scale = 0.5;

	var opt1={
		isstatic : true,
		restitution : 0.5,
		friction : 0.3, 
		density : 0.5 
	}

	rect1 = Matter.Bodies.rectangle(950,350,80,20,opt1);
	World.add(world,rect1);	
 
	var opt2={
		isstatic : true,
		restitution : 0.5,
		friction : 0.3, 
		density : 0.5 
	}

	rect2 = Matter.Bodies.rectangle(900,300,20,100,opt2);
	World.add(world,rect2);	

	var opt3={
		isstatic : true,
		restitution : 0.5,
		friction : 0.3, 
		density : 0.5 
	}

	rect3 = Matter.Bodies.rectangle(1000,300,20,100,opt3);
	World.add(world,rect3);	

	//Create the Bodies Here.
	Engine.run(engine);
}

function draw() {
  background("lightblue");

  imageMode(CENTER);
  image(ballImage, 400, 340, 70, 70);

  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,1200,30);  
  rect(rect1.position.x,rect1.position.y,80,20);  
  rect(rect2.position.x,rect2.position.y,20,100);  
  rect(rect3.position.x,rect3.position.y,20,100);  


  Engine.update(engine);
  drawSprites();
}

function keyPressed()
 { if(keyCode === UP_ARROW)
	{
      Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}

 }



