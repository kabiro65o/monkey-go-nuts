var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0

function preload(){
  
  //load animation
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
}



function setup() {
  //creating monkey sprite
  monkey=createSprite(100,350,900,10)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1
        
  ground=createSprite(400,350,900,10)
  ground.velocityX-4;
  ground.X=ground.width/2
  console.log(ground.X)
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  

}


function draw() {
  
   
background(255);
 monkey.velocityY = monkey.velocityY + 0.8
  if(ground.x<0){ 
    
     
  }
  text("survival Time: "+ score, 200,30);
  
 //making monkey jump when space is pressed
  if(keyDown("space")){
    monkey.velocityY=-12
  
  
 }
   
 score = score + Math.round(getFrameRate()/60);

   
    spawnbanana();
spawnobstacle();

    
    
    
  monkey.collide(ground);
  
  drawSprites();
}

  
   function spawnbanana(){
if (World.frameCount%50===0){
banana=createSprite(500,200,10,2); 
 banana.x=Math.round(random(100,500)) 
banana.y = Math.round(random(80,120))
  banana.setlifetime=150;
  banana.velocityX=-3
banana.addImage( bananaImage );
  banana.scale=0.1
}  
}  
  
 function spawnobstacle (){
if (World.frameCount%80===0){
obstacle=createSprite(500,320,200,2); 
obstacle.setlifetime=150;
obstacle.velocityX=-3
obstacle.addImage( obstacleImage);
obstacle.scale=0.1
}  
    
}  