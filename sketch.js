
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas (600,300);
  

  monkey = createSprite(100,250,20,20);
  monkey.addAnimation ("rinning",monkey_running);
  monkey.scale = 0.1;
   edges =  createEdgeSprites();
  

  ground= createSprite(300,290,700,20);
  ground.velocityX = -2;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
}


function draw() 
{
  background("white");
  text("score"+score,300,50);
 score = score + Math.round(getFrameRate ()/60);
    
  
  
  if(keyDown("space") && monkey.y >= 230){
    monkey.velocityY = -10;
  }
  
  monkey.velocityY = monkey.velocityY + 0.5;
  monkey.collide(ground);
  
if(ground.x <400){
  ground.x = 200;
  
}

  spawnObstacle();
  spawnFood();
  
drawSprites();
}

function spawnObstacle(){
  if(frameCount % 80===0){
    obstacle = createSprite(280,260,20,20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.lifetime = 150;
    obstacle.x = Math.round(random(300,580));
    obstacle.velocityX = -5;
    obstacleGroup.add(obstacle);
  }
}

function spawnFood(){
  if(frameCount % 300===0){
    banana = createSprite(200,180,20,20);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.x = Math.round(random(300,580));
    FoodGroup.add(banana);
    
  }
}
