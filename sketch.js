var boat_moving, seaImage, boat
var invicibleGround

function preload(){
boat_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  boat = createSprite(200,160,20,50);
  boat.addAnimation("moving", boat_moving);
  boat.scale = 0.3;
  edges = createEdgeSprites();
  sea = createSprite(200,200,50,50);
  sea.scale = 0.3;
  sea.addImage("sea", seaImage);
  sea.velocityX = 2;
  sea.x = sea.width/2;
  
}

function draw() {
  background("blue");
 drawSprites();
 
 if(sea.x <0){
   sea.x=sea.width/2;
 }
 
 
}