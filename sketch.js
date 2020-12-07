var rectangle1,rectangle2,rectangle3
var helicopterIMG,helicopterSprite,packageSprite,PackageIMG
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies =  Matter.Bodies;
const Body = Matter.Body;

function preload()
{

helicopterIMG=loadImage("helicopter.png")    
packageIMG=loadImage("package.png")

}

function setup() {
     createCanvas(800,700);
    rectMode(CENTER)
	
	
	packageSprite=createSprite(width/2,80,10,10);
    packageSprite.addImage(packageIMG)
    packageSprite.scale=0.2

    helicopterSprite=createSprite(width/2,200,10,10);
    helicopterSprite.addImage(helicopterIMG)
    helicopterSprite.scale=0.6

	rectangle1Sprite=createSprite(250,630,10,60);
    rectangle2Sprite=createSprite(380,655,250,10);
    rectangel3sprite=createSprite(510,630,10,60);
	
	
	
	groundSprite=createSprite(width/2, height-35,width,10);
    groundSprite.shapecolor=color(255)

    engine = Engine.create();
    world = engine.world;

    packageBody = Bodies.circle(width/2 , 200 , 5 ,{restitution:0.1, isStatic:true});
    World.add(world, packageBody);



    ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
    World.add(world, ground);
    console.log(packageBody.position.x)
   
    Engine.run(engine);    

}


function draw() {
  rectMode(CENTER);
  background(0); 
  Engine.update(engine);
  console.log(packageBody.position.x)

  packageSprite.x= packageBody.position.x
  packageSprite.y= packageBody.position.y
  
  drawSprites();

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
 }
}
