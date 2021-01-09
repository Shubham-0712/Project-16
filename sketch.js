var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstaclesGroup
var survivalTime;
var ground;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 

  
}



function setup() {
  
  createCanvas(500, 400);
  
  monkey = createSprite(60,300,20,10);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(60,335,1000,10);
  ground.velocityX = -4;
  ground.x = ground.width /2;
  console.log(ground.x)
  
  var survivalTime = 0; 
  
  foodGroup = createGroup();
  obstaclesGroup = createGroup();
  
}


function draw() {
  
  background(225);
  
    
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  if(keyDown("space")&& monkey.y >= 200) {
    
    monkey.velocityY = -12;
       
    }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
    stroke("white");
    fill("white");
    textSize(20);
    text("Score:",+ score, 500,50);
  
    stroke("black");
    fill("black");
    textSize(20);
    survivalTime = Math.round(frameCount/frameRate())
    text("Survival Time: " + survivalTime, 100,50);
   
  food();
  spawnObstacles();
  
  drawSprites();
}

function food(){
  
if (frameCount % 80 === 0) {
  
var banana = createSprite(600,120,40,10);  
banana.y = Math.round(random(120,200));
banana.addImage(bananaImage); 
banana.scale = 0.1;
banana.velocityX = -4; 
  
banana.lifetime = 490;
  
banana.depth = monkey.depth;
monkey.depth = monkey.depth + 1;
  
foodGroup.add(banana);  

} 
  
}

function spawnObstacles(){
  
if (frameCount % 300 === 0){
  
var obstacle = createSprite(500,300,10,40);
obstacle.velocityX = -6;
obstacle.lifetime = 490; 
obstacle.addImage(obstacleImage);
obstacle.scale = 0.2;  
  
  obstaclesGroup.add(obstacle);
  
  
}
  
 
}
